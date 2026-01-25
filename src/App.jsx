import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Searchbar from "./components/Searchbar.jsx"
import Weather from "./components/Weather.jsx"

function App() {
    const [city, setCity] = useState('')

    const handleSearch = (searchCity) => {
        setCity(searchCity)
    }

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Searchbar onSearch={handleSearch} />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Weather city={city} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
