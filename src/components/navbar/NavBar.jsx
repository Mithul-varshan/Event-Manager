import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="nav-container">
        <ul>
          <li onClick={() => navigate('/Event-Manager')}>Events</li>
          <li onClick={() => navigate('/Event-Manager/create')}>Create</li>
          <li onClick={() => navigate('/Event-Manager/apply')}>Add </li>
          <li onClick={() => navigate('/Event-Manager/participants')}>Participants</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
