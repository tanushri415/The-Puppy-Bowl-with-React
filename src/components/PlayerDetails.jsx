import { useEffect, useState } from 'react';
import '../../src/App.css';
import { getPlayerById } from '../api';
import Player from './Player';
import { Link, useParams } from 'react-router-dom';

export default function PlayerDetails({ setNavigating }) {
  const [player, setPlayer] = useState(undefined);
  let { playerId } = useParams();

  useEffect(() => {
    async function getPlayer() {
      setPlayer(await getPlayerById(playerId));
    }
    console.info('getting player');
    getPlayer();
  }, [playerId]);
  return (
    <div className='players-container'>
      <div className='player-detail-card'>
        {player !== null ? <Player player={player} /> : <></>}     
        <button className='back-btn'>
          <Link to={`/`}>Back</Link>
        </button>
      </div>
    </div>
  );
}
