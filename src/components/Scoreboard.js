import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Scoreboard = () => {
  const { scores } = useContext(GlobalContext);

  const amounts = scores.map(score => ({
    team: score.team,
    amount: score.amount
  }));

  const income = amounts
      .filter(item => item.team === "Green")
      .reduce((acc, item) => (acc += item.amount), 0);

  const expense = amounts
  .filter(item => item.team === "Red")
  .reduce((acc, item) => (acc += item.amount), 0);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Green Team</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Red Team</h4>
  <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}
