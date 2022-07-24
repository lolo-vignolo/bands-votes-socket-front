import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BandList = () => {
  const [bands, setBands] = useState([]);
  const state = useSelector((state) => state.socket);
  const { socket } = state;

  useEffect(() => {
    socket.on('list-bands', (list) => {
      setBands(list);
    });
    return () => {
      socket.off('list-bands');
    };
  }, []);

  const votar = (id) => {
    socket.emit('votar-band', id);
  };

  const deleteBand = (id) => {
    socket.emit('delete-band', id);
  };

  const changeName = (id, name) => {
    socket.emit('change-name', { id, name });
  };

  const handleChange = (e, id) => {
    const newBands = bands.map((band) => {
      if (band.id === id) {
        band.name = e.target.value;
      }
      return band;
    });

    setBands(newBands);
  };

  const onLostFocus = (name, id) => {
    changeName(id, name);
  };

  const createRow = () => {
    return bands.map((band) => {
      return (
        <tr key={band.id}>
          <td>
            <button onClick={() => votar(band.id)} className="btn btn-primary">
              +1
            </button>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={band.name}
              onChange={(e) => handleChange(e, band.id)}
              onBlur={() => onLostFocus(band.name, band.id)}
            />
          </td>
          <td>
            <h3>{band.votes}</h3>
          </td>
          <td>
            <button
              onClick={() => deleteBand(band.id)}
              className="btn btn-danger"
            >
              Borrar
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>votes</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRow()}</tbody>
      </table>
    </>
  );
};

export default BandList;
