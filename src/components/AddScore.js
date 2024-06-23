import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddScore = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [team, setTeam] = useState('Green');

  const { addScore } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if(amount <= 0 || text === '') {
      alert('Please enter a valid score and player name');
      return;
    }
    const newScore = {
      id: Math.floor(Math.random() * 100000000), // This is just a temporary solution to generate a random id
      text,
      amount: +amount,
      team
    }

    addScore(newScore);
  }

  return (
    <>
      <h3>Add new score</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Player's Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Score
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="Gbtn" onClick={() => setTeam('Green')}>Green Team</button>
        <button className="Rbtn" onClick={() => setTeam('Red')}>Red Team</button>
      </form>
    </>
  )
}
