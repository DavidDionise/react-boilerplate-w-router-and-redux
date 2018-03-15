import React, { Component } from 'react';
import HeaderButton from './HeaderButton';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app-container-header'>
        <div className='background'/>
        <div className='header-buttons-container'>
          <div className='logo-container'>
            <img src='assets/images/logo.png' />
          </div>
          <div className='header-logo-buttons-separator' />
          
          <HeaderButton
            className='innovation-button'
            text='Innovation'
          />
          <HeaderButton
            className='knowlege-button'
            text='Knowlege'
          />
          <HeaderButton
            className='education-button'
            text='Education'
          />
        </div>
      </div>
    );
  }
}

export default Header;
