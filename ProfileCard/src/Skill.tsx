function Skill(props: { skillName: string }) {
   const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

   return (
      <div className='skill' style={{ backgroundColor: randomColor() }}>
         {props.skillName}
      </div>
   );
}

export default Skill;
