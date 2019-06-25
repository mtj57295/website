import React from 'react';
import SkillCell from './SkillCell';

const Skills = ({skills}) => {

  const skillsCells = skills.map((skill, i) => {
    return (
      <SkillCell
        skillName={skills[i].skillName}
        image={skills[i].image}
        skillLevel={skills[i].skillLevel}
        url={skills[i].url}
        />
    );
  })

  return(
    <section id='skills'>
      <div className='ml7 mr7'>
        <header className="tc ph4">
          <h1 className="dark-green f3 f2-m f1-l fw2 black-90 pt6" style={{fontSize: '4em'}}>
            Skills
          </h1>
        </header>
        <div className='flex flex-wrap'>
          {skillsCells}
        </div>
      </div>
    </section>
  );
}

export default Skills;
