import React from 'react';
import EducationCell from './EducationCell';

const Education = ({educations}) => {

  const displayEducations = educations.map((education, i) => {
    return (
      <EducationCell
        school={educations[i].school}
        degree={educations[i].degree}
        startDate={educations[i].startDate}
        endDate={educations[i].endDate}
        courses={educations[i].courses}
      />
    )
  })

  return(
    <section id='education'>
      <header class="tc ph4">
        <h1 class="dark-green f3 f2-m f1-l fw2 black-90 mv3" style={{fontSize: '4em'}}>
          Education
        </h1>
      </header>
      <div className='flex flex-column'>
        {displayEducations}
      </div>
    </section>
  );
}

export default Education;
