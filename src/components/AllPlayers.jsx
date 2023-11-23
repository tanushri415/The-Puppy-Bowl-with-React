import { useState, useEffect } from 'react';
import { getAllPlayers } from '../api';
import SinglePlayer from './SinglePlayer';
import '../../src/App.css';
import { useSearchParams } from 'react-router-dom';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let search = searchParams.get('search');
  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await getAllPlayers();
      console.log(`search: ${search}`);

      if (search !== undefined && search !== null) {
        //filter records here
        const filteredPlayers = allPlayers.filter((player) =>
          player.name.includes(search)
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
        return <SinglePlayer key={player.id} player={player} />;
      })}
    </div>
  );
}
