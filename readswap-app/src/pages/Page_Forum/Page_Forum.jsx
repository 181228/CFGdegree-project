import React, { useState, useEffect } from "react";
import Replies from "./Replies"
import "./forum.css";

const Forum = () => {
    const [thread, setThread] = useState("");
    const [threadList, setThreadList] = useState([]);
    const [expandedThreads, setExpandedThreads] = useState([]);
    const [expandedReplies, setExpandedReplies] = useState([]);


    // Fetch existing threads when the component mounts
    useEffect(() => {
        fetch("http://localhost:3000/api/get/threads")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setThreadList(data); // Set the received threads in the state
        })
        .catch((err) => console.error(err));
    }, []);

    const createThread = () => {
        fetch("http://localhost:3000/api/create/thread", {
        method: "POST",
        body: JSON.stringify({
            thread,
            userId: localStorage.getItem("_id"),
        }),
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createThread();
        setThread("");
    };

    const toggleExpanded = (threadId) => {
        if (expandedThreads.includes(threadId)) {
            // HIDE REPLIES IF VISIBLE
            setExpandedThreads(expandedThreads.filter(id => id !== threadId));
            setExpandedReplies(expandedReplies.filter(id => id !== threadId));
        } else {
            // UNHIDE REPLIES IF HIDDEN
            setExpandedThreads([...expandedThreads, threadId]);
            setExpandedReplies([...expandedReplies, threadId]);
        }
    };

    return (
        <div>
        <main className="forum-container">
            <br />
            <br />
            <form className="forum_form" onSubmit={handleSubmit}>
            <div className="forum_container">
                <br />
                <label className="label-container" htmlFor="thread-name">
                    <h2 className="h2-forum">🔎 Book Title in Search</h2>
                </label>
                <input
                className="threadTab"
                type="text"
                name="thread"
                required
                value={thread}
                onChange={(e) => setThread(e.target.value)}
                />
            </div>
            <button className="forum_thread">CREATE THREAD</button>
            </form>

            <div className="thread-list">
            <br />
            <label className="label-container">
                <h2 className="h2-forum">📌 Existing Threads</h2>
                </label>
                <div className="thread-container">
                <div className="forum-threads">
                    {threadList.map((thread) => (
                        <div key={thread.id} className="thread">
                            <h3 className="title">{thread.title}</h3>
                            <p className="content">{thread.content}</p>
                            <span className="username">{thread.username}</span>
                            <button onClick={() => toggleExpanded(thread.id)}>Toggle Replies</button>
                            {expandedThreads.includes(thread.id) && (
                                <div>
                                    <Replies
                                        threadId={thread.id}
                                        expanded={expandedReplies.includes(thread.id)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </main>
        </div>
    );
};

export default Forum;