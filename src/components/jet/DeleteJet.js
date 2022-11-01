import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { deleteJet } from '../../redux/jets/jetAPI';
import { getJetsThunk } from '../../redux/jets/jetSlice';
import './DeleteJet.scss';

function DeleteJet(props) {
  const {
    name, description, image, id,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (e, jetId) => {
    e.preventDefault();

    const jet = { id: jetId };
    await deleteJet(jet);
    dispatch(getJetsThunk());
    navigate('/');
  };

  return (
    <div className="delete-jet-card">
      <div>
        <img
          src={image}
          alt={name}
          height="150px"
          width="250px"
        />
      </div>
      <div className="delete-jet-card__info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <Button variant="contained" color="error" onClick={(e) => handleDelete(e, id)}>Delete</Button>
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
