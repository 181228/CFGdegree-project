import React, { useState } from "react";

const Replies = () => {
    const [reply, setReply] = useState("");

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
        <form className='modal__content' onSubmit={handleSubmitReply}>
            <label htmlFor='reply'>Reply to the thread</label>
            <textarea
            rows={6}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            type='text'
            name='reply'
            className='modalInput'
            />

            <button className='modalBtn'>SEND</button>
        </form>
        </main>
    );
};

export default Replies;
