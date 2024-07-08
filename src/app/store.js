import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/itemSlices';

export const stores = configureStore({
   reducer: itemReducer
});

export const items = [
   {
      name: 'item1',
      price: '$24'
   },
   {
      name: 'item2',
      price: '$34'
   },
   {
      name: 'item3',
      price: '$24'
   },
   {
      name: 'item4',
      price: '$24'
   },
   {
      name: 'item5',
      price: '$24'
   },
   {
      name: 'item6',
      price: '$24'
   },
   {
      name: 'item7',
      price: '$24'
   },
   {
      name: 'item8',
      price: '$24'
   },
   {
      name: 'item9',
      price: '$24'
   },
   {
      name: 'item10',
      price: '$24'
   },
   {
      name: 'item11',
      price: '$24'
   },
   {
      name: 'item12',
      price: '$24'
   },
   {
      name: 'item13',
      price: '$24'
   },
   {
      name: 'item14',
      price: '$24'
   },
   {
      name: 'item15',
      price: '$24'
   },
   {
      name: 'item16',
      price: '$24'
   },
   {
      name: 'item17',
      price: '$24'
   },
   {
      name: 'item18',
      price: '$24'
   },
   {
      name: 'item19',
      price: '$24'
   },
   {
      name: 'item20',
      price: '$24'
   }
];
