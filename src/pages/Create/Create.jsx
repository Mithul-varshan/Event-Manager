import "./Create.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Create() {
  

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
          <TextField label="Event Organizer" variant="outlined" fullWidth  />
          <TextField label="Event Name" variant="outlined" fullWidth />

          <TextField
            label="Event Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth  
          />
          <TextField
            label="Event Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
          />
          <TextField label="Event Venue" variant="outlined" fullWidth />
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
