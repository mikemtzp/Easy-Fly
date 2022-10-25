import React from 'react';
import PropTypes from 'prop-types';

// Style
import './mainJet.scss';

// Icons
import * as FaIcons from 'react-icons/fa';

function MainJet(props) {
  const { name, description } = props;

  return (
    <div className="jet-container">
      <div>
        <img src="https://via.placeholder.com/150x150" alt="Jet" />
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
};

export default MainJet;
