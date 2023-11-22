import AllPlayers from './components/AllPlayers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PlayerDetails from './components/PlayerDetails';
import NewPlayerForm from './components/NewPlayerForm';

function App() {
  return (
    <>
      <h1>The Puppy Bowl Project</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/:playerId' element={<PlayerDetails />} />
          <Route path='/new' element={<NewPlayerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
