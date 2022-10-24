import React from 'react';
import PropTypes from 'prop-types';

// Icons
import * as FaIcons from 'react-icons/fa';

function MainJet(props) {
  const { name, description } = props;
  return (
    <>
      <article>
        <div>
          <img src="https://via.placeholder.com/150x150" alt="Jet" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div>
          <FaIcons.FaFacebookF />
          <FaIcons.FaTwitter />
          <FaIcons.FaInstagramSquare />
        </div>
      </article>
    </>
  );
}

MainJet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainJet;
