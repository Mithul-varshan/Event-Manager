import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="nav-container">
        <ul>
          <li onClick={() => navigate('/')}>Events</li>
          <li onClick={() => navigate('/create')}>Create</li>
          <li onClick={() => navigate('/apply')}>Apply</li>
          <li onClick={() => navigate('/participants')}>Participants</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
