import React from 'react';
import '../Styles/LeftContainer.scss';
import TopicDetailsContainer from './TopicDetailsContainer.js'
import UserNav from './UserNav.js'

 const LeftContainer = () =>{
    return(
        <div className='LeftContainer'>
            <TopicDetailsContainer />
            <UserNav />

        </div>


    )


}
export default LeftContainer;