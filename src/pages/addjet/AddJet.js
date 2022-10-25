import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddJet = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleNewJet = async (e) => {
    e.preventDefault();
    const newJet = {
      name,
      description,
      size,
      category,
      image,
    };
  };

  return (
    <>
      <form onSubmit={handleNewJet}>
        <TextField
          variant="standard"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <TextField
          variant="standard"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <TextField
          variant="standard"
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Enter size"
        />
        <TextField
          variant="standard"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
        <TextField
          variant="standard"
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Upload image"
        />

        <Button variant="contained" color="primary" type="submit">
          ADD JET
        </Button>
      </form>
    </>
  );
};

export default AddJet;
