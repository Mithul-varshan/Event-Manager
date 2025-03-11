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
  function createData(roll, eventName, Department, Venue, Date) {
    return { roll, eventName, Department, Venue, Date };
  }
  const rows = [
    createData('7376241CS275', 'Dance', 'CSE', 'Seminar Hall','12-10-2025'),
    createData('7376241CS190', 'music', 'CSE', 'Bit Auditorium','12-10-2025'),
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
                  <TableCell sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Roll Number</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Event Name</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Department</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Venue</TableCell>
                  <TableCell align="right" sx={{fontSize:20, fontWeight:'bold', color:'#333', fontFamily:'Poppins'}}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.roll}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{fontSize:18}}>{row.roll}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.eventName}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.Department}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.Venue}</TableCell>
                    <TableCell align="right" sx={{fontSize:18}}>{row.Date}</TableCell>
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
