import React,{useEffect, useState} from 'react';
import axios from 'axios';

function App() {
const [weather,setWeather] = useState(null);
useEffect(() => {
  axios
  .get("http://api.weatherapi.com/v1/current.json?key=eb1c7fbd3c5d433e95d125300210108&q=London&aqi=no")
  .then((res) =>{
    setWeather(res.data)
  })
  .catch(err=> console.log(err))
}, [])

  return (
    <div className="App">
      {
        weather && (
          <h1>{weather.location.name}</h1>
        )
      }
    </div>
  );
}

export default App;
