import { useState } from 'react';

const pizzaData = [
   {
      name: 'Focaccia',
      ingredients: 'Bread with italian olive oil and rosemary',
      price: 6,
      photoName: 'pizzas/focaccia.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Margherita',
      ingredients: 'Tomato and mozarella',
      price: 10,
      photoName: 'pizzas/margherita.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Spinaci',
      ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
      price: 12,
      photoName: 'pizzas/spinaci.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: 'pizzas/funghi.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Salamino',
      ingredients: 'Tomato, mozarella, and pepperoni',
      price: 15,
      photoName: 'pizzas/salamino.jpg',
      soldOut: true,
   },
   {
      name: 'Pizza Prosciutto',
      ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
      price: 18,
      photoName: 'pizzas/prosciutto.jpg',
      soldOut: false,
   },
];

function App() {
   return (
      <div className='container'>
         <Header />
         <Menu />
         <Footer />
      </div>
   );
}

function Header() {
   /*  const style = { color: 'red', fontSize: '32px', textTransform: 'uppercase' }; */
   const style = {};

   return (
      <header className='header'>
         <h1 style={{ cursor: 'pointer' }}>Fast React Pizza Co</h1>
      </header>
   );
}

function Menu() {
   return (
      <main className='menu'>
         <h2> Our menu</h2>

         {pizzaData.length > 0 ? (
            <>
               <p className='paragraph'>
                  Authentic Italian cuisine.{pizzaData.length} creative dishes to <br />
                  choose from. All from our stone oven, all organic, all delicious
               </p>
               <ul id='pizza-container'>
                  {pizzaData.map((pizza) => (
                     <li id='pizza' key={pizza.name}>
                        <Pizza pizza={pizza} />
                     </li>
                  ))}
               </ul>
            </>
         ) : (
            <p className='paragraph'>"We're still working on our Menu. Please come back later :)"</p>
         )}
      </main>
   );
}

function Footer() {
   const hour = new Date().getHours();
   const openHour = 8;
   const closeHour = 22;
   const isOpen = hour >= openHour && hour <= closeHour;

   return <footer className='footer'>{isOpen && <Order closeHour={closeHour} />}</footer>;
}
function Order(props) {
   return (
      <div className='order'>
         <p>we're open until {props.closeHour}:00. Como visit us or oder online</p>
         <button className='btn'>Order</button>
      </div>
   );
}
function Pizza({ pizza }) {
   if (pizza.soldOut) {
      return (
         <div id='pizza' className='sold-out'>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
               <h2>{pizza.name}</h2>
               <p>{pizza.ingredients}</p>
               <span>Sold Out</span>
            </div>
         </div>
      );
   }

   return (
      <>
         <img src={pizza.photoName} alt={pizza.name} />
         <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <span>${pizza.price}</span>
         </div>
      </>
   );
}
export default App;
