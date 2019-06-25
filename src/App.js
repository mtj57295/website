//<a href="https://pngtree.com/free-vectors">free vectors from pngtree.com</a>
import React, { Component } from 'react';
import tachyons from 'tachyons';

//components
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/education/Education';
import Experiences from './components/experiences/Experiences';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Modal from './components/modal/Modal';
import Contact from './components/contact/Contact';

import { projects, skills, experiences, educations } from './files/websitesinfo';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectId: 0,
      modalEnabled: 'none'
    }
  }

  clickedProject = (id) => {
    this.setState({projectId: id});
    this.setState({modalEnabled: 'block'});
  }

  unClickedProject = () => {
    console.log('f');
    this.setState({modalEnabled: 'none'});
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Navigation />
        <div className="scroll">
          <Modal unClickedProject={this.unClickedProject} project={projects[this.state.projectId]} modalEnabled={this.state.modalEnabled}/>
          <About />
          <Education educations={educations} />
          <Experiences experiences={experiences}/>
          <Projects clickedProject={this.clickedProject} projects= {projects}/>
          <Skills skills= {skills}/>
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
