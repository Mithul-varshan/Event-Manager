import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Home() {
  const navigate = useNavigate()
  const [events,setEvents] = useState([])

  useEffect( () => {
    const fetchEvents = async() => {
    try{
      const response =   await axios.get("http://localhost:8000/api/get-events")
      console.log(response.data)
      setEvents(response.data)
    }
    catch(error){
      console.error("Error fetching events:",error)
    }
  }
  fetchEvents()
  },[])
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
            Change Your Mind <br /> To Become Successful
          </h1>
          <button onClick={() => navigate('/Event-Manager/apply')}>
            ADD PARTICIPANTS
          </button>
        </div>
      </div>
    </div>

    <div className="events-container">
      <div className="events-container-head">
        <h1>Available Events</h1>
      </div>


      <div className="events-grid">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <h2>{event.name}</h2>
              <p><strong>Organizer:</strong> {event.event_organizer}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <button className="register-button" onClick={() => navigate('/Event-Manager/apply')}>Register</button>
            </div>
          ))
        ) : (
          <p className="no-events">No events available</p>
        )}
      </div>
    </div>
  </>
  );
}

export default Home;
