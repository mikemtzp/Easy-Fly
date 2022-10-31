import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Jet.scss';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Jet(props) {
  const {
    name, description, image, id,
  } = props;

  return (
    <div className="jet-container">
      <Link to={`/jets/${id}`}>
        <div className="image-container">
          <img
            src={image}
            alt={name}
            className="jet-image"
          />
        </div>
        <div className="jet-data">
          <h2>{name}</h2>
          <div className="dots" />
          <p>{description}</p>
        </div>
        <div className="social-container">
          <div className="icon-container">
            <IconContext.Provider value={{ size: '1rem' }}>
              <FaIcons.FaFacebookF />
            </IconContext.Provider>
          </div>
          <div className="icon-container">
            <IconContext.Provider value={{ size: '1rem' }}>
              <FaIcons.FaTwitter />
            </IconContext.Provider>
          </div>
          <div className="icon-container">
            <IconContext.Provider value={{ size: '1rem' }}>
              <FaIcons.FaInstagramSquare />
            </IconContext.Provider>
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
