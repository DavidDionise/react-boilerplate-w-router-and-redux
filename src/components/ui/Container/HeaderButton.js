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
      <h3>{text}</h3>
    </div>
  );
}

export default HeaderButton;
