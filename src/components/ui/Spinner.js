import React from 'react';

const Spinner = props => {
  const { size } = props;
  return <i className={`fa fa-circle-notch fa-spin fa-${size || 3}x`} />;
}

export default Spinner;
