import React from 'react';
import { useSelector } from 'react-redux';
import DeleteJet from '../../components/jet/DeleteJet';
import Nav from '../../components/nav/Nav';

function DeleteJetPage() {
  const { jets } = useSelector((state) => state.jets);

  return (
    <Nav>
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
    </Nav>
  );
}

export default DeleteJetPage;
