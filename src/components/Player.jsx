import '../../src/App.css';

export default function Player({ player }) {
  return (
    <div className='player'>
      <h2>{player?.name}</h2>
      <p>{player?.breed}</p>
      <img className='player-image' src={player?.imageUrl} />
    </div>
  );
}
