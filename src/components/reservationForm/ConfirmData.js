import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import './confirmData.scss';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function ConfirmData(props) {
  const {
    reservation, jetName, days, ppe, finFee, city, handleForm,
    confirmPage, setConfirmPage,
  } = props;
  // const { jets } = useSelector((state) => state.jets);

  const reservationData = reservation();

  return (
    <section className={!confirmPage ? 'hide' : 'confirmation-container'}>
      <h2 className="confirm-title">Confirm your Jet</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="tbale-head" scope="col">Details</th>
            <th scope="col">Selected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">Jet</th>
            <td>{jetName}</td>
          </tr>
          <tr>
            <th scope="col">City</th>
            <td>{city}</td>
          </tr>
          <tr>
            <th scope="col">Start Date</th>
            <td>{reservationData.starting_day}</td>
          </tr>
          <tr>
            <th scope="col">Finish Date</th>
            <td>{reservationData.finish_day}</td>
          </tr>
          <tr>
            <th scope="col">Price</th>
            <td>
              $
              {(days * ppe) + finFee}
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="buttons-container">
        <button
          type="button"
          onClick={() => {
            handleForm();
            setConfirmPage(!confirmPage);
          }}
        >
          Back
        </button>
        <button
          type="submit"
          form="reservation-form"
        >
          Submit
        </button>
      </div>
    </section>
  );
}

ConfirmData.propTypes = {
  reservation: PropTypes.func.isRequired,
  jetName: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  ppe: PropTypes.number.isRequired,
  finFee: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
  setConfirmPage: PropTypes.func.isRequired,
  confirmPage: PropTypes.bool.isRequired,
};

export default ConfirmData;
