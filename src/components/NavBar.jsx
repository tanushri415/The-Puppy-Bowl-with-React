import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from 'react';

export default function NavBar({ isSearch }) {
  const [navigating, setNavigating] = useState(false);

  return (
    <nav className='navigation'>
      <h1 className='header'>The Puppy Bowl Project</h1>
      <SearchBar
        isSearch={isSearch}
        navigating={navigating}
        setNavigating={setNavigating}
      />
      <div className='navigation-menu'>
        <ul className='navbar'>
          <li>
            <Link onClick={() => setNavigating(true)} to={`/new`}>
              Add
            </Link>
          </li>
          <li>
            <Link onClick={() => setNavigating(true)} to={`/`}>
              Players
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
