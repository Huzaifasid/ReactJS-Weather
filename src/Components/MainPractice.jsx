import React, { useState, useEffect } from 'react';

const MainPractice = () => {
    const [weather, setWeather] = useState({});
    const [cityName, setCityName] = useState("");
    const [searchCityState, setSearchCityState] = useState("karachi");
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid=b1b7d1ebf13d92d8819ea12ef015d606&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            })
            .catch((err) => {
                console.log("0rrr", err);
            }, [cityName]);
    }, [cityName]);

    const searchCity = (e) => {
      
        setSearchCityState(cityName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCityName("");
    }
    return (
        <div className='container'>
            <h1>Weather Forecast</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter city name'
                    className='form-control'
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <button className='btn btn-info my-3' onClick={searchCity}>Search</button>
            </form>

            <div className="container">
                <ul>
                    <li>City: {weather && weather.name}</li>
                    <li>TEMP: {weather && weather.main && weather.main.temp}</li>
                    <li>{weather &&
                        weather.weather &&
                        weather.weather[0] &&
                        weather.weather[0].main}</li>
                </ul>
            </div>
        </div>
    )
}

export default MainPractice;