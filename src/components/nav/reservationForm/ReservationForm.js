import React, { useState } from 'react';

function ReservationForm() {
  // Simulates jets state:
  const jets = [
    {
      jet_id: 1,
      jet_name: 'Jet-1',
    },
    {
      jet_id: 2,
      jet_name: 'Jet-2',
    },
    {
      jet_id: 3,
      jet_name: 'Jet-3',
    },
    {
      jet_id: 4,
      jet_name: 'Jet-4',
    },
  ];

  const [jetState, setJet] = useState('Select jet');

  const handleJet = (jet) => {
    console.log(jet.target.value);
    setJet(jet.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Reservation Form</h2>
      <form onSubmit={handleForm}>
        {/* user input */}
        {/* jet input */}
        <label htmlFor="jet-select">
          Select a jet
          <select id="jet-select" value={jetState} onChange={(e) => handleJet(e)}>
            {jets.map((jet) => <option key={`jet-${jet.jet_id}`} value={jet.jet_id}>{jet.jet_name}</option>)}
          </select>
        </label>
        {/* starting date */}
        {/* finish date */}
      </form>
    </>
  );
}

export default ReservationForm;
