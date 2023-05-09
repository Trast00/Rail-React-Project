import React from 'react'

const Message = (props) => {
  const {name, text} = props
  return (
    <div>
      <span><strong>{name}:</strong> {text}</span>
    </div>
  )
}

export default Message