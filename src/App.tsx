import React from 'react';
import './App.scss';
import ClasifficationTable from './app/components/ClassificationTable/ClasifficationTable';
import FiltersBar from './app/components/Filters/Filters';
import { AltoMoral, AltoSote } from './data/mockData';

function App() {
  
  return (
    <div className='app'>
      <FiltersBar/>
      <ClasifficationTable {...AltoMoral}/>
      <hr></hr>
      <FiltersBar/>
      <ClasifficationTable {...AltoSote}/>
    </div>
  );
}

export default App;
