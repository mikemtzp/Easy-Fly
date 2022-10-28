import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteJet } from '../../redux/jets/jetAPI';
import { getJetsThunk } from '../../redux/jets/jetSlice';

function DeleteJet(props) {
  const {
    name, description, image, id,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = async (e, jetId) => {
    e.preventDefault();

    const jet = { id: jetId };
    await deleteJet(jet);
    dispatch(getJetsThunk());
  };

  return (
    <div className="jet-container">
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
        <button type="button" onClick={(e) => handleDelete(e, id)}>Delete</button>
      </div>
    </div>
  );
}

DeleteJet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteJet;
