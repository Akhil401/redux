import { useState } from 'react';
import './App.css';
import { Item } from './components/items';

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <div className="header">
            E-Commerce (Redux)
            <li>Cart</li>
         </div>
         <Item />
      </>
   );
}

export default App;
