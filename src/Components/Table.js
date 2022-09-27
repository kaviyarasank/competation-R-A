import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Icons from "../constant/Icons"
import "../App.css"

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Sasikumar', "Mohan", "mohan@way2smile.com", 4.0),
  createData('Mahesh', "Kavi", "Kavi@way2smile.com", 3, 4.3),
  createData('Tamil', "Abinaya", "Abinaya@way2smile.com", 5, 2.0),
  createData('Prince', "Bharath", "bharath@way2smile.com", 2, 4.3),
  createData('Raman', "Vignesh", "vignesh@way2smile.com", 1, 3.9),
];

function TableData() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-form")
  }
  return (

    <>
      <div className='container-fluid container-wrapper '>
        <div className='topbtn'>
          <button className='btn_add' onClick={handleClick} >Add</button>
        </div>
        <div className='container '>
          <TableContainer component={Paper} className="Table_wrapper">
            <Table sx={{ minWidth: 850 }} aria-label="customized table">
              <TableHead>
                <TableRow className='table-head'>
                  <TableCell>S.no</TableCell>
                  <TableCell>Lead Name</TableCell>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Employee Email</TableCell>
                  <TableCell>Appriciation</TableCell>
                  <TableCell>Action</TableCell>
                  {/* <TableCell></TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={row.name}
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{row.calories}</TableCell>
                    <TableCell >{row.fat}</TableCell>
                    {/* <TableCell>{Array(3)?.fill(
                      <StarIcon
                        style={{ color: "#faaf00", cursor: "default" }}
                      />
                    )} */}
                    <TableCell >
                    <Rating name="size-large" defaultValue={row.carbs} size="large" />
                    </TableCell>
                    <TableCell >
                      <div className="actions_container">
                      <Tooltip title="View">
                        <Icons.Eye
                          onClick={() => ""}
                        />
                      </Tooltip>
                      <Tooltip title="Edit">
                        <Icons.Edit
                          onClick={() => ""}
                          className="editIcon"
                        />
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Icons.Delete
                          onClick={() => ""}
                          className="delete_icon"
                        />
                      </Tooltip>
                    </div></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default TableData;