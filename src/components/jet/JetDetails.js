import React from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function JetDetails() {
  const { jets } = useSelector((state) => state.jets);
  const { id } = useParams();

  const idToNum = parseInt(id, 10);
  const jet = jets.filter((jet) => jet.id === idToNum)[0];

  return (
    <section className="details-container">
      <img src={jet.image} alt={jet.name} className="details-container__image" />
      <div className="details-container__info">
        <h1>{jet.name}</h1>
        <p>{jet.category}</p>
        <p>{jet.size}</p>
        <p>{jet.finance_fee}</p>
        <p>{jet.price_per_day}</p>
      </div>
    </section>
  );
}

JetDetails.propTypes = {};

export default JetDetails;
