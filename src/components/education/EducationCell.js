import React from 'react';

const EducationCell = ({school, degree, startDate, endDate, courses}) => {

  const displayCourses = courses.map((course, i) => {
    return(
      <div className='hover-dark-red ba b--near-white  pa3'>
        {courses[i]}
      </div>
    );
  })

  return(
    <div>
    <header class="tc ph4">
      <h1 class="f2 f2-m f2-l fw2 navy mv3 pt4">
        {school}
      </h1>
      <h2 class="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
        {degree}
      </h2>
      <h2 class="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
        {startDate} - {endDate}
      </h2>
      <h2 class="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
        Relevant Courses:
        <div className='light-red w-40 center flex flex-wrap'>
          {displayCourses}
        </div>
      </h2>
      </header>
    </div>
  );
}

export default EducationCell;
