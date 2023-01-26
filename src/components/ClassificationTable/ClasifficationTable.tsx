import { RacersGeneralPartial } from '../../data/mockData';
import './ClasifficationTable.scss';

export interface IClasifficationTableItemProps {
  id: string;
  name?: string;
  nick: string;
  points: number;
  previousTime?: string;
  improvement?: number;
}

function ClasifficationTableItem(props: IClasifficationTableItemProps) {
  const { id, name, nick, points,previousTime, improvement } = props;
  return (
    <tr className='table-item'>
      <td>{id}</td>
      <td>{nick}</td>
      <td>{points}</td>
      {previousTime !== undefined && <td>{previousTime}</td>}
      {improvement !== undefined && <td>{improvement}</td>}
    </tr>
  );
}

function ClasifficationTable() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={4} className='race-tittle'>
            <a href='https://strava.app.link/AUAAw4FFSwb' target='_blank'>
              <h2>Segmento Alto Sote (1)</h2>
            </a>
            <span>Orden de salida</span>
          </th>
        </tr>
        <tr className='header'>
          <th>#</th>
          <th>Nombre</th>
          <th>Puntos</th>
          <th>Tiempo</th>
          {/* <th>% Mejora</th> */}
        </tr>
      </thead>
      <tbody>
              {RacersGeneralPartial.map((racer) => {
          return <ClasifficationTableItem {...racer} />;
        })}
      </tbody>
    </table>
  );
}

export default ClasifficationTable;
