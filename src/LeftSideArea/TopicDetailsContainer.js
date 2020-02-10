import React from 'react';
import '../Styles/headerContainer.scss';

export default class TopicDetailsContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        techear:"Suman",
        topic:"Derrivative",
        chapter:"Calculas",
        subject:"Mathematics",
        classStd:"11th",
        genre:"Educational",
        type:"Video"
      };
    }
    render(){
        return(
    <div className="TopicDetailsContainer">
          <div><strong>Teacher</strong></div>
          <li>{this.state.techear}</li>
          <div><strong>Topic</strong></div>
          <li>{this.state.topic}</li>
          <div><strong>Chapter</strong></div>
          <li>{this.state.chapter}</li>
          <div><strong>Subject</strong></div>
          <li>{this.state.subject}</li>
          <div><strong>Class</strong></div>
          <li>{this.state.classStd}</li>
          <div><strong>Genre</strong></div>
          <li>{this.state.genre}</li>
          <div><strong>Type</strong></div>
          <li>{this.state.type}</li>
      

    </div>


        )
    }
  }