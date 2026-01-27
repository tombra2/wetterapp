import {useState, useEffect} from 'react'

const Weather = ({city, onWeatherData}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

    useEffect(() => {
        const fetchWeather = async () => {
            if (!city) return

            try {
                setLoading(true)
                setError(null)

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                )

                if (!response.ok) {
                    throw new Error('City not found')
                }

                const weatherData = await response.json()
                setData(weatherData)
                onWeatherData(weatherData)
            } catch (err) {
                console.error('Weather fetch failed:', err)
                setError(err.message || 'Unable to load weather data. Please try again.')
                setData(null)
            } finally {
                setLoading(false)
            }
        }

        fetchWeather()
    }, [city, API_KEY])

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        )
    }

    if (!data) {
        return (
            <div className="text-center text-muted">
                <p>Enter a city name to see the weather</p>
            </div>
        )
    }

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-center mb-4">
                    {data.name}, {data.sys.country}
                </h2>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-center mb-3">
                            <img
                                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                                alt={data.weather[0].description}
                            />
                            <h3 className="display-4">{Math.round(data.main.temp)}°C</h3>
                            <p className="text-capitalize fs-5">{data.weather[0].description}</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Feels like:</span>
                                <strong>{Math.round(data.main.feels_like)}°C</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Humidity:</span>
                                <strong>{data.main.humidity}%</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Wind Speed:</span>
                                <strong>{data.wind.speed} m/s</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Pressure:</span>
                                <strong>{data.main.pressure} hPa</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Min/Max:</span>
                                <strong>{Math.round(data.main.temp_min)}°C / {Math.round(data.main.temp_max)}°C</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
