import React from 'react';

class Spinner extends React.Component {
  render() {
    const { size, container_class_name } = this.props;

    return (
      <div className={container_class_name || ''}>
        <i className={`fa fa-circle-notch fa-spin fa-${size || 3}x`} />
      </div>
    );
  }
}

export default Spinner;
