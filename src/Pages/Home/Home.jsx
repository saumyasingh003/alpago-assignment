import { FaTrash, FaUserPlus } from "react-icons/fa";
import Banner from "./Banner";
import { useState } from "react";
import NavBar from "../../NavBar/NavBar";

const api = {
  key:'d8f4c983d940040113adad1849931a1f',
  base:'https://api.openweathermap.org/data/2.5/'
}
const Home = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div>
      <NavBar />
      <Banner setWeather={setWeather} search={search} setSearch={setSearch}/>
      {/* <h2 className="">Home</h2> */}
      {search.length || weather?.length > 0 ? (
        <>
          <h2 className="text-3xl font-bold text-center">
            Location: {weather?.name}
          </h2>
          <h2 className="text-4xl text-center font-bold">
            Current Weather: {weather?.main?.temp} &deg;C
          </h2>
          {weather?.weather?.map((item, index) => (
            <h2 key={index} className="text-center text-3xl">
              Weather: {item.description}
            </h2>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
