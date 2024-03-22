import { useState } from "react";
import "./App.css";
function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [photo, setPhoto] = useState([]);
  const handleSubmit = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${"9e2ff9771128d6ec18e33281d91cc7f2"}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 404) {
          return alert("opps!data not found");
        } else {
          return console.log("Server Error");
        }
      })
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.log(error));
    fetch(
      `https://api.unsplash.com/search/photos?query=${location}&client_id=${"QGpwHaXYX3UEsPrUiMtXUer24I3J08nbHiWv61V2aFM"}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhoto(data?.results[0]?.urls?.small);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div classNameName="container">
      <div classNameName="row my-4">
        <div classNameName="col-2 offset-4">
          <input
            type="text"
            classNameName="form-control border border-danger"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div classNameName="col-1">
          <input
            type="button"
            onClick={handleSubmit}
            classNameName="btn btn-warning"
            value="Search Location"
          ></input>
        </div>
      </div>
      <div classNameName="row">
        <div classNameName="offset-5 col-1">
          <p>{weather?.main?.temp}</p>
        </div>
      </div>
      <img src={photo} classNameName="d-block w-25 m-auto" />
    </div>
  );
}
export default App;
