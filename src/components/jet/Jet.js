import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Jet.scss';
import * as FaIcons from 'react-icons/fa';

function Jet(props) {
  const {
    name, description, image, id,
  } = props;

  return (
    <div className="jet-container">
      <Link to={`/jets/${id}`}>
        <div>
          <img
            src={image}
            alt={name}
            className="jet-image"
            height="150px"
            width="250px"
          />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="social-container">
          <div className="icon-container">
            <FaIcons.FaFacebookF />
          </div>
          <div className="icon-container">
            <FaIcons.FaTwitter />
          </div>
          <div className="icon-container">
            <FaIcons.FaInstagramSquare />
          </div>
        </div>
      </Link>
    </div>
  );
}

Jet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Jet;
