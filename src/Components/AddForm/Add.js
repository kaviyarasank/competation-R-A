import React, { useEffect, useState, useCallback } from "react";
import "./AddForm.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { BaseUrl } from "../../services/apiService";


const AddForm = () => {

  const navigate = useNavigate();
  const value = useLocation();
  console.log("value--==>",value);

  const [data, setData] = useState({
    empName: value?.state?.data?.name_of_employee ? value?.state?.data?.name_of_employee : "",
    leadName: value?.state?.data?.feedback_by ? value?.state?.data?.feedback_by : "",
    message: value?.state?.data?.feedback_description ? value?.state?.data?.feedback_description : ""
  })
  const [rating, setRating] = useState(value?.state?.data?.star_rating ? value?.state?.data?.star_rating : 4)
  const handleClick = () => {
    navigate("/");
  }
const updateRecords=async ()=>{
  let valuePayload = {
    name_of_employee: data.empName,
    feedback_description: data.message,
    star_rating: rating,
    feedback_by: data.leadName
  }

  await axios.put(BaseUrl.BASE_URL + "api/new/FeedbackEditAndDelete/?id="+`${value?.state?.data?.id}`, valuePayload)
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
    <div className="add_form_main_div mt-5">
      <p className="Add_Form_title">{value?.state?.title}</p>
      <div className="row mt-3">
        <div className="col-md-6">
          <Input
            type="text"
            label="Employee Name"
            value={data.empName}
            onChange={handleChange}
            placeholder="Enter Name"
            name="empName"
            readOnly={value?.state?.view}
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
            readOnly={value?.state?.view}

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
            readOnly={value?.state?.view}
          />
        </div>
        <div className="col-md-6 d-flex">
          <p className="ms-1">Rating</p>
          <Rating name="size-large"
            onChange={handleChangeRating}
            defaultValue={4} size="large" className="starRating" value={rating} readOnly={value?.state?.view}/>
        </div>

      </div>
      <div className="Add_form_btn_div mt-5">
        <div className="addForm_btnsDiv">
          {value?.state?.add && <button className="save_btn_add" onClick={handleSave} >Submit</button>}
          {value?.state?.edit && <button className="save_btn_add" onClick={updateRecords} >Update</button>}
          <button className="cancel_btn_add ms-2" onClick={handleClick}>Cancel</button>
        </div>
      </div>

    </div>
   
    </>
  )
}
export default AddForm;