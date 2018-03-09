import React from 'react';

const HeaderButton = props => {
  const {
    text,
    onClick,
    className
  } = props;

  return (
    <div
      className={`header-button ${className}`}
      onMouseOver={() => $(`.${className}`).addClass('hovered')}
      onMouseLeave={() => $(`.${className}`).removeClass('hovered')}
      >
      <h4>{text}</h4>
    </div>
  );
}

export default HeaderButton;
