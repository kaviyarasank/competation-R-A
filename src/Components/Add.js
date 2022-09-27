import React, { useEffect, useState, useRef } from "react";
import "./AddForm.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Rating from '@mui/material/Rating';


export default function AddForm() {
 const navigate = useNavigate();

const handleClick=()=>{
navigate("/");
}

const handleSave=()=>{

}
  return (
    <div>
      <h1 className="Add_app_text">Add Appriciation</h1>
              <div className="row add_form_div_pad">
                  <div className="col-6">
                      <div>
                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">
                                    Lead Name
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    className="stud__name stud ml-3"
                                    name="username"
                                    variant="outlined"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group studName_create_stud student_id_wrapper student_id_label_center_wrapper">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">
                                    Lead Gender
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="student_id"
                                    className="studId"
                                    type="text"
                                    name="student_unique_id"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">Lead Email</label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="email"
                                    className="studEmail"
                                    type="text"
                                    name="email"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">Lead Mobile</label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="mobile"
                                    className="studEmail"
                                    name="phone_number"
                                    type="number"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">Message</label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="mobile"
                                    className="studEmail"
                                    name="phone_number"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>

                  <div className="col-6">
                      <div>
                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">
                                    Employee Name
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    className="stud__name stud ml-3"
                                    name="username"
                                    variant="outlined"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group studName_create_stud student_id_wrapper student_id_label_center_wrapper">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">
                                    Employee Gender
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="student_id"
                                    className="studId"
                                    type="text"
                                    name="student_unique_id"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">Employee Email</label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="email"
                                    className="studEmail"
                                    type="text"
                                    name="email"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">Employee Mobile</label>
                                </div>
                                <div className="col-md-8">
                                  <TextField
                                    id="mobile"
                                    className="studEmail"
                                    name="phone_number"
                                    type="number"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group studName_create_stud">
                              <div className="row">
                                <div className="col-md-4">
                                  <label className="studLabel">Start Rating</label>
                                </div>
                                <div className="col-md-8">
                                <Rating name="size-large" defaultValue={4} size="large" />
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>
              </div>
                            <div className="addForm_btnsDiv">
                              <button className="save_btn_add" onClick={handleSave}>Submit</button>
                              <button className="cancel_btn_add ms-2" onClick={handleClick}>cancel</button>
                            </div>
    </div>
  );
}
