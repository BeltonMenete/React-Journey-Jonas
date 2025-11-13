type props = { skillName: string; level: string };

function Skill({ skillName, level }: props) {
   const randomColor = () => `hsl(${Math.random() * 360}, 100%, 75%)`;

   return (
      <div className='skill' style={{ backgroundColor: randomColor() }}>
         <span> {skillName}</span>
         <span>
            {level == 'advanced' && ' 💪🏿'}
            {level == 'beginner' && ' 😲'}
            {level == 'intermediate' && ' 👍🏿'}
         </span>
      </div>
   );
}

export default Skill;
