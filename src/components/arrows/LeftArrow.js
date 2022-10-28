import React from 'react';
import PropTypes from 'prop-types';
import './arrows.scss';

function LeftArrow(props) {
  const { className, to, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={`button-left ${className}`} aria-label={to}>click</button>
  );
}

LeftArrow.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LeftArrow;
