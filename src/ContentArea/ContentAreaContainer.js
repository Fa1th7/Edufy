import React from 'react';
import '../Styles/ContentArea.scss';
import VideoCard from './VideoCard.js'

export default class ContentAreaContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render(){
        return(
        <div className='ContentAreaContainer'>
        <VideoCard />
        </div>


        )
    }
  }