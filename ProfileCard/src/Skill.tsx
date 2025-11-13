function Skill({ skillName, skillLevel }: { skillName: string; skillLevel: string }) {
   const randomColor = () => `hsl(${Math.random() * 360}, 100%, 75%)`;
   const renderEmoji = (level: string): string => {
      if (level.toLowerCase() == 'intermediate') return ' 👍🏿';
      if (level.toLowerCase() == 'advanced') return ' 💪🏿';
      else return '😲';
   };
   return (
      <div className='skill' style={{ backgroundColor: randomColor() }}>
         {skillName + renderEmoji(skillLevel)}
      </div>
   );
}

export default Skill;
