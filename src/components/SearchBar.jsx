import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ placeholder, navigating, setNavigating }) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(placeholder);

  const handleSearch = (e) => {
    e.preventDefault();
    // You can perform additional actions here before calling the onSearch callback
    navigate(`/?search=${searchText}`);
  };
  const handleChange = (event) => {
    setNavigating(false);
    const value = event.target.value;
    // console.log(`name: ${name}, value: ${value}`);
    setSearchText(value);
  };

  return (
    <form onSubmit={handleSearch} className='navbar-search'>
      <input
        type='text'
        placeholder={placeholder}
        value={(navigating ? '' : searchText) || ''}
        onChange={handleChange}
        className='search-text'
      />
      <button type='submit' className='search-btn'>
        Search
      </button>
    </form>
  );
}

// export default SearchBar;
