import React from 'react';
import '../Styles/headerContainer.scss';

export default class UserContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          signIn:"not",
          loginType:"none",
          loginId:""
      };
    }
    render(){
        return(
    <div className="UserContainer">
      <button className="UserIcon"><strong>SD</strong></button>  
      <button className="UserType"><strong>Student</strong>
      </button>

    </div>


        )
    }
  

}