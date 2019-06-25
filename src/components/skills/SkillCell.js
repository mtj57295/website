import React from 'react';

const SkillCell = ({skillName, image, skillLevel, url}) => {
  const urlImage = require(`../../../public/images/${image}`);

  const getImage = () => {
    return (
      <a href={url} target="_blank" style={{backgroundImage: `url(${urlImage})` }}
        className="link mw5 dt hide-child cover image-anchor">
        <span className="white dtc v-mid w-100 h-100 child bg-black-40 pa6 image-anchor">
          Learn More
        </span>
      </a>
    );
  }

  const level = (color) => {
    return (
      <div
         className='skills'
         style={{width: skillLevel,backgroundColor: color }}
       >
       {skillLevel}
       </div>
     );
  }

  const checkSkillLevel = () => {
    let temp = skillLevel.substring(0, skillLevel.length - 1);
    const value = Number(temp);
    if(value <= 30) {
        return level('#f44336');
    } else if (value <= 50) {
      return level('#FFA500');
    } else {
      return level('#4CAF50');
    }
  }

  return(
    <article className="grow center shadow-3 mb5">
      <div style={{height: 300, width: 400, marginLeft: '2%', marginRight: '2%'}}>
        {getImage()}
      </div>
      <div className="ph3-ns pb3-ns pt4">
        <div className="dt w-100 ">
          <div className="dtc">
            <h1 className="f1 bt f2-ns tc mv0">{skillName}</h1>
          </div>
        </div>
        <div className='container'>
        {checkSkillLevel()}
        </div>
      </div>
    </article>

  );
}

export default SkillCell;
