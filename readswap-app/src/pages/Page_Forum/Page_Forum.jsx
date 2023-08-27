import React, { useState, useEffect } from "react";
import Replies from "./Replies";
import "./forum.css";

const Forum = () => {
    const [username, setUsername] = useState("");
    const [thread, setThread] = useState("");
    const [content, setContent] = useState("");
    const [threadList, setThreadList] = useState([]);
    const [expandedThreads, setExpandedThreads] = useState([]);
    const [expandedReplies, setExpandedReplies] = useState([]);
    const token = localStorage.getItem("token");

    // FETCH EXISTING THREADS WHEN THE COMPONENT MOUNTS
    useEffect(() => {
        fetch("http://localhost:3000/api/get/threads", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            if (res.status === 200) {
                return res.json(); // Return the JSON data
            } else {
                throw new Error("Error fetching threads");
            }
        })
        .then((data) => {
            console.log(data);
            setThreadList(data);
        })
        .catch((err) => console.error(err));
    }, [token]);

    const createThread = () => {
        if (!token) {
            alert("You need to be logged in to create a thread.");
            return;
        }

        fetch("http://localhost:3000/api/create/thread", {
            method: "POST",
            body: JSON.stringify({
                thread,
                content,
                userId: localStorage.getItem("_id"),
                username,
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setThreadList([...threadList, {
                id: data.threadId,
                title: thread,
                content: '',
                username: username,
            }]);
            window.location.reload();
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
            setExpandedThreads(expandedThreads.filter((id) => id !== threadId));
            setExpandedReplies(expandedReplies.filter((id) => id !== threadId));
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
                    <h2 className="h2-forum">🔎 Which book are you looking for?</h2>
                </label>
                <div className="thread-inputs-container">
                    <div className="inputs-list">
                        <input
                        className="userTab"
                        type="text"
                        name="username"
                        required
                        value={thread.username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        />
                        <input
                        className="threadTab"
                        type="text"
                        name="thread"
                        required
                        value={thread.title}
                        onChange={(e) => setThread(e.target.value)}
                        placeholder="Thread name"
                        />
                        <input
                        className="contentTab"
                        type="text"
                        name="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Message content"
                    />
                    </div>
                </div>
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
                                        content={thread.content}
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