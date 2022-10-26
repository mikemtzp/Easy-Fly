import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { addNewJet } from '../../redux/jets/jetAPI';

const AddJetForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleNewJet = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('category', category);
    data.append('size', size);
    data.append('description', description);
    data.append('image', image);
    const res = await addNewJet(data);
    console.log(res);
  };

  return (
    <>
      <form onSubmit={handleNewJet}>
        <TextField
          variant="standard"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Enter name"
        />
        <TextField
          variant="standard"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Enter description"
        />
        <TextField
          variant="standard"
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          label="Enter size"
        />
        <TextField
          variant="standard"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Enter category"
        />
        <TextField
          variant="standard"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          label="Upload image"
        />

        <Button variant="contained" color="primary" type="submit">
          ADD JET
        </Button>
      </form>
    </>
  );
};

export default AddJetForm;
