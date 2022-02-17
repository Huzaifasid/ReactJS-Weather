import React, { useState, useEffect } from 'react';


const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [cityName, setCityName] = useState('karachi');
    const [searchCityState, setSearchCityState] = useState('karachi');

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid=b1b7d1ebf13d92d8819ea12ef015d606&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                setWeatherData(result);
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchCityState]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setCityName('');
    }

    const search = () => {
        setSearchCityState(cityName);
        console.log(cityName);
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className="container my-5">
                <div className="container card w-75 ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className=' text-center'>
                            <input
                                type="text"
                                placeholder='Enter City Name'
                                className='form-control my-3'
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                            />
                            <button className='btn btn-info mb-2' onClick={search}>Search</button>
                        </form>
                        <div className="card-title my-3"><h4>WEATHER</h4></div>
                        <div className="card-text">
                            <ul>
                                <li>City: {weatherData && weatherData.name}</li>
                                <li>Temperature: {weatherData && weatherData.main && weatherData.main.temp}</li>
                                <li>Humidity: {weatherData && weatherData.main && weatherData.main.humidity}</li>
                                <li>Description: {weatherData &&
                                    weatherData.weather &&
                                    weatherData.weather[0] &&
                                    weatherData.weather[0].description}</li>
                            </ul>
                          
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;