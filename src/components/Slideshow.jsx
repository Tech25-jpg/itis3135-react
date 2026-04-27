import React, { useState, useEffect, useRef } from 'react';

const Slideshow = ({ interval = 5000 }) => {
    const [characters, setCharacters] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const timerRef = useRef(null);

useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
        .then(response => response.json())
        .then(data => {
            setCharacters(data.amiibo.slice(0, 15));
        })
        .catch(error => {
            console.error('Error fetching characters:', error);
            // FALLBACK DATA: Use a few hardcoded images so the site doesn't stay blank
            setCharacters([
                {
                    name: "Mario",
                    gameSeries: "Super Mario",
                    image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
                },
                {
                    name: "Link",
                    gameSeries: "The Legend of Zelda",
                    image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-00040001.png"
                },
                {
                    name: "Pikachu",
                    gameSeries: "Pokemon",
                    image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_19000000-00030001.png"
                }
            ]);
        });
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
    }, [isPlaying, interval, characters.length]);

    // Loading State
    if (characters.length === 0) return <p>Loading Character Quest...</p>;

    // Navigation Handlers
    const goNext = () => {
        setIsPlaying(false);
        setCurrentIndex(prev => (prev < characters.length - 1 ? prev + 1 : 0));
    };

    const goPrev = () => {
        setIsPlaying(false);
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : characters.length - 1));
    };

    return (
        <div className="slideshow-container">
            <h2>Character Gallery</h2>

            <div className="character-card">
                <img 
                    src={characters[currentIndex].image} 
                    alt={characters[currentIndex].name} 
                    className="character-image" 
                    style={{ height: '300px', objectFit: 'contain' }}
                />
                <h3>{characters[currentIndex].name}</h3>
                <p>Game Series: {characters[currentIndex].gameSeries}</p>
            </div>

            <div className="button-group">
                {/* First, Prev, Play/Stop, Next, End */}
                <button onClick={() => {setCurrentIndex(0); setIsPlaying(false);}}>First</button>
                
                <button onClick={goPrev}>Previous</button>

                <button onClick={() => setIsPlaying(!isPlaying)} className="play-pause-button">
                    {isPlaying ? 'Stop' : 'Play'}
                </button>

                <button onClick={goNext}>Next</button>

                <button onClick={() => {setCurrentIndex(characters.length - 1); setIsPlaying(false);}}>End</button>
            </div>

            <p className="status-text">
                {isPlaying ? "▶ Auto-playing" : "⏸ Paused"} | {currentIndex + 1} / {characters.length}
            </p>
        </div>
    );
}

export default Slideshow;