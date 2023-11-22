import { useState, useEffect } from 'react';
import { getAllPlayers } from '../api';
import SinglePlayer from './SinglePlayer';
import '../../src/App.css';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function getPlayers() {
      setPlayers(await getAllPlayers());
    }
    getPlayers();
  }, []);

  return (
    <div className='players-container'>
      {players?.map((player) => {
        return <SinglePlayer key={player.id} player={player} />;
      })}
    </div>
  );
}
