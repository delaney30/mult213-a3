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

function AvengerCard({ name, description, powers }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Powers: {powers}</p>
    </div>
  );
}

function App() {
  const avengerCharacters = [
    {
      name: "Iron Man",
      description: "Tony Stark is a genius billionaire who builds an advanced armored suit to protect the world as Iron Man.",
      powers: "Powered armored suit with enhanced strength and durability, Flight via jet propulsion, Energy repulsor blasts, Genius-level intellect and engineering skills"
    },
    {
      name: "Captain America",
      description: "Steve Rogers, a World War II soldier, becomes the super-soldier Captain America and leads the Avengers with honor and strategy.",
      powers: "Enhanced strength, speed, and endurance, Expert tactician and leader, Master hand-to-hand combatant, Unbreakable vibranium shield"
    },
    {
      name: "Thor",
      description: "Thor is the Asgardian God of Thunder, wielding Mjolnir and later Stormbreaker to defend the Nine Realms and Earth.",
      powers: "Control over lightning and storms, Superhuman strength, endurance, and longevity, Flight with Mjolnir or Stormbreaker, Skilled warrior and combatant"
    },
    {
      name: "Black Widow",
      description: "Natasha Romanoff, also known as Black Widow, is a former KGB agent and expert in hand-to-hand combat and espionage.",
      powers: "Expert hand-to-hand combatant, Skilled marksman, Master of espionage, High-level intelligence"
    },
    {
      name: "Hawkeye",
      description: "Clint Barton is a skilled marksman and archer, also known as Hawkeye, who is an expert in the use of bows and arrows.",
      powers: "Master archer, Skilled in hand-to-hand combat, Expert marksman with various specialized arrows"
    },
    {
      name: "Hulk",
      description: "Bruce Banner transforms into the Hulk when angered, gaining immense strength, durability, and healing abilities.",
      powers: "Superhuman strength, durability, and healing, Unlimited stamina, Enhanced regenerative healing factor"
    },
    {
      name: "Black Panther",
      description: "T'Challa is the king of Wakanda and the Black Panther, with enhanced strength, speed, and agility, thanks to the Heart-Shaped Herb.",
      powers: "Enhanced strength, speed, agility, and senses, Vibranium suit, Expert hand-to-hand combatant, Peak human conditioning"
    },
    {
      name: "Doctor Strange",
      description: "Stephen Strange is a former neurosurgeon who becomes the Sorcerer Supreme, wielding magic to protect Earth from mystical threats.",
      powers: "Mastery of the mystic arts, Spell-casting, Time manipulation, Teleportation, Astral projection"
    },
    {
      name: "Spider-Man",
      description: "Peter Parker, bitten by a radioactive spider, gains superhuman strength, agility, and the ability to cling to walls as Spider-Man.",
      powers: "Superhuman strength, agility, and reflexes, Wall-crawling, Spider-sense, Web-shooting"
    },
    {
      name: "Ant-Man",
      description: "Scott Lang can shrink to the size of an ant or grow to giant proportions, using his suit to harness these abilities.",
      powers: "Ability to shrink and grow in size, Superhuman strength when small, Communicates with ants, Expert thief"
    },
    {
      name: "Vision",
      description: "Vision is an android created from Vibranium, and he possesses the Mind Stone, granting him extraordinary powers.",
      powers: "Ability to phase through objects, Superhuman strength and durability, Flight, Energy blasts from the Mind Stone"
    },
    {
      name: "Scarlet Witch",
      description: "Wanda Maximoff, aka Scarlet Witch, has reality-altering powers, telekinesis, and energy manipulation.",
      powers: "Reality manipulation, Telekinesis, Energy manipulation, Mind control, Teleportation"
    },
    {
      name: "Falcon",
      description: "Sam Wilson, also known as Falcon, is an expert pilot and fighter with a specially designed winged suit that grants him flight.",
      powers: "Expert hand-to-hand combatant, Flight with winged suit, Skilled marksman, High-level intelligence"
    },
    {
      name: "Winter Soldier",
      description: "Bucky Barnes, the Winter Soldier, was a brainwashed assassin with a bionic arm and enhanced strength.",
      powers: "Enhanced strength, agility, and reflexes, Skilled hand-to-hand combatant, Bionic arm with various weapons"
    },
    {
      name: "War Machine",
      description: "James Rhodes is a military officer and ally of Iron Man who wears the War Machine armor, which is a more weaponized version of Iron Man's suit.",
      powers: "Powered armored suit with heavy weaponry, Enhanced strength, durability, and agility, Skilled hand-to-hand combatant"
    },
    {
      name: "Star-Lord",
      description: "Peter Quill, also known as Star-Lord, is a skilled marksman and leader of the Guardians of the Galaxy, known for his charisma and fighting skills.",
      powers: "Skilled marksman, Expert in hand-to-hand combat, Leadership abilities, Enhanced durability and stamina"
    },
    {
      name: "Groot",
      description: "Groot is a sentient tree-like creature who can grow and regenerate, and communicate only by saying 'I am Groot.'",
      powers: "Regeneration, Ability to grow and change size, Superhuman strength, Limited communication through 'I am Groot'"
    }
  ];

  return (
    <div className="App">
      <h1>MARVEL</h1>
      {avengerCharacters.map((character, index) => (
        <AvengerCard
          key={index}
          name={character.name}
          description={character.description}
          powers={character.powers}
        />
      ))}
    </div>
  );
}

export default App;

