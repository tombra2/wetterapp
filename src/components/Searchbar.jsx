import { useState } from 'react'

const Searchbar = ({ onSearch }) => {
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim()) {
            onSearch(city)
        }
    }

    return (
        <div className="row justify-content-center mb-4">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter city name..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button className="btn btn-primary" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Searchbar
