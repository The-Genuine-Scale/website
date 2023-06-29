import React from "react";
import './TeamMember.css'

const TeamMember = ({ image, name }) => {
  return (
    <div className="team_member">
      <img src={image} alt="about" />
      <h4>{name}</h4>
    </div>
  );
};

export default TeamMember;
