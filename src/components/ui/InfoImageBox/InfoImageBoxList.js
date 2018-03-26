import React from 'react';

class InfoImageBoxList extends React.Component {
  render() {
    return (
      <ul className='info-image-box-list-container'>
        {React.Children.map(this.props.children, (child, idx) => {
          const image_position = idx % 2 == 0 ? 'left' : 'right';
          return React.cloneElement(
            child,
            { image_position }
          );
        })}
      </ul>
    )
  }
}

export default InfoImageBoxList;
