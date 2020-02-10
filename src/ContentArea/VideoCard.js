import React from 'react';
import '../Styles/ContentArea.scss';

export default class VideoCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title:'Nothing but a video',
        techear:"Suman",
        topic:"Derrivative",
        chapter:"Calculas",
        subject:"Mathematics",
        classStd:"11th",
        genre:"Educational",
        type:"Video",
        thumbnail:'',
        likes:'100',
        sub:'500',
        rating:'8.7',
        tags:'',
        countOfComments:''
      };
    }
    render(){
        return(
    <div className="VideoCard">
        <div className='VideoInfo'>
        <div><strong>Likes:</strong>{this.state.likes}</div>
        <div><strong>Subscribers:</strong>{this.state.sub}</div>
        <div><strong>Rating:</strong>{this.state.rating}</div>
        </div>
      

    </div>


        )
    }
  }