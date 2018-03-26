import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'components';

class InfoImageBoxItem extends React.Component {
  render() {
    const {
      image_position,
      image_src,
      title_field_name,
      body_field_name
    } = this.props;
    return (
      <li className={`info-image-box-item-container ${image_position}`}>
        <div className='info-image-box-item-img-container'>
          <img src={image_src} />
        </div>
        <div className='info-image-box-item-text-container'>
          <TextField
            container_class_name='info-image-box-item-header'
            field_name={title_field_name}
          />
          <TextField
            container_class_name='info-image-box-item-body'
            field_name={body_field_name}
          />
        </div>
      </li>
    );
  }
}

InfoImageBoxItem.propTypes = {
  image_position: PropTypes.oneOf([ 'left', 'right' ]),
  image_src: PropTypes.string.isRequired,
  title_field_name: PropTypes.string.isRequired,
  body_field_name: PropTypes.string.isRequired,
};

export default InfoImageBoxItem;
