import React from 'react';
import { useSelector } from 'react-redux';
import BandAdd from '../components/BandAdd';
import { BandCharts } from '../components/BandCharts';
import BandList from '../components/BandList';

const HomePage = () => {
  const state = useSelector((state) => state.socket);
  const { online } = state;

  return (
    <div className="container" style={{ marginBottom: '10rem ' }}>
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success" style={{ fontWeight: '500' }}>
              On-line
            </span>
          ) : (
            <span className="text-danger" style={{ fontWeight: '500' }}>
              Off-line
            </span>
          )}
        </p>
      </div>

      <h1>Band Namer</h1>
      <hr />
      <div className="row">
        <div className="col">
          <BandCharts />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <BandList />
        </div>
        <div className="col-md-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
