import React from 'react';
import './App.scss';
import ClasifficationTable from './app/components/ClassificationTable/ClasifficationTable';
import ClasifficationTableRace from './app/components/ClassificationTable/ClasifficationTableRaceItem';
import FiltersBar from './app/components/Filters/Filters';
import ClassificationTable from './app/state/slices/ClassificationTable';
import { letape } from './data/dataLetapeRodada';
import { AltoMoral, AltoSote, GreenHillsPuente } from './data/mockData';

function App() {
  
  return (
    <div className='app'>
      
      <ClasifficationTableRace {...letape}/>
      <hr></hr>

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
