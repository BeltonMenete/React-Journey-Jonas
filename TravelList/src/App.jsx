import './App.css';
import { useState } from 'react';

const initialItems = [
   { id: 1, description: 'Passports', quantity: 2, packed: false },
   { id: 2, description: 'Socks', quantity: 12, packed: false },
   { id: 3, description: 'Charger', quantity: 1, packed: true },
];

export default function App() {
   return (
      <>
         <Logo />
         <Form />
         <PackingList />
         <Stats />
      </>
   );
}
function Logo() {
   return <h1>🌴Far away 💼</h1>;
}

function Form() {
   return (
      <form className='add-form'>
         <h3>What do you need for your 😍 Trip?</h3>
         <select name='' id=''>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
         </select>
      </form>
   );
}
function PackingList() {
   return (
      <div className='list'>
         <ul>
            {initialItems.map((item) => (
               <Item item={item} key={item.id} />
            ))}
         </ul>
      </div>
   );
}
function Item({ item }) {
   return (
      <li id={item.id}>
         <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.description}
         </span>
         <button>❌</button>
      </li>
   );
}
function Stats() {
   return (
      <footer className='stats'>
         <em>💼You have X items on your list, and your already packed X (%)</em>
      </footer>
   );
}
