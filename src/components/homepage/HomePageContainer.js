import React, { Component } from 'react';
import { Container, TextField } from 'components';

class HomePageContainer extends Component {
  render() {
    return (
      <Container>
        <div className='homepage-container'>
          <div className='homepage-background-image-container'>
            <img src='assets/images/homepage-background.png' />
            <TextField
              field_name='homepage-background-text'
              container_class_name='homepage-background-image-text'
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default HomePageContainer;
