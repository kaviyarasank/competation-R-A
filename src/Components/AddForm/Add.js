import React, { useEffect, useState, useCallback } from "react";
import "./AddForm.css";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { BaseUrl } from "../../services/apiService";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const AddForm = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    empName: "",
    leadName: "",
    message: ""
  })
  const [rating, setRating] = useState(4)
  const handleClick = () => {
    navigate("/");
  }


  const handleSave = async () => {
    let value = {
      name_of_employee: data.empName,
      feedback_description: data.message,
      star_rating: rating,
      feedback_by: data.leadName
    }

    await axios.post(BaseUrl.BASE_URL + "api/new/FeedbackCreation/", value)
      .then((res) => {
        if (res.data.responseCode === 201) {
          toast.success(res?.data?.message)
          navigate("/");
        } else {
          console.error(`${res.status} error occured.`);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message)
      });
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleChangeRating = (e) => {
    setRating(e.target.value)
  }
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
          <Typography className="Header_title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Leader Appreciation Tool
          </Typography>
          <Button color="inherit" sx={{ backgroundColor: "black" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="add_form_main_div">
      <p className="Add_Form_title">Create Appreciation</p>
      <div className="row mt-3">
        <div className="col-md-6">
          <Input
            type="text"
            label="Employee Name"
            value={data.empName}
            onChange={handleChange}
            placeholder="Enter Name"
            name="empName"
          />
        </div>
        <div className="col-md-6">
          <Input
            type="email"
            label="Lead Name"
            value={data.leadName}
            onChange={handleChange}
            name="leadName"
            placeholder="Enter Name"


          />
        </div>

      </div>


      <div className="row mt-5">
        <div className="col-md-6">
          <Input
            type="text"
            label="Comments"
            placeholder="Enter Comments"
            value={data.message}
            onChange={handleChange}
            name="message"

          />
        </div>
        <div className="col-md-6 d-flex">
          <p className="ms-1">Rating</p>
          <Rating name="size-large"
            onChange={handleChangeRating}
            defaultValue={4} size="large" className="starRating" value={rating} />
        </div>

      </div>
      <div className="Add_form_btn_div mt-5">
        <div className="addForm_btnsDiv">
          <button className="save_btn_add" onClick={handleSave}>Submit</button>
          <button className="cancel_btn_add ms-2" onClick={handleClick}>Cancel</button>
        </div>
      </div>

    </div>
   
    </>
  )
}
export default AddForm;