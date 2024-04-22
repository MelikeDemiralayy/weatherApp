import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ getWeather }) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-blue-500 block mb-2">Enter City:</label>
      <input 
        type="text" 
        className="w-full px-4 py-2 rounded-lg border border-white mb-4" 
        value={city} 
        onChange={handleInputChange} 
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        Get Weather
      </button>
    </form>
  );
}

Search.propTypes = {
  getWeather: PropTypes.func.isRequired 
};


export default Search;

