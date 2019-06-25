import React from 'react';

class ProjectCell extends React.Component {
  render() {
    const { id,projectName, images, clickedProject} = this.props;
    const imageUrl = require(`../../../public/images/projects/${images[0]}`);

    return (
      <div onClick={() => clickedProject(id)} style={{backgroundImage: `url(${imageUrl})`}}
        className="ma1 shadow-1 grow ba link mw5 dt hide-child cover project-cell">
        <span className="white dtc v-mid child bg-black-40 pa6" style={{height: 100, width: 100}}>
          {projectName}
        </span>
      </div>
    );
  }
}

export default ProjectCell;
