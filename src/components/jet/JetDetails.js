import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './JetDetails.scss';

function JetDetails() {
  const { jets } = useSelector((state) => state.jets);
  const { id } = useParams();
  // const params = useParams();
  const idToNum = parseInt(id, 10);
  const jet = jets.filter((jet) => jet.id === idToNum)[0];

  console.log(typeof id);
  console.log(jets);
  console.log(jet);

  return (
    <section className="details-container">
      <img
        src={jet.image}
        alt={jet.name}
        className="details-container__image"
      />
      <div className="details-container__info">
        <h1 className="details-container__info-name">{jet.name}</h1>
        <ul className="details-container__info-table">
          <li>{jet.category}</li>
          <li>{jet.size}</li>
          <li>{jet.finance_fee}</li>
          <li>{jet.price_per_day}</li>
        </ul>
      </div>
      <Link to="/reservation" state={jet} className="details-container__reserve">
        Reserve
      </Link>
    </section>
  );
}

export default JetDetails;
