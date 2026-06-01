import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: '1', text: 'Привіт! Як справи з проєктом?', time: '10:30' },
    { id: '2', text: 'Не забудь перевірити домашку на GoIT 😉', time: '11:15' },
  ],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const newMsg = {
        id: Date.now().toString(),
        text: action.payload,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      state.list.unshift(newMsg);
    },
    deleteMessage: (state, action) => {      
      state.list = state.list.filter(msg => msg.id !== action.payload);
    },
  },
});

export const { addMessage, deleteMessage } = messagesSlice.actions;
export default messagesSlice.reducer;