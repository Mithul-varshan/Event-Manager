import "./Create.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

function Create() {
  const [organizer, setOrganizer] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");

  const handleAddEvent = async () => { 
    const data = { organizer, name, date, time, venue };

    try {
      console.log("Sending data:", data);
      const response = await axios.post("http://localhost:8000/api/add-events/", data);
      console.log("Response:", response.data);
      alert("event added successfully")
    } catch (err) {
      console.error("Error adding event:", err);
    }
    setDate("")
    setTime("");
    setVenue("");
    setOrganizer("");
    setName("");  
  };

  return (
    <div className="create-container">
      <div className="overlay">
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            background: "rgba(255, 255, 255, 0.93)",
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
          <TextField
            label="Event Organizer"
            variant="outlined"
            fullWidth
            value={organizer} 
            onChange={(e) => setOrganizer(e.target.value)}
          />
          <TextField
            label="Event Name"
            variant="outlined"
            fullWidth
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Event Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            value={date} 
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Event Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            value={time} 
            onChange={(e) => setTime(e.target.value)}
          />
          <TextField
            label="Event Venue"
            variant="outlined"
            fullWidth
            value={venue} 
            onChange={(e) => setVenue(e.target.value)}
          />
          <Stack spacing={2} direction="row" sx={{ width: "100%" }}>
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
              onClick={handleAddEvent}
            >
              + ADD EVENT
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Create;
