import React, { useState } from 'react';
import { useEffect, useCallback } from "react";
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
import Pagination from "@mui/material/Pagination";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { BaseUrl } from '../services/apiService';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function TableData() {
  const navigate = useNavigate();
  const [rowsperpage, setRowperpage] = useState()
  const [data, setData] = useState([]);
  const handleClick = () => {
    navigate("/add-form")
  }
 
  const getApi = async () => {
    await axios.get(BaseUrl.BASE_URL + "api/new/listfeedback/")
      .then((res) => {
        setData(res?.data?.result)
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message)
      });
  }
  useEffect(() => {
    getApi();

  }, []);
  const handleChangePage = (event, value) => {
    getApi(value);
  };

  return (

    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography  className="Header_title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Leader Appreciation Tool
          </Typography>
          <Button color="inherit" sx={{ backgroundColor: "black" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <div className='container-fluid container-wrapper '>
        <div className='topbtn mt-5'>
          <button className='btn_add' onClick={handleClick} >Add</button>
        </div>
        <div className='container mt-5'>
          <TableContainer component={Paper} className="Table_wrapper">
            <Table sx={{ minWidth: 850 }} aria-label="customized table">
              <TableHead>
                <TableRow className='table-head'>
                  <TableCell>S.No</TableCell>
                  <TableCell>Lead Name</TableCell>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Appreciation</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((row, i) => (
                  <TableRow
                    key={row.name}
                  >
                 
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell >{row.feedback_by}</TableCell>
                    <TableCell >{row.name_of_employee}</TableCell>
                    <TableCell >{row.feedback_description}</TableCell>
              
                    <TableCell >
                      <Rating name="size-large" value={row.star_rating} size="large" readOnly />
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
      <Pagination
        shape="rounded"
        count={data.totalPageNo}
        rowsperpage={data?.perPage}
        page={data?.currentPageNo}
        onChange={handleChangePage}
        className="custom_pagination_student"
      />
  
    </>
  );
}

export default TableData;