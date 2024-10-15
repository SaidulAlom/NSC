import React from 'react';
import './Members.css'; // Ensure you have a CSS file for styling

// Import images for members
import Chairman from '../../Assets/Harun.jpg'; // Replace with actual paths
// import member2Img from '../../Assets/member2.jpg';
// import member3Img from '../../Assets/member3.jpg';
// import member4Img from '../../Assets/member4.jpg';
// import member5Img from '../../Assets/member5.jpg';
// import member6Img from '../../Assets/member6.jpg';
// import member7Img from '../../Assets/member7.jpg';
// import member8Img from '../../Assets/member8.jpg';
// import member9Img from '../../Assets/member9.jpg';
// import member10Img from '../../Assets/member10.jpg';

const membersData = [
  {
    name: 'IFTIAR HUSSAIN',
    image: Chairman,
    designation: 'Chairman, Navojyoti Sports Club',
  },
  {
    name: 'N. MINHAJUL HAQUE',
    // image: member2Img,
    designation: 'President, Navojyoti Sports Club', // Fixed missing quote
  },
  {
    name: 'MAFIJUL H. CHOUDHURY',
    // image: member3Img,
    designation: 'Manager & G. Secretary, Navojyoti Sports Club',
  },
  {
    name: 'JAHIRUL ISLAM',
    // image: member4Img,
    designation: 'Social Welfare Coordinator, Navojyoti Sports Club',
  },
  {
    name: 'JITU AHMED',
    // image: member5Img,
    designation: 'Social Media Coordinator, Navojyoti Sports Club',
  },
  {
    name: 'NAVID A. H. CHOUDHURY',
    // image: member6Img,
    designation: 'Financial Dept. Coordinator, Navojyoti Sports Club',
  },
  {
    name: 'SAMIDUL HUSSAIN',
    // image: member7Img,
    designation: 'Social Welfare Coordinator, Navojyoti Sports Club',
  }
];

const Members = () => {
  return (
    <div className="members-section">
      <h2 className="members-heading">Meet Our Members</h2> {/* Added heading */}
      <div className="members-container">
        {membersData.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3>{member.name}</h3>
            <p className="designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
