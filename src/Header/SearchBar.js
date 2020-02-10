import React, { Component } from 'react';
import '../Styles/headerContainer.scss';


import ReactSearchBox from 'react-search-box'

export default class SearchBar extends Component {
  data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Fuck you',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]

  render() {
    return (
    <div className='SearchBar'>
        
      <ReactSearchBox
        placeholder="Eg:Calculas"
        data={this.data}
        inputBoxBorderColor= '#4FC3F7'
        callback={record => console.log(record)} />
    </div>
    )
  }
}