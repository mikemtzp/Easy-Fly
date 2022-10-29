import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function JetDetails() {
  const { jets } = useSelector((state) => state.jets);
  const { id } = useParams();
  const idToNum = parseInt(id, 10);
  const jet = jets.filter((jet) => jet.id === idToNum)[0];

  return (
    <section className="details-container">
      <img
        src={jet.image}
        alt={jet.name}
        className="details-container__image"
      />
      <div className="details-container__info">
        <h1>{jet.name}</h1>
        <p>{jet.category}</p>
        <p>{jet.size}</p>
        <p>{jet.finance_fee}</p>
        <p>{jet.price_per_day}</p>
      </div>
      <Link to="/reservation" state={jet}>
        Reserve
      </Link>
    </section>
  );
}

export default JetDetails;
