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
      <div className="relative mb-2 flex justify-center">
        <img src="/public/assets/Title.svg" alt="Title" className="mx-auto" />
      </div>
      <input
        type="text"
        className="w-[350px] h-[56px] px-20 py-0 rounded-lg border border-white mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mx-auto"
        value={city}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 hover:bg-gray-400  hover:text-white transition duration-300"
        style={{ display: "block" }}
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

