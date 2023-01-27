import { IClasifficationTableProps, IClasifficationTableItemProps } from "../app/components/ClassificationTable/ClasifficationTable";

//Racers
export const RacersAltoSote: IClasifficationTableItemProps[] =  [
  { id:'1', nick: 'Fabio', gender:'M', points: 0, previousTime: '34:32', time: '30:10'},
  { id:'2', nick: 'Aleja', gender:'F', points: 0, previousTime: '27:11', time: '31:18' },
  { id:'3', nick: 'Rodrigo', gender:'M', points: 0, previousTime: '28:18', time: '31:15' },
  { id:'4', nick: 'Hernan', gender:'M', points: 0, previousTime: '25:58', time: '23:19' },
  { id:'5', nick: 'Laura', gender:'F', points: 0, previousTime: '24:48', time: '24:25' },
  { id:'6', nick: 'Julian', gender:'M', points: 0, previousTime: '24:18', time: '25:31' },
  { id:'7', nick: 'Mariana', gender:'F', points: 0, previousTime: '24:15', time: '27:27' },
  { id:'8', nick: 'Mechas', gender:'M', points: 0, previousTime: '23:57', time: '24:17' },
  { id:'9', nick: 'Santiago', gender:'M', points: 0, previousTime: '23:45', time: '23:06' },
  { id:'10', nick: 'Daniel', gender:'M', points: 0, previousTime: '23:21', time: '22:47' },
  { id:'11', nick: 'Alexo', gender:'M', points: 0, previousTime: '23:18', time: '24:22' },
  { id:'12', nick: 'Victor', gender:'M', points: 0, previousTime: '21:31', time: '22:40' },
  { id:'13', nick: 'Camo', gender:'M', points: 0, previousTime: '21:24', time: '24:33' },
  { id:'14', nick: 'Diego', gender:'M', points: 0, previousTime: '21:19', time: '21:35' },
  { id:'15', nick: 'Oscar', gender:'M', points: 0, previousTime: '21:02', time: '21:03' },
  { id:'16', nick: 'Fernando', gender:'M', points: 0, previousTime: '20:55', time: '19:57' },
  { id:'17', nick: 'Camilo', gender:'M', points: 0, previousTime: '20:43', time: '21:31' },
  { id:'18', nick: 'Chispas', gender:'M', points: 0, previousTime: '20:17', time: '21:03' },
  { id:'19', nick: 'Chiqui', gender:'M', points: 0, previousTime: '20:05', time: '21:08' },
  { id:'20', nick: 'Carlos', gender:'M', points: 0, previousTime: '19:54', time: '20:00' },
  { id:'21', nick: 'Cesar', gender:'M', points: 0, previousTime: '19:52', time: '22:28' },
  { id:'22', nick: 'Toño', gender:'M', points: 0, previousTime: '16:27', time: '19:57' },
  { id:'23', nick: 'Jonathan', gender:'M', points: 0, previousTime: '15:57', time: '20:38' },
];

//Races
export const AltoSote : IClasifficationTableProps = {
  id:'1',
  name: 'Alto Sote (1)',
  stravaLink: 'https://strava.app.link/AUAAw4FFSwb',
  finished: true,
  racers: RacersAltoSote,
};
