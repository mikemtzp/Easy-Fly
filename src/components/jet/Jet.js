import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Jet.scss';

// Icons
import * as FaIcons from 'react-icons/fa';

function MainJet(props) {
  const { name, description, image } = props;

  return (
    <div className="jet-container">
      <div className="image-container">
        <img src={image} alt="Jet" />
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
    </div>
  );
}

MainJet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MainJet;
