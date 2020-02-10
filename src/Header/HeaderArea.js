import React from 'react';
import '../Styles/headerContainer.scss';
import SearchBar from './SearchBar.js'
import AppIcon from './AppIcon';
import SearchButton from './SearchButton';
import UserContainer from './UserContainer';

class HeaderArea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          signIn:"not"
      };
    }
  
    render() {
      return (
        <div className='HeaderContainer'>
         <AppIcon />
         <SearchBar />
         <SearchButton />
         <UserContainer />
        </div>
      );
    }
  }
  export default HeaderArea;