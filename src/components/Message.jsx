import React from 'react'

const Message = ({ message }) => {
  return (
    <div className="pt-5">
      <div className="chat chat-start">
        <div className="chat-bubble">{message.text}</div>
    </div>
    </div>  
  );
}

export default Message