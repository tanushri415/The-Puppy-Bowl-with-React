import { useState, useEffect } from 'react';
import { getAllPlayers } from '../api';
import SinglePlayer from './SinglePlayer';
import '../../src/App.css';
import { useSearchParams } from 'react-router-dom';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  let [searchParams] = useSearchParams();

  let search = searchParams.get('search');

  const onPlayerDeleted = (playerId) => {
    console.info(`removing playerId: ${playerId} from collection`);
    setPlayers((players) => players.filter((player) => player.id !== playerId));
  };

  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await getAllPlayers();
      console.log(`search: ${search}`);

      if (search !== undefined && search !== null) {
        //filter records here
        const filteredPlayers = allPlayers.filter((player) =>
          player.name.toUpperCase().includes(search.toUpperCase())
        );
        setPlayers(filteredPlayers);
      } else {
        setPlayers(allPlayers);
      }
    }
    getPlayers();
  }, [search]);

  return (
    <div className='players-container'>
      {players?.map((player) => {
        return (
          <SinglePlayer
            key={player.id}
            player={player}
            onPlayerDeleted={onPlayerDeleted}
          />
        );
      })}
    </div>
  );
}
