import { useState } from 'react';
import './App.css';

function App() {
   const [questions, setQuestions] = useState([
      { question: 'What language is React based on?', answer: 'JavaScript', flipped: false },
      { question: 'What are the building blocks of React apps?', answer: 'Components', flipped: false },
      {
         question: "What's the name of the syntax we use to describe a UI in React?",
         answer: 'JSX (JavaScript XML)',
         flipped: false,
      },
      {
         question: 'How to pass data from parent to child components?',
         answer: 'Using props (properties)',
         flipped: false,
      },
      {
         question: 'How to give components memory?',
         answer: 'Using state (specifically the useState Hook)',
         flipped: false,
      },
      {
         question: 'What do we call an input element that is completely synchronised with state?',
         answer: 'A Controlled Component',
         flipped: false,
      },
   ]);

   const toggleQuestion = (index) => {
      const newQuestions = [...questions];
      newQuestions[index].flipped = !newQuestions[index].flipped;
      setQuestions(newQuestions);
   };

   return (
      <div className='card-container'>
         {questions.map((q, i) => (
            <div onClick={() => toggleQuestion(i)} className='card' key={i}>
               {q.flipped ? q.answer : q.question}
            </div>
         ))}
      </div>
   );
}

export default App;
