import React from 'react'
import Message from './Message'

const ChatBox = () => {

    const messages = [
        {
            id: 1,
            text: "Hello there"
        },
        {
            id: 2,
            text: "Sup! How you doing?"
        }
    ]

    return (
        <div className="pb-44 pt-20 pl-10 pr-10">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}

export default ChatBox