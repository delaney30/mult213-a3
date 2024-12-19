import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
// import md5 from 'crypto-js/md5';

// function example() {
//   const publicKey = 'bf320977b2de0e9bf6223845ea2a1583';
//   const privateKey = '2a60efe2abc8fa9205d2064fad2c6b50892bf539';
//   const ts = Date.now();
//   const hash = md5(ts + privateKey + publicKey); // md5 hash of ts + privateKey + publicKey

//   const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }
function AvengerCard({ name, description, powers, onAddToFavourites }) {
  return (
    <div className="characters">
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Powers: {powers}</p>
      <button onClick={() => onAddToFavourites(name)}>Add to Favourites</button>
    </div>
  );
}

function App() {
  const [favourites, setFavourites] = useState([]);
  const [avengerCount, setAvengerCount] = useState(0);

  // Adds a counter to how many favourite Avengers you have with useEffect
  useEffect(() => {
    setAvengerCount(favourites.length);
  }, [favourites]);

  const avengerCharacters = [
    { name: "Iron Man", description: "A genius billionaire who builds an advanced armored suit.", powers: "Flight, repulsor blasts, genius intellect" },
    { name: "Thor", description: "The Asgardian God of Thunder, wielding Mjolnir.", powers: "Lightning, super strength, longevity" },
    { name: "Hulk", description: "Bruce Banner transforms into the Hulk when angered.", powers: "Immense strength, durability, healing" },
    { name: "Black Widow", description: "A skilled spy and combatant.", powers: "Espionage, hand-to-hand combat" },
    { name: "Spider-Man", description: "Peter Parker, bitten by a radioactive spider.", powers: "Wall-crawling, super agility, spider-sense" },
    { name: "Captain America", description: "Steve Rogers, a frail young man transformed into a super-soldier during World War II.", powers: "Enhanced strength, speed, agility, stamina, accelerated healing, master combatant, shield mastery"}
  ];

  const handleAddToFavourites = (name) => {
    if (!favourites.includes(name)) {
      setFavourites([...favourites, name]);
    }
  };

  const handleRemoveFromFavourites = (name) => {
    setFavourites(favourites.filter((fav) => fav !== name));
  };

  return (
    <div className="App">
      <h1>MARVEL</h1>
      <div className="favourites-counter">
        <h2>Favourite Avengers: {avengerCount}</h2>
      </div>

      {favourites.length > 0 && (
        <div className="favourites-list">
          <ul>
            {favourites.map((fav, index) => (
              <li key={index}>
                {fav}
                <button onClick={() => handleRemoveFromFavourites(fav)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p>Please select your favourite characters!</p>
      <div className="characters-container">
        {avengerCharacters.map((character, index) => (
          <AvengerCard
            key={index}
            name={character.name}
            description={character.description}
            powers={character.powers}
            onAddToFavourites={handleAddToFavourites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


