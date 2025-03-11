import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className="background">
        <div className="overlap-background">
          <div className="overlap-text">
            <p>
              Bannari Amman Institute of Technology | Annual Tech & Cultural
              Fest 2025
            </p>
            <h1>
              Change Your Mind <br /> To Become Success
            </h1>
            <button onClick={() => navigate('/Event-Manager/apply')}>Apply NOW</button>
          </div>
        </div>
      </div>
      <div className="events-container">
        <div className="events-container-head">
          <h1>Available Events</h1>
        </div>
        <div className="event-card">
            <img src="" alt="" />
            <h1></h1>
            <p></p>
        </div>
      </div>
    </>
  );
}

export default Home;
