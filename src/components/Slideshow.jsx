import React, { useState, useEffect } from 'react';
const Slideshow = ({ images, interval = 3000 }) => {
    const [characters, setCharacters] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const timerRef = React.useRef(null);

    useEffect(() => {
        fetch('https://www.amiiboapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error('Error fetching characters:', error));
    }, []);

    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev < characters.length - 1 ? prev + 1 : 0));
            }, interval);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isPlaying, interval, images.length]);

    if (characters.length === 0) return <p>Loading...</p>;
    return (
        <div className="slideshow-container">
            <h2>Character Gallery</h2>

        <div className="character-card">
        <img src={characters[currentIndex].image} alt={characters[currentIndex].name} className="character-image" />
        <h3>{characters[currentIndex].name}</h3>
        <p>Game Series: {characters[currentIndex].gameSeries}</p>
        </div>

        <div className="button-group">
        <button onClick={() => {setCurrentIndex(0); setIsPlaying(false);}}>First</button>
        <button onClick={() => setIsPlaying(!isPlaying)} className="play-pause-button">
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => {setCurrentIndex(prev => (prev > 0 ? prev - 1 : characters.length - 1)); setIsPlaying(false);}}>Previous</button>
        <button onClick={() => {setCurrentIndex(prev => (prev < characters.length - 1 ? prev + 1 : 0)); setIsPlaying(false);}}>Next</button>
        </div>
        </div>
    );
}

export default Slideshow;
