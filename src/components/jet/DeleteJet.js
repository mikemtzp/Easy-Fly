import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
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
          className="delete-jet-card__image"
        />
      </div>
      <div className="delete-jet-card__info">
        <h2 className="delete-jet-card__info-title">{name}</h2>
        <p className="delete-jet-card__info-text">{description}</p>
      </div>
      <div>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={(e) => handleDelete(e, id)}>Delete</Button>
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
