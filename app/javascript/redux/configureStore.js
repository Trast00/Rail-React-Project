import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/messageReducer';

export default configureStore({
  reducer: {
    messageReducer,
  },
});
