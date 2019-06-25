import React from 'react';
import ProjectCell from './ProjectCell';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {projects, clickedProject} = this.props;

    const projectCells = projects.map((project, i) => {
      return (
        <ProjectCell
          id={i}
          projectName= {projects[i].projectName}
          images= {projects[i].images}
          clickedProject={clickedProject}
          />
      );
    })

    return(
      <section id='projects'>
        <header className="tc ph4">
          <h1 className="dark-green f2 f2-m f1-l fw1 black-90 pt9" style={{fontSize: '4em'}}>
            Projects
          </h1>
        </header>
        <div className='center flex flex-wrap w-60 mt5 mb5'>
          {projectCells}
        </div>
      </section>
    );
  }
}

export default Projects;
