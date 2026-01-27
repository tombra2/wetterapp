import React, {useState} from 'react';
import './aiapi.css';
import {GoogleGenAI} from "@google/genai";
import TokenMarkdown from "./TokenMarkdown.jsx";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAi = new GoogleGenAI({apiKey: API_KEY})


const Aiapi = ({weatherData, city}) => {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const weatherDataString = JSON.stringify(weatherData);

    const handleAiCall = async () => {
        try {
            setLoading(true)

            const res = await genAi.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Was kann ich in ${city} machen? wenn das Wetter so ist ${weatherDataString}`,
            })

            setResponse(res.text);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    if (!city) return null;

    return (
        <div className="card">
            <div className="card-header">
                <button
                    className="btn btn-primary "
                    onClick={handleAiCall}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : `Was kann ich in ${city} machen ?`}
                </button>
            </div>
            <div className="card-body d-flex justify-content-center flex-column">
                {loading && (<div className="spinner-loading " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>)}
                {error && (<div className="alert alert-danger">{error.message}</div>)}
                <TokenMarkdown content={response}/>
            </div>
        </div>
    )
}

export default Aiapi;