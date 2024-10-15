import React from 'react';
import './Sports.css';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Uncomment these lines and replace with actual paths to your images
// import cricketImg from '../../Assets/cricket.jpg'; 
// import footballImg from '../../Assets/football.jpg';
// import kabaddiImg from '../../Assets/kabaddi.jpg';
// import badmintonImg from '../../Assets/badminton.jpg';
// import volleyballImg from '../../Assets/volleyball.jpg';
// import carromImg from '../../Assets/carrom.jpg';

const sportsData = [
  {
    name: 'Cricket',
    // image: cricketImg,
    description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch.',
    head: {
      name: 'EMDAD HAQUE',
      designation: 'Head of Cricket Department, NCS',
    },
  },
  {
    name: 'Football',
    // image: footballImg,
    description: 'Football is a team sport played between two teams of eleven players with a spherical ball that may not be touched with the hands or arms during play.',
    head: {
      name: 'MAIDUL ISLAM',
      designation: 'Head of Football Department, NCS',
    },
  },
  {
    name: 'Kabaddi',
    // image: kabaddiImg,
    description: 'Kabaddi is a contact team sport that originated in ancient India, where two teams take turns to raid the opposing team while holding their breath.',
    head: {
      name: 'SAZIDUL HAQUE',
      designation: 'Head of Kabaddi Department, NCS',
    },
  },
  {
    name: 'Badminton',
    // image: badmintonImg,
    description: 'Badminton is a racquet sport played by either two players (singles) or two pairs (doubles) with shuttlecocks and racquets.',
    head: {
      name: 'CHAIDUR SAIKIA',
      designation: 'Head of Badminton Department, NCS',
    },
  },
  {
    name: 'Volleyball',
    // image: volleyballImg,
    description: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team\'s court.',
    head: {
      name: 'SAIFUL ISLAM',
      designation: 'Head of Volleyball Department, NCS',
    },
  },
  {
    name: 'Carrom',
    // image: carromImg,
    description: 'Carrom is a cue sport that originated in the Indian subcontinent, played on a wooden board, where players use a striker to hit the carrom men into the pockets.',
    head: {
      name: 'MANOWAR HUSSAIN',
      designation: 'Head of Carrom Department, NCS',
    },
  },
];

const Sports = () => {
  return (
    <div className="sports-section">
      <h2 className="sports-heading">Our Sports Activities</h2> {/* Added heading */}
      <div className="sports-container">
        {sportsData.map((sport, index) => (
          <div className="sport-card" key={index}>
            <img src={sport.image} alt={sport.name} className="sport-image" />
            <h3>{sport.name}</h3>
            <p>{sport.description}</p>
            <h4>{sport.head.name}</h4>
            <p className="designation">{sport.head.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
