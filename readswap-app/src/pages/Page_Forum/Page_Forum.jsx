import React, { useState, useEffect } from "react";
import "./forum.css";

const Forum = () => {
    const [thread, setThread] = useState("");
    const [threadList, setThreadList] = useState([]);

    // Fetch existing threads when the component mounts
    useEffect(() => {
        fetch("http://localhost:3000/api/get/threads")
        .then((res) => res.json())
        .then((data) => {
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

    return (
        <div>
        <main className="forum-container">
            <br />
            <br />
            <form className="forum_form" onSubmit={handleSubmit}>
            <div className="forum_container">
                <label className="label-container" htmlFor="thread-name">
                🔎 Book Title in Search
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
            <br></br>
            <label className="label-container" >📌 Existing Threads</label>
            <ul>
                {threadList.map((thread) => (
                <li key={thread._id}>{thread.title}</li>
                ))}
            </ul>
            </div>
        </main>
        </div>
    );
};

export default Forum;
