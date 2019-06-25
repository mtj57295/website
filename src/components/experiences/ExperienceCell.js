import React from 'react';

const ExperienceCell = ({jobTitle, company, location, startDate, endDate, descriptions}) => {

  const displayDescriptions = descriptions.map((description, i) => {
    return (
      <ul class="hover-black grow measure">
        <li class="lh-copy bl-0 bt-0 br-0 b--black-30">{descriptions[i]}</li>
      </ul>
    );
  })

  return(
    <header class="ph4 mb5 ">
      <h1 class="f3 f2-m f2-l fw2 navy mv3">
        {jobTitle}
      </h1>
      <h2 class="f5 f4-m f3-l fw2 red lh-copy margins">
        {company}
      </h2>
      <h2 class="f5 f4-m f3-l fw2 red lh-copy margins">
        {location}
      </h2>
      <h2 class="f5 f4-m f3-l fw2 red lh-copy margins">
        {startDate} - {endDate}
      </h2>
      <h2 class="f5 f4-m f3-l fw2 black-70 lh-copy margins">
        {displayDescriptions}
      </h2>
    </header>
  );
}

export default ExperienceCell;
