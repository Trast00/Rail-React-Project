import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMessages } from '../redux/messages/messageReducer';
import Message from './Message';

const Messages = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    if (messages.length < 5) {
      dispatch(fetchMessages());
    }
  }, [dispatch, messages.length]);
  return (
    <>
      <h1>Messages</h1>
      <ul>
        {
          messages.map((message) => (
            <li key={message.id}>
              <Message name={message.name} text={message.text} />
            </li>
          ))
        }
        <li>End Message</li>
      </ul>
    </>
  );
};

export default Messages;
