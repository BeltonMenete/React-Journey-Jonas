import Skill from './Skill';
import image from './assets/BeltonMenete-B&W-Profile.jpeg';
import { useState } from 'react';
import './App.css';
const Skills = [
   {
      skill: 'html + css',
      level: 'advanced',
   },
   {
      skill: 'javascript',
      level: 'advanced',
   },
   {
      skill: 'web design',
      level: 'advanced',
   },
   {
      skill: 'html + css',
      level: 'advanced',
   },
   {
      skill: 'Git and Github ',
      level: 'intermediate',
   },
   {
      skill: 'React',
      level: 'advanced',
   },
   {
      skill: 'Svelte',
      level: 'beginner',
   },
];
function App() {
   const [user] = useState({
      name: 'Belton Menete',
      bio: 'Full-stack web developer and teacher at vopTrain. When not coding or preparing a course, I like to play board games, to cook (and eat) or to just enjoy the Portuguese sun at the beach.',
   });
   const [skills] = useState(Skills);
   document.title = ' - ' + user.name;
   return (
      <div className='card'>
         <img src={image} alt='developer-profile-image' />
         <div className='description'>
            <h2 className='name'>{user.name}</h2>
            <p className='about'>{user.bio}</p>
            <div className='skills'>
               {skills.map((skill) => {
                  return <Skill skillName={skill.skill} level={skill.level} key={skill.skill} />;
               })}
            </div>
         </div>
      </div>
   );
}

export default App;
