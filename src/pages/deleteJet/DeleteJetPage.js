import React from 'react';
import { useSelector } from 'react-redux';
import DeleteJet from '../../components/jet/DeleteJet';
import Nav from '../../components/nav/Nav';
import './DeleteJetPage.scss';

function DeleteJetPage() {
  const { jets } = useSelector((state) => state.jets);

  return (
    <Nav>
      <div className="delete-jet-container">
        <h1 className="delete-jet-container__title">Select a Jet to delete from the list</h1>
        {jets.map((jet) => (
          <DeleteJet
            name={jet.name}
            description={jet.description}
            image={jet.image}
            id={jet.id}
            key={jet.id}
          />
        ))}
      </div>
    </Nav>
  );
}

export default DeleteJetPage;
