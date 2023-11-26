import '../../src/App.css';
import { Link } from 'react-router-dom';
import Player from './Player';
import { deletePlayer } from '../api';

export default function SinglePlayer({ player, onPlayerDeleted }) {
  const handleDelete = async () => {
    await deletePlayer(player.id);
    onPlayerDeleted(player.id);
  };
  return (
    <div className='player-card'>
      <Player player={player} />
      <button className='details-btn'>
        <Link to={`/${player.id}`}>Details</Link>
      </button>
      <button onClick={() => handleDelete()} className='rmv-btn'>
        Delete
      </button>
    </div>
  );
}
