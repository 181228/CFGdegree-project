import React, { useState } from "react";
import "./forum.css"

const Forum = () => {
    const [thread, setThread] = useState("");

    const createThread = () => {
        fetch("http://localhost:4000/api/create/thread", {
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
    
    // Triggered when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        // Calls the function
        createThread();
        setThread("");
    };

    return (
        <div>
            <br></br>
            <br></br>
            <main className='forum_home'>
                {/* <h2 className='forum_title'>Create a Thread</h2> */}
                <br></br>
                <br></br>
                <br></br>
                <form className='forum_form' onSubmit={handleSubmit}>
                    <div className='forum_container'>
                        <label className="thread-name" htmlFor='thread'>Book title in search</label>
                        <input
                            className="threadTab"
                            type='text'
                            name='thread'
                            required
                            value={thread}
                            onChange={(e) => setThread(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className='forum_thread'>CREATE THREAD</button>
                </form>
            </main>
        </div>
    );
};

export default Forum;