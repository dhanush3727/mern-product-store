import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Autocomplete,
  TextField,
} from "@mui/material";

function App() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    // Add more movies...
  ];

  const rows = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openIndex, setOpenIndex] = useState(null); // Track which dropdown is open

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleScroll = () => {
    setOpenIndex(null); // Close any open dropdown when scrolling
  };

  return (
    <Paper>
      <TableContainer
        sx={{ height: "50vh", mt: 3, overflow: "auto" }}
        onScroll={handleScroll} // Close dropdowns on scroll
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "blue" }}>
                Autocomplete
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Autocomplete
                      disablePortal
                      options={top100Films}
                      open={openIndex === index} // Control open state
                      onOpen={() => setOpenIndex(index)} // Open dropdown for this row
                      onClose={() => setOpenIndex(null)} // Close dropdown
                      sx={{ width: 300 }}
                      S
                      renderInput={(params) => (
                        <TextField {...params} label="Movie" />
                      )}
                    />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
}

export default App;
