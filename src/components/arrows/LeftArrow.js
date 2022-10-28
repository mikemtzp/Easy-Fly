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
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

LeftArrow.defaultProps = {
  className: '',
  onClick: () => 0,
};

export default LeftArrow;
