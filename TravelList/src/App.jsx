import { useState } from 'react';

import './App.css';

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
      <div className='add-form'>
         <h3>What do you need for your 😍 Trip?</h3>
      </div>
   );
}
function PackingList() {
   return <div className='list'>List</div>;
}

function Stats() {
   return (
      <footer className='stats'>
         <em>💼You have X items on your list, and your already packed X (%)</em>
      </footer>
   );
}
