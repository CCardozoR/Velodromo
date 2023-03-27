import "./ClasifficationTable.scss";

export interface IClasifficationTableRaceItemProps {
  id: number
  name: string;
  gender: string;
  time: string;
}

function ClasifficationTablRaceeItem(props: IClasifficationTableRaceItemProps) {
  const { id, name, gender, time } = props;

  return (
    <tr className="table-item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{time}</td>
    </tr>
  );
}

const timeToSeconds = (time: string): number => {
  if (time === "") {
    return Number.MAX_VALUE;
  }
  const timeSplit = time.split(":");
  const minutes = Number(timeSplit[0]);
  const seconds = Number(timeSplit[1]);
  return minutes * 60 + seconds;
};

const secondsToTime = (time: number): string => {
  const timeDate = new Date(0);
  timeDate.setSeconds(Math.abs(time));
  return timeDate.toTimeString().slice(3, 8);
};

export interface IClasifficationTableRaceProps {
  id: string;
  name: string;
  stravaLink?: string;
  finished: boolean;
  racers: IClasifficationTableRaceItemProps[];
}

function ClasifficationTableRace(props: IClasifficationTableRaceProps) {
  const { name, stravaLink, finished, racers } = props;

  const uiTableGenerated = orderRacers(racers).map((racer, index) => {
    return <ClasifficationTablRaceeItem key={racer.id} id={index+1} name={racer.name} gender={racer.gender} time={racer.time}/>;
  });

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={4} className="race-tittle">
            <a href={stravaLink} target="_blank" rel="noreferrer">
              <h2>{name}</h2>
            </a>
            <span>Resultados</span>
          </th>
        </tr>
        <tr className="header">
          <th>#</th>
          <th>Nombre</th>
          <th>Genero</th>
          <th>Tiempo</th>
        </tr>
      </thead>
      <tbody>{uiTableGenerated}</tbody>
    </table>
  );
}

const orderRacers = (racers: IClasifficationTableRaceItemProps[]) => {
  let racersOrdered: IClasifficationTableRaceItemProps[] = [];
  racersOrdered = racers.sort((a, b) => {
    if (a.time && b.time) {
      return timeToSeconds(a.time) - timeToSeconds(b.time);
    }
    return 0;
  });
  return racersOrdered;
};

export default ClasifficationTableRace;
