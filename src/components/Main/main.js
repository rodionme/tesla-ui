import React from 'react';
import './main.css';

import StatusBar from '../StatusBar';
import Map from '../Map';

const Main = ({ className }) => {
  return (
    <main className={`main-content ${className}`}>
      <StatusBar className="main-content__status-bar" />
      <Map className="main-content__map" />
    </main>
  );
};

export default Main;
