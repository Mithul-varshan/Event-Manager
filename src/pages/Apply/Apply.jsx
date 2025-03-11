import React, { useState } from 'react'
import './Apply.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
function Apply() {
  const [eventName,setEventName] = useState("");
  const [rollNumber,setRollNumber] = useState("");
  const [department,setDepartment] = useState("");
  const [venue,setVenue] = useState("");
  const [date,setDate] = useState("");

  const handelAddParticipants = async () => {
    const data = {
      eventName:eventName,
      rollNumber:rollNumber,
      department:department,
      venue:venue,
      date:date
    }

    try{
      const response = await axios.post("http://localhost:8000/api/add-participants",data);
      console.log("Response:",response.data);
      alert("participant added successfully")
    }
    catch(err){
      console.error("Error adding event:",err);
    }
    setEventName("")
    setRollNumber("");
    setDepartment("");
    setVenue("");
    setDate("");
  }
  return (
    <div className='container'>
      <div className="apply-container">
      <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            background: "rgba(255, 255, 255, 0.83)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
            margin: "auto",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Event Name" variant="outlined" fullWidth  value={eventName} onChange={(e) => setEventName(e.target.value)}/>
          <TextField label="Roll Number" variant="outlined" fullWidth  value={rollNumber} onChange={(e) => setRollNumber(e.target.value)}/>
          <TextField label="Department" variant="outlined" fullWidth  value={department} onChange={(e) => setDepartment(e.target.value)}/>
          <TextField label="Venue" variant="outlined" fullWidth  value={venue} onChange={(e) => setVenue(e.target.value)}/>
          <TextField label="Date" InputLabelProps={{ shrink: true }} type='date' variant="outlined" fullWidth   value={date} onChange={(e) => setDate(e.target.value)}/>
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#34D399",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                width: "100%",
                "&:hover": { backgroundColor: "#059669" },
              }}
              onClick={() => handelAddParticipants()}
            >
              ADD
            </Button>
        </Box>

      </div>
    </div>
  )
}

export default Apply