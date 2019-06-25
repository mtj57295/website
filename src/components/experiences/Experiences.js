import React from 'react';
import ExperienceCell from './ExperienceCell';

const Experiences = ({experiences}) => {

  const experienceCell = (i) => {
    return (
      <ExperienceCell
        jobTitle={experiences[i].jobTitle}
        company={experiences[i].company}
        location={experiences[i].location}
        startDate={experiences[i].startDate}
        endDate={experiences[i].endDate}
        descriptions={experiences[i].descriptions}
        />
    );
  }

  const images = (i) =>  {
    const image = require(`../../../public/images/${experiences[i].image}`);
    return(
      <img
        src={image} alt='computer' className='about-images'/>
    );
  }

  const displayExperiences = experiences.map((experience, i) => {
    if(i % 2) {
      return (
        <div className='flex flex-wrap bt'>
          {images(i)}
          <div className='pr6 db right'>
            {experienceCell(i)}
          </div>
        </div>
      );
    } else {
      if(i === 0) {
        return (
          <div className='flex flex-wrap'>
            <div className='pl6 db' >
              {experienceCell(i)}
            </div>
            {images(i)}
          </div>
        );
      } else {
        return (
          <div className='flex flex-wrap bt'>
            <div className='pl6 db'>
              {experienceCell(i)}
            </div>
            {images(i)}
          </div>
        );
      }
    }
  })

  return(
    <section id='experiences'>
      <header className="tc ph4">
        <h1 className="dark-green f2 f2-m f1-l fw1 pt9" style={{fontSize: '4em'}}>
          Experiences
        </h1>
      </header>
      <div className='flex flex-column'>
        {displayExperiences}
      </div>
    </section>
  );
}

export default Experiences;
