import React from 'react';
import { useSelector } from 'react-redux';
import DeleteJet from '../../components/jet/DeleteJet';

function DeleteJetPage() {
  const { jets } = useSelector((state) => state.jets);

  return (
    <>
      <h1>Delete Jet Page</h1>
      {jets.map((jet) => (
        <DeleteJet
          name={jet.name}
          description={jet.description}
          image={jet.image}
          id={jet.id}
          key={jet.id}
        />
      ))}
    </>
  );
}

export default DeleteJetPage;
