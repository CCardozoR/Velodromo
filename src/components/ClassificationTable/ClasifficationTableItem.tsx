import React from 'react';

export interface IClasifficationTableItemProps {
  id: string;
  name?: string;
  nick: string;
  points: number;
  improvement? : number;
}

function ClasifficationTableItem(props: IClasifficationTableItemProps) {

  return (
      <tr>
        <td>{props.nick}</td>
        <td>{props.points}</td>
        {props.improvement&&(<td>props.improvement</td>)}
      </tr>
  );
}

export default ClasifficationTableItem;
