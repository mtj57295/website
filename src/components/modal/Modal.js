import React, { Component } from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCount: 0
    }
  }

  clickedArrowLeft = () => {
    let index = this.state.imageCount;
    if(index === 0) {
      index = this.props.project.images.length-1;
    } else {
      index--;
    }
    this.setState({imageCount: index});
  }

  clickedArrowRight = () => {
    let index = this.state.imageCount;
    if(index === this.props.project.images.length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({imageCount: index})
  }

  render() {
    window.onclick = function(event) {
      let modal = document.getElementById('myModal');
      if (event.target == modal){
        unClickedProject();
      }
    }
    const {project, modalEnabled, unClickedProject} = this.props;
    const imageUrl = require(`../../../public/images/projects/${project.images[this.state.imageCount]}`);
    const githubUrl = () => {
      if(project.github !== '') {
        return (
          <a href={project.github} target='_blank'>
            <h2 class="grow f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
              View Code
            </h2>
          </a>
        );
      }
    }
    const displayArrows = () => {
      if(project.images.length !== 1) {
        return (
          <div className='arrow-container'>
            <i onClick={this.clickedArrowLeft} className='grow fa fa-arrow-left'></i>
            <i onClick={this.clickedArrowRight} className='grow fa fa-arrow-right'></i>
          </div>
        );
      }
    }
    const displayDescriptions = project.desc.map((des, i) => {
      return (
        <ul class="hover-black grow">
          <li class="list lh-copy bl-0 bt-0 br-0 b--black-60">{project.desc[i]}</li>
        </ul>
      );
    })

    return(
      <div id="myModal" class="modal" style={{ display: `${modalEnabled}`}} >
        <div class="modal-content">
          <span onClick={unClickedProject} class="close">&times;</span>
          <img className= 'center-image' src={imageUrl} />
          {displayArrows()}
          <div className='flex flex-column'>
          <header class="tc ph4">
            <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
              {project.projectName}
            </h1>
            {githubUrl()}
            <h2 class="f5 f4-m f3-l fw2 black-80 lh-copy">
              {displayDescriptions}
            </h2>
            </header>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
