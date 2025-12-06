import './App.css';
import { useState } from 'react';

export default function App() {
   return (
      <>
         <Logo />
         <Form />

         <Stats />
      </>
   );
}
function Logo() {
   return <h1>🌴Far away 💼</h1>;
}

function Form() {
   const [Items, setItems] = useState([
      { id: 1, description: 'Passports', quantity: 2, packed: false },
      { id: 2, description: 'Socks', quantity: 12, packed: false },
      { id: 3, description: 'Charger', quantity: 1, packed: true },
   ]);
   const [description, setDescription] = useState('');
   const [quantity, setQuantity] = useState(1);
   const handleSubmit = (e) => {
      e.preventDefault();

      if (!description.trim()) return;

      const newItem = { description, quantity, packed: false, id: Date.now() };

      setItems(Items.push(newItem));

      // reset form default this.state.
      setDescription('');
      setQuantity(1);
   };
   return (
      <>
         <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 Trip?</h3>
            <select name='' id='' onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
               {Array.from({ length: 20 }, (_, i) => i + 1).map((c) => (
                  <option value={c} key={c}>
                     {c}
                  </option>
               ))}
            </select>
            <input
               type='text'
               name=''
               id=''
               placeholder='item...'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
         </form>
         <PackingList />
      </>
   );
}
function PackingList({ initialItems }) {
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
