import React from "react";
import MessageItem from './MessageItem'

function Message({ data }) {
    return (

        <div className="chatboard">
            {[...data].map((message) => {
                return (
                    <MessageItem key={message.id} message={...message} />
                )
            })}
        </div>
    )
}

export default Message