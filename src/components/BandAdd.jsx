import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const BandAdd = () => {
  const state = useSelector((state) => state.socket);
  const { socket } = state;

  const [newBand, setNewBand] = useState('');

  const addBand = (name) => {
    socket.emit('add-band', { name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBand.length > 0) {
      addBand(newBand);
      setNewBand('');
    }
  };

  return (
    <>
      <h3>Agregar Band</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Nombre del banda"
          name="bandName"
          value={newBand}
          onChange={(e) => setNewBand(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default BandAdd;
