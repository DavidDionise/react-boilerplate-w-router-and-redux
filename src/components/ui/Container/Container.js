import React, { Component } from 'react';
import { Header, TextField } from 'components';

class Container extends Component {
  render() {
    return (
      <div className='six-sigma-app-container'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Container;
