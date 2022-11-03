import React from 'react';
import PropTypes from 'prop-types';
import './arrows.scss';

const RightArrow = (props) => {
  const { className, to, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={`button-right ${className}`} aria-label={to}>click</button>
  );
};

RightArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

RightArrow.defaultProps = {
  className: '',
  onClick: () => 0,
};

export default RightArrow;
