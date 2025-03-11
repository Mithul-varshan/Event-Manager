import React from "react";
import "./Participants.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function Participants() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Mithul', 'Dance', '10:00 AM', 'Seminar Hall','12-10-2025'),
    createData('mike', 'music', '12:30 PM', 'Learning Centre','12-10-2025'),
  ];
  return (
    <div className="participants-container">
      <div className="participant-overlay">
        <h1>Participants</h1>
        <div className="participants-list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Student</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Event Name</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Event Time</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Event Venue</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Event Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{fontSize:18}}>
                      {row.name}
                    </TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.calories}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.fat}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.carbs}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Participants;
