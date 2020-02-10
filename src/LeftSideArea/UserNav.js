import React from 'react';
import '../Styles/headerContainer.scss';

export default class UserNav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          recent1:"Calculas",
          recent2:"Matrix",
          playlist:"",
          history:""
      };
    }
    render(){
        return(
    <div className="UserNav">
            <div><strong>Recents</strong></div>
            <li>{this.state.recent1}</li>
            <li>{this.state.recent2}</li>
            <div><strong>playlist</strong></div>
            
            <div><strong>History</strong></div>
      
      

    </div>


        )
    }
  }