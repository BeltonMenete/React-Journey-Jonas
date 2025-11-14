import { useState } from 'react';
import './App.css';

function App() {
   const [count, setCount] = useState(0);
   const [step, setStep] = useState(1);
   const today = new Date();
   const future = new Date();

   const renderDate = () => {
      if (count > 0) {
         future.setDate(today.getDate() + count);
         return `${count} days from today is ${future.toDateString()}`;
      }
      if (count == 0) {
         return `today is ${today.toDateString()}`;
      } else {
         future.setDate(today.getDate() + count);
         return `${count * -1} days ago was ${future.toDateString()}`;
      }
   };
   function decreaseStep() {
      setStep(step - 1);
   }
   function increaseStep() {
      setStep(step + 1);
   }
   function decreaseCount() {
      setCount(count - step);
   }
   function increaseCount() {
      setCount(count + step);
   }

   return (
      <div className='app'>
         <div className='step'>
            <button onClick={decreaseStep}>-</button> step: {step}
            <button onClick={increaseStep}>+</button>
         </div>

         <div className='count'>
            <button onClick={decreaseCount}>-</button> count {count} <button onClick={increaseCount}>+</button>
         </div>

         <p className='date'>{renderDate()}</p>
      </div>
   );
}

export default App;
