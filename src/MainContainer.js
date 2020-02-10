import React from 'react';
import LeftContainer from './LeftSideArea/leftContainer.js'
import ContentAreaContainer from './ContentArea/ContentAreaContainer.js'
import './App.scss'

const MainContent= () =>{
    return(
        <div className='MainContent'>
        <LeftContainer />
        <ContentAreaContainer />
        </div>
    )


}
export default MainContent;