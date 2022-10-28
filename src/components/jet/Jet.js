import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Jet.scss';

// Icons
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
// import * as TbIcons from 'react-icons/tb';

function MainJet(props) {
  const { name, description, image } = props;

  return (
    <div className="jet-container">
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
    </div>
  );
}

MainJet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MainJet;
