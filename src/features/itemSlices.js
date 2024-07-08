import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
   items: []
};

export const itemSlice = createSlice({
   name: 'item',
   initialState,
   reducers: {
      addItem: (state, action) => {
         const item = {
            id: nanoid(),
            text: action.payload.name,
            price: action.payload.price
         };
         state.items.push(item);
      },
      removeItem: (state, action) => {
         state.items = state.items.filter((item) => item.id !== action.payload);
      }
   }
});

export const { addItem, removeItem } = itemSlice.actions;

export default itemSlice.reducer;
