import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './dataSlice';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

export const store = configureStore({
  reducer: {
    contacts: dataSlice.reducer,
  },
});

export default store;
