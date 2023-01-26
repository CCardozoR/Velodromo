import React from 'react';
import { RacersGeneral } from '../../data/mockData';
import ClasifficationTableItem from './ClasifficationTableItem';

function ClasifficationTable() {
  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Puntos</th>
        <th>Mejora</th>
      </tr>
      {RacersGeneral.map((racer) => {
        return <ClasifficationTableItem {...racer} />;
      })}
    </table>
  );
}

export default ClasifficationTable;
