import React, { useState } from 'react';
import { items } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../features/itemSlices';
import './item.css';

export function Item() {
   const [total, setTotal] = useState(0),
      dispatch = useDispatch(),
      ItemsList = useSelector((state) => state.items),
      totalPrice = ItemsList.reduce((acc, item) => acc + (item.price.split('').splice(1).join('') - 0), 0);

   return (
      <>
         <div className="main">
            <h1>Cart</h1>
            <div className="up">
               <h3>Total: ${totalPrice}</h3>
               {ItemsList?.map((item) => {
                  return (
                     <section className="up-section">
                        <div className="box"></div>
                        <ul className="up-side">
                           <li>{item.text}</li>
                           <li>{item.price}</li>
                           <button className="up-button" onClick={() => dispatch(removeItem(item.id))}>
                              Remove
                           </button>
                        </ul>
                     </section>
                  );
               })}
            </div>

            <h2> Available </h2>
            {items?.map((item, index) => {
               return (
                  <section key={item.index}>
                     <div key={item.index} className="box"></div>
                     <ul key={item.index}>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                     </ul>
                     <button onClick={() => dispatch(addItem(item))}>Add to Cart</button>
                  </section>
               );
            })}
         </div>
      </>
   );
}
