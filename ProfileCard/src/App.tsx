import Skill from './Skill';
import image from './assets/BeltonMenete-B&W-Profile.jpeg';
import { useState } from 'react';
import './App.css';

function App() {
   const [user] = useState({
      name: 'Belton Menete',
      bio: 'Full-stack web developer and teacher at vopTrain. When not coding or preparing a course, I like to play board games, to cook (and eat) or to just enjoy the Portuguese sun at the beach.',
      skills: ['html + css 💪🏿', 'javascript 💪🏿', 'web design 💪🏿', 'Git and Github 👍🏿', 'React 💪🏿', 'Svelte 😲'],
   });
   document.title = ' - ' + user.name;
   return (
      <div className='card'>
         <img src={image} alt='developer-profile-image' />
         <div className='description'>
            <h2 className='name'>{user.name}</h2>
            <p className='about'>{user.bio}</p>
            <div className='skills'>
               {user.skills.map((skill) => {
                  return <Skill skillName={skill} key={skill} />;
               })}
            </div>
         </div>
      </div>
   );
}

export default App;
