import React from 'react';
import Particles from 'react-particles-js';
import scrollToComponent from 'react-scroll-to-component';

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900
      },
    },
    line_linked: {
      color: '#e6cf8b',
      opacity: '.5',
      width: 2
    },
    size: {
      value: '4',
    },
    color: {
      value: '#00ff7f'
    },
    opacity: {
      value: '.5'
    }
  }
}


class Home extends React.Component {

  scrollIntoProfile = () => {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return(
      <section id='home' className='flexhome'>
      <Particles className='particles' params={particlesOptions}/>
        <div className='tc'>
          <header className="tc ph4 flex">
            <h1 className="bb pa3 f1 lh-titled gold" style={{fontSize: '60px'}}>
              Hello my name is <span className='mattjoyce b'>Matt Joyce</span>,<br/>
              I am a software developer
            </h1>
          </header>
          <div onClick= {this.scrollIntoProfile} id='viewprofile' className='viewprofile'>
            View my profile
          </div>
        </div>

      </section>
    );
  }
}

export default Home;
