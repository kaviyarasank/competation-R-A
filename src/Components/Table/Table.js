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
import Icons from "../../constant/Icons"
import "../../App.css";
import "./Table.css"; 
import Pagination from "@mui/material/Pagination";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { BaseUrl } from '../../services/apiService';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function TableData() {
  const navigate = useNavigate();
  const [rowsperpage, setRowperpage] = useState()
  const [data, setData] = useState([]);
  const [id, setId] = useState(null)
  const handleClick = () => {
    navigate("/add-form",{
      state:{
        title:"Add Appreciation",
        add:true,
        view:false,
        edit:false
      }
    })
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

  const view=(data)=>{
    navigate("/view-form",{
      state:{
        data,
        title:"View Appreciation",
        view:true,
        edit:false,
        add:false
      }
    })
  }

  const edit=(data)=>{
    navigate("/edit-form",{
      state:{
        data,
        title:"Edit Appreciation",
        view:false,
        edit:true,
        add:false
      }
    })
  }
const handleClickOpen=(row)=>{
  setOpen(true);
  setId(row);
}
console.log("idddddd",id)
  const deleteRecord=async ()=>{
    await axios.delete(BaseUrl.BASE_URL + "api/new/FeedbackEditAndDelete/?id="+`${id?.id}`)
    .then((res) => {
      if (res.data.responseCode === 201) {
        toast.success(res?.data?.message);
        getApi();
        handleClose()
      } else {
        console.error(`${res.status} error occured.`);
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message)
    });
  }
  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };
  return (

    <>
      <div className='container-fluid container-wrapper'>
        <div className='topbtn mt-5'>
          <button className='btn_add mt-5' onClick={handleClick} >+ Add</button>
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
                            onClick={()=>view(row)}
                            className="viewIcon"
                          />
                        </Tooltip>
                        <Tooltip title="Edit">
                          <Icons.Edit
                            onClick={() => edit(row)}
                            className="editIcon"
                          />
                        </Tooltip>
                        <Tooltip title="Delete">
                          <Icons.Delete
                            onClick={() => handleClickOpen(row)}
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


 <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h5 className='deleteTitle'>Delete</h5>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <h6>Are you Sure Want To Delete <small className='deleteName'>{id?.name_of_employee}</small> Record ?</h6>
          </Typography>
         
        </DialogContent>
        <DialogActions>
          <button className="save_btn_add" onClick={deleteRecord} >Yes</button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    </>
  );
}

export default TableData;