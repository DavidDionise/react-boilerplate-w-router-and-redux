import React, { Component } from 'react';
import {
  Container,
  TextField,
  InfoImageBoxItem,
  InfoImageBoxList
} from 'components';

class HomePageContainer extends Component {
  render() {
    return (
      <Container>
        <div className='homepage-container'>
          <div className='homepage-background-image-container'>
            <TextField
              field_name='homepage-background-text'
              container_class_name='homepage-background-image-text'
            />
            <img src='assets/images/homepage-background.png' />
          </div>

          <div className='homepage-info-image-boxes-container'>
            <InfoImageBoxList>
              <InfoImageBoxItem
                image_src='assets/images/guy-working.png'
                title_field_name='homepage-info-image-box-title-1'
                body_field_name='homepage-info-image-box-body-1'
              />
              <InfoImageBoxItem
                image_src='assets/images/truck.png'
                title_field_name='homepage-info-image-box-title-2'
                body_field_name='homepage-info-image-box-body-2'
              />
              <InfoImageBoxItem
                image_src='assets/images/idea-bulb.png'
                title_field_name='homepage-info-image-box-title-3'
                body_field_name='homepage-info-image-box-body-3'
              />
            </InfoImageBoxList>
          </div>
        </div>
      </Container>
    );
  }
}

export default HomePageContainer;
