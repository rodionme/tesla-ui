import React from 'react';
import '../../styles/colors.css';
import '../../styles/general.css';
import './app.css';

import Sidebar from '../Sidebar';
import Main from '../Main';
import ControlBar from '../ControlBar';

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Sidebar className="app__sidebar" />
        <Main className="app__main" />
      </div>

      <ControlBar className="app__control-bar" />
    </div>
  );
};

export default App;
