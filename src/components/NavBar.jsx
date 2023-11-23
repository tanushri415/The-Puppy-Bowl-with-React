import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <nav className='navigation'>
      <h1 className='header'>The Puppy Bowl Project</h1>
      <SearchBar />
      <div className='navigation-menu'>
        <ul className='navbar'>
          <li>
            <Link to={`/new`}>Add</Link>
          </li>
          <li>
            <Link to={`/`}>Players</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
