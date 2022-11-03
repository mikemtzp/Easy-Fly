import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteJet } from '../../redux/jets/jetAPI';
import { getJetsThunk } from '../../redux/jets/jetSlice';
import './DeleteJet.scss';
import AlertDialog from '../myReservation/Alert';

const DeleteJet = (props) => {
  const {
    name, description, image, id,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = async (e, jetId) => {
    e.preventDefault();

    const jet = { id: jetId };
    await deleteJet(jet);
    dispatch(getJetsThunk());
    toast.success('Jet Deleted Successfuly!');
  };

  const dialog = 'This jet will be deleted permanently. Are you sure you want to continue?';

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
      <AlertDialog
        cancel={(e) => handleDelete(e, id)}
        dialogTitle="Delete Jet?"
        dialogContent={dialog}
        cancelBtn="Delete"
      />
    </div>
  );
};

DeleteJet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteJet;
