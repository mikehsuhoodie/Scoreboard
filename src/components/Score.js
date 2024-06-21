import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Score = ({ score }) => {
  const { deleteScore } = useContext(GlobalContext);

  const sign = '+';

  return (
    <li className={score.team === "Red" ? 'minus' : 'plus'}>
      {score.text} <span>{sign}{score.amount}</span><button onClick={() => deleteScore(score.id)} className="delete-btn">x</button>
    </li>
  )
}
