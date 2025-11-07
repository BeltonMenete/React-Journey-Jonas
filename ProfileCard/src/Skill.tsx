function Skill(props: { skillName: string }) {
   const randomColor = () => `hsl(${Math.random() * 360}, 100%, 75%)`;
   return (
      <div className='skill' style={{ backgroundColor: randomColor() }}>
         {props.skillName}
      </div>
   );
}

export default Skill;
