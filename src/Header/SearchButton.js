import React from 'react';
import '../Styles/headerContainer.scss';

class SearchButton extends React.Component {
    constructor(props){
      super(props);
    }
    
  
    render() {
      return (
        <div >
         <button type="button" className='SearchButton'><strong>Search</strong></button>
         
        </div>
      );
    }
  }
export default SearchButton;