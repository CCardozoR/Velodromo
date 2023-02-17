import './ClasifficationTable.scss';
import { useSelector } from 'react-redux';
import {
  changeFilterImprovement,
  Filters,
  FiltersImprovement,
} from '../../state/slices/ClassificationTable';
import { useDispatch } from 'react-redux';

export interface IClasifficationTableItemProps {
  id: string;
  position?: number;
  name?: string;
  gender: string;
  nick: string;
  points: number;
  previousTime?: string;
  time?: string;
}

function ClasifficationTableItem(props: IClasifficationTableItemProps) {
  const { position, nick, points, previousTime, time } = props;
  const filterValue = useSelector(
    (state: any) => state.clasifficationTable.filterImprovement
  );
  let improvement = 0;
  if (previousTime && time) {
    if (filterValue === FiltersImprovement.IMPROVEMENT_PERCENTAGE) {
      improvement = Math.trunc(
        (100 * (timeToSeconds(previousTime) - timeToSeconds(time))) /
          timeToSeconds(previousTime)
      );
    } else {
      improvement = timeToSeconds(previousTime) - timeToSeconds(time);
    }
  }

  const improvementCell = () => {
    if (previousTime === undefined || time === undefined) {
      return null;
    }
    if (previousTime !== undefined && time === '') {
      return <td>DNS</td>;
    }
    if (filterValue === FiltersImprovement.IMPROVEMENT_PERCENTAGE) {
      return (
        <td
          className={
            improvement > 0 ? 'improvement-positive' : 'improvement-negative'
          }
        >
          {time !== undefined &&
            `${improvement > 0 ? '△' : '▽'} ${improvement} %`}
        </td>
      );
    } else {
      return (
        <td
          className={
            improvement > 0 ? 'improvement-positive' : 'improvement-negative'
          }
        >
          {time !== undefined &&
            `${improvement > 0 ? '△' : '▽'} ${secondsToTime(improvement)}`}
        </td>
      );
    }
  };

  return (
    <tr className='table-item'>
      <td>{position}</td>
      <td>{nick}</td>
      <td>
        {/* {time !== undefined && time === '' && '0'} */}
        {/* {time !== undefined && time !== '' && points} */}
        {points}
      </td>
      {previousTime !== undefined && (
        <td className='times'>
          {previousTime !== '' && <p>{`Pre: ${previousTime}`}</p>}
          {time !== undefined && time !== '' && <p>{`Pos: ${time}`}</p>}
          {time !== undefined && time === '' && <p>Pos: DNS</p>}
        </td>
      )}
      {improvementCell()}
    </tr>
  );
}

const timeToSeconds = (time: string): number => {
  if (time === '') {
    return Number.MAX_VALUE;
  }
  const timeSplit = time.split(':');
  const minutes = Number(timeSplit[0]);
  const seconds = Number(timeSplit[1]);
  return minutes * 60 + seconds;
};

const secondsToTime = (time: number): string => {
  const timeDate = new Date(0);
  timeDate.setSeconds(Math.abs(time));
  return timeDate.toTimeString().slice(3, 8);
};

export interface IClasifficationTableProps {
  id: string;
  name: string;
  stravaLink?: string;
  finished: boolean;
  racers: IClasifficationTableItemProps[];
}

function ClasifficationTable(props: IClasifficationTableProps) {
  const { name, stravaLink, finished, racers } = props;
  const tableGenerated = useSelector(
    (state: any) => state.clasifficationTable.tableGenerated
  );
  const dispatch = useDispatch();
  let columns = 4 + Number(finished);

  const uiTableGenerated = finished
    ? orderRacers(racers, tableGenerated).map((racer, index) => {
        return (
          <ClasifficationTableItem
            key={racer.id}
            position={index + 1}
            {...racer}
          />
        );
      })
    : racers.map((racer, index) => {
        return (
          <ClasifficationTableItem
            key={racer.id}
            position={index + 1}
            {...racer}
          />
        );
      });

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={columns} className='race-tittle'>
            <a href={stravaLink} target='_blank' rel='noreferrer'>
              <h2>{name}</h2>
            </a>
            {!finished && <span>Orden de salida</span>}
            {finished && <span>Resultados</span>}
          </th>
        </tr>
        <tr className='header'>
          <th>#</th>
          <th>Nombre</th>
          <th>Puntos</th>
          <th>{!finished ? 'Tiempo' : 'Tiempos'}</th>
          {finished && (
            <th onClick={() => dispatch(changeFilterImprovement())}>Mejora</th>
          )}
        </tr>
      </thead>
      <tbody>{uiTableGenerated}</tbody>
    </table>
  );
}

const pointsMen = [40, 35, 30, 20, 18, 16, 14, 12, 10, 8];
const pointsWomen = [20, 15, 10, 8, 6];

const orderRacers = (
  racers: IClasifficationTableItemProps[],
  filter: Filters
) => {
  let racersOrdered: IClasifficationTableItemProps[] = [];
  let racersRanked: IClasifficationTableItemProps[] = [];
  switch (filter) {
    case Filters.FASTEST_TIME:
      racersOrdered = racers.sort((a, b) => {
        if (a.time && b.time) {
          return timeToSeconds(a.time) - timeToSeconds(b.time);
        }
        return 0;
      });
      break;
    case Filters.IMPROVEMENT:
      racersOrdered = racers.sort((a, b) => {
        if (a.previousTime && a.time && b.previousTime && b.time) {
          const improvementSecondsA =
            timeToSeconds(a.previousTime) - timeToSeconds(a.time);
          const improvementSecondsB =
            timeToSeconds(b.previousTime) - timeToSeconds(b.time);
          return improvementSecondsB - improvementSecondsA;
        }
        return 0;
      });
      break;
    case Filters.GENDER_MALE:
      racersOrdered = racers.filter((racer) => racer.gender === 'M');
      break;
    case Filters.GENDER_FEMALE:
      racersOrdered = racers.filter((racer) => racer.gender === 'F');
      break;
    default:
      racersOrdered = racers;
      break;
  }

  if (filter === Filters.GENDER_FEMALE) {
    console.log('entro');
    racersRanked = racersOrdered.map((racer, index) => {
      if (pointsWomen[index]) {
        racer.points = pointsWomen[index];
      } else {
        racer.points = 5;
      }
      return racer;
    });
  } else {
    racersRanked = racersOrdered.map((racer, index) => {
      if (pointsMen[index]) {
        racer.points = pointsMen[index];
      } else {
        racer.points = 5;
      }
      return racer;
    });
  }
  return racersRanked;
};

export default ClasifficationTable;
