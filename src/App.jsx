import React from 'react'
import SideBar from './Components/SideBar/SideBar';
import Mainfile from './Components/Main/Mainfile';

import {AppContext } from './Context/Context'; // Importing named exports


const App = () => {
  return (
    <AppContext>
      <SideBar/>
      <Mainfile/>
    </AppContext>
  );
};

export default App
