import React, { useState, useEffect } from "react";
import './forum.css'

const Replies = ({ threadId }) => {
    const [replies, setReplies] = useState([]);
    const [reply, setReply] = useState("");

    // Fetch existing replies when the component mounts
    useEffect(() => {
        fetch(`http://localhost:3000/api/get/replies/${threadId}`)
        .then((res) => res.json())
        .then((data) => {
            setReplies(data);
        })
        .catch((err) => console.error(err));
    }, [threadId]);

    const handleSubmitReply = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/create/reply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reply,
                    userId: localStorage.getItem("_id"),
                    threadId: threadId,
                }),
            });

            if (response.ok) {
                console.log(`Your reply has been posted!`);
            } else {
                console.log(`Your reply couldn't be posted. Status: ${response.status}`);
            }
        } catch (error) {
            console.log(`An error occurred while trying to post your reply: ${error.message}`);
        }

        setReply("");
    };

    return (
        <main className='replies'>
            <h5 className="h5-forum">Replies ⬇️</h5>
                {replies.map((reply) => (
                    <div key={reply.id} className="reply">
                        <p className="content">{reply.content}</p>
                        <span className="username">{reply.username}</span> {/* Correct property name */}
                    </div>
                ))}
            <form className='modal__content' onSubmit={handleSubmitReply}>
                <label htmlFor='reply'><h5 className="h5-forum">Reply to the thread ⬇️</h5></label>
                <textarea
                    rows={6}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    type='text'
                    name='reply'
                    className='modalInput'
                />
                <br />
                <br />
                <button className='modalBtn'>SEND</button>
                <br />
            </form>
        </main>
    );
};

export default Replies;