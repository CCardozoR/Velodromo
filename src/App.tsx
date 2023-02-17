import React from 'react';
import './App.scss';
import ClasifficationTable from './app/components/ClassificationTable/ClasifficationTable';
import FiltersBar from './app/components/Filters/Filters';
import { AltoMoral, AltoSote, GreenHillsPuente } from './data/mockData';

function App() {
  
  return (
    <div className='app'>
      <FiltersBar/>
      <ClasifficationTable {...GreenHillsPuente}/>
      <hr></hr>
      <FiltersBar/>
      <ClasifficationTable {...AltoMoral}/>
      <hr></hr>
      <FiltersBar/>
      <ClasifficationTable {...AltoSote}/>
    </div>
  );
}

export default App;
