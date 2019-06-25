import React from 'react';
import $ from 'jquery';

class Navigation extends React.Component {
  state = {
    position: 'relative'
  }

  componentDidMount() {
    var navPos = $('nav').position().top;
    var lastPos = 0;
    $(window).on('scroll', function () {

      var pos = $(window).scrollTop();
      var pos2 = pos + 50;
      var scrollBottom = pos + $(window).height();

      if (pos >= navPos + $('nav').height() && lastPos < pos) {
        $('#navheader').addClass('fixed');
      }
      if (pos < navPos && lastPos > pos) {
        $('#navheader').removeClass('fixed');
      }
      lastPos = pos;
  });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[dest="' + anchor + '"]').addClass('active');
  }
  }

  scrollToPage = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return(
      <section id='navigation'>
        <header id='navheader' className="w-100 ph3 pv3 pv4-ns ph4-m ph5-l header-nav" >
          <nav id='nav' className="f6 fw6 ttu tracked aligned flex flex-wrap">
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('home')} title="Home">Home</a>
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('about')} title="About">About</a>
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('education')} title="Education">Education</a>
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('experiences')} title="Experience">Experience</a>
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('projects')} title="Projects">Projects</a>
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('skills')} title="Skills">Skills</a>
            <a className="grow link hover-light-red dib mr3" onClick={() => this.scrollToPage('contact')} title="Contact">Contact</a>
          </nav>
        </header>
      </section>
    );
  }
}

export default Navigation;
