import React from 'react'
import './Apply.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function Apply() {
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
          <TextField label="Event Name" variant="outlined" fullWidth />
          <TextField label="Roll Number" variant="outlined" fullWidth />
          <TextField label="Department" variant="outlined" fullWidth />
          <TextField label="Venue" variant="outlined" fullWidth />
          <TextField label="Date" InputLabelProps={{ shrink: true }} type='date' variant="outlined" fullWidth  />
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
            >
              ADD
            </Button>
        </Box>

      </div>
    </div>
  )
}

export default Apply