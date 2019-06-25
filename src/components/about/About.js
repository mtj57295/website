import React from 'react';

const About = () => {
  const image1 = require('../../../public/images/image.jpg');
  const image2 = require('../../../public/images/computer.jpg');
  return(
    <section id='about'>
      <article className="pa3 pa5-ns">
        <div className='flex flex-wrap'>
          <div className='flex flex-column'>
            <h1 class="dark-green f3 f2-m f1-l fw2 black-90 mv3" style={{fontSize: '4em'}}>
            About
            </h1>
            <p className="measure lh-copy">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="measure lh-copy">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img src={image1} alt='computer' className='about-images'/>
          <img src={image2} alt='computer' className='about-images'/>
        </div>
      </article>
    </section>
  );
}

export default About;
