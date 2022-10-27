import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function JetDetails() {
  const { jets } = useSelector((state) => state.jets);
  const { id } = useParams();

  return (
    <section className="details-container">
      <img src={jets[id].image} alt={jets[id].name} className="details-container__image" />
      <div className="details-container__info">
        <h1>{jets[id].name}</h1>
        <p>{jets[id].category}</p>
        <p>{jets[id].size}</p>
        <p>{jets[id].finance_fee}</p>
        <p>{jets[id].price_per_day}</p>
      </div>
    </section>
  );
}

JetDetails.propTypes = {};

export default JetDetails;
