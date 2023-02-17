import { IClasifficationTableProps, IClasifficationTableItemProps } from "../app/components/ClassificationTable/ClasifficationTable";

//Racers
export const RacersAltoSote: IClasifficationTableItemProps[] =  [
  { id:'1', nick: 'Fabio', gender:'M', points: 0, previousTime: '28:18', time: '30:10'},
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

//Racers
export const RacersAltoMoral: IClasifficationTableItemProps[] =  [
  { id:'24', nick: 'Sergio', gender:'M', points: 0, previousTime: '13:38' , time:'16:03'},
  { id:'7', nick: 'Mariana', gender:'F', points: +5+15, previousTime: '13:05', time:'15:16' },
  { id:'13', nick: 'Camo', gender:'M', points: 5+5, previousTime: '11:21', time:'15:11' },
  { id:'5', nick: 'Laura', gender:'F', points: 5+20, previousTime: '13:16', time:'13:35' },
  { id:'8', nick: 'Mechas', gender:'M', points: 5+10, previousTime: '12:55', time:'12:52' },
  { id:'4', nick: 'Hernan', gender:'M', points: 5+40, previousTime: '13:59', time:'12:27' },
  { id:'9', nick: 'Santiago', gender:'M', points: 5+30, previousTime: '12:39', time:'13:09' },
  { id:'10', nick: 'Daniel', gender:'M', points: 5+20, previousTime: '12:55', time:'12:43' },
  { id:'12', nick: 'Victor', gender:'M', points: 5+5, previousTime: '12:44', time:'12:06' },
  { id:'21', nick: 'Cesar', gender:'M', points: 8+5, previousTime: '12:19', time:'12:31' },
  { id:'14', nick: 'Diego', gender:'M', points: 10+12, previousTime: '11:41', time:'12:01' },
  { id:'17', nick: 'Camilo', gender:'M', points: 12+5, previousTime: '11:26', time:'12:00' },
  { id:'19', nick: 'Chiqui', gender:'M', points: 14+5, previousTime: '12:39', time:'11:25' },
  { id:'23', nick: 'Jonathan', gender:'M', points: 20+5, previousTime: '10:04', time:'10:24' },
  { id:'20', nick: 'Carlos', gender:'M', points: 30+14, previousTime: '10:42', time:'11:16' },
  { id:'22', nick: 'Toño', gender:'M', points: 35+5, previousTime: '9:43', time:'10:55' },
  { id:'16', nick: 'Fernando', gender:'M', points: 40+35, previousTime: '10:18', time:'11:11'},
  { id:'25', nick: 'Julian R.', gender:'M', points: 0, previousTime: '12:43', time:'' },
];

//Races
export const AltoMoral : IClasifficationTableProps = {
  id:'2',
  name: 'Crono Alto Moral',
  stravaLink: 'https://strava.app.link/rbHkipA17wb',
  finished: true,
  racers: RacersAltoMoral,
};

export const RacersCronoUsta: IClasifficationTableItemProps[] =  [
  { id:'6', nick: 'Julian', gender:'M', points: 0+5, previousTime: '16:01', time: '15:29' },
  { id:'28', nick: 'Sergio H.', gender:'M', points:0, previousTime: '15:27', time: '15:10'},
  { id:'26', nick: 'Tania', gender:'F', points: 0, previousTime: '19:42', time: '17:37'},
  { id:'4', nick: 'Hernan', gender:'M', points: 5+5, previousTime: '18:51', time: '14:20'},
  { id:'2', nick: 'Aleja', gender:'F', points: 10, previousTime: '17:09', time:'16:59'},
  { id:'9', nick: 'Santiago', gender:'M', points: 5+5, previousTime: '17:05', time:'14:25'},
  { id:'1', nick: 'Fabio', gender:'M', points: 5, previousTime: '17:00', time:'17:03'},
  { id:'5', nick: 'Laura', gender:'F', points: 20+20, previousTime: '15:11', time:'14:53'},
  { id:'8', nick: 'Mechas', gender:'M', points: 5+5, previousTime: '14:50', time:'15:30'},
  { id:'14', nick: 'Diego', gender:'M', points: 10+14, previousTime: '15:44', time:'14:03'},
  { id:'21', nick: 'Cesar', gender:'M', points: 8+8, previousTime: '13:58', time:'13:40'},
  { id:'7', nick: 'Mariana', gender:'F', points: 15+15, previousTime: '13:57', time:'14:58'},
  { id:'19', nick: 'Chiqui', gender:'M', points: 14+18, previousTime: '13:33', time:'13:13'},
  { id:'20', nick: 'Carlos', gender:'M', points: 30+20, previousTime: '13:16', time:'13:00'},
  { id:'23', nick: 'Jonathan', gender:'M', points: 20+40,previousTime: '12:52', time:'12:06'},
  { id:'22', nick: 'Toño', gender:'M', points:35+35 , previousTime: '11:30', time:'12:39'},
  { id:'16', nick: 'Fernando', gender:'M', points: 40+30, previousTime: '11:55', time:'12:40'},
  { id:'18', nick: 'Chispas', gender:'M', points: 16, previousTime: '11:31', time:'13:09'},
  { id:'13', nick: 'Camo', gender:'M', points: 0+5, previousTime: '14:20', time: '14:13' },
  { id:'12', nick: 'Victor', gender:'M', points: 12+5, previousTime: '14:42', time:'15:13'},
  { id:'27', nick: 'Tenjo', gender:'M', points: 5+5, previousTime: '14:44', time:''},
  { id:'10', nick: 'Grijalba', gender:'M', points: 5+5, previousTime: '14:47', time:''},
  { id:'17', nick: 'Camilo', gender:'M', points: 16+12, previousTime: '15:47', time:''},
  { id:'25', nick: 'Julian R.', gender:'M', points:0, previousTime: '16:00', time:''},
];

//Races
export const GreenHillsPuente : IClasifficationTableProps = {
  id:'3',
  name: 'Green Hills - Puente',
  stravaLink: 'https://strava.app.link/yxtBgaswtxb',
  finished: true,
  racers: RacersCronoUsta,
};
