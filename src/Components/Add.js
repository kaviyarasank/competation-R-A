import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const handleClick=()=>{
}
const onReset = () => {
    form.resetFields();
    navigate("/")
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Lead Name"
        label="Lead Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Employee Name"
        label="Employee Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddForm;



// import React, { useEffect, useState, useRef } from "react";
// import "./AddForm.css";
// import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";


// export default function AddForm() {
 

//   return (
//     <div>
//               <div className="row">
//                   <div className="col-6">
//                       <div style={{ margin: "50px 36px" }}>
//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">
//                                     Lead Name
//                                   </label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     className="stud__name stud ml-3"
//                                     name="username"
//                                     variant="outlined"
//                                     type="text"
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="form-group studName_create_stud student_id_wrapper student_id_label_center_wrapper">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">
//                                     Lead Gender
//                                   </label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="student_id"
//                                     className="studId"
//                                     type="text"
//                                     name="student_unique_id"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">Lead Email</label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="email"
//                                     className="studEmail"
//                                     type="text"
//                                     name="email"
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">Lead Mobile</label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="mobile"
//                                     className="studEmail"
//                                     name="phone_number"
//                                     type="number"
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">Message</label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="mobile"
//                                     className="studEmail"
//                                     name="phone_number"
//                                     type="text"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                       </div>
//                   </div>

//                   <div className="col-6">
//                       <div style={{ margin: "50px 36px" }}>
//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">
//                                     Employee Name
//                                   </label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     className="stud__name stud ml-3"
//                                     name="username"
//                                     variant="outlined"
//                                     type="text"
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="form-group studName_create_stud student_id_wrapper student_id_label_center_wrapper">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">
//                                     Employee Gender
//                                   </label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="student_id"
//                                     className="studId"
//                                     type="text"
//                                     name="student_unique_id"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">Employee Email</label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="email"
//                                     className="studEmail"
//                                     type="text"
//                                     name="email"
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">Employee Mobile</label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="mobile"
//                                     className="studEmail"
//                                     name="phone_number"
//                                     type="number"
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="form-group studName_create_stud">
//                               <div className="row">
//                                 <div className="col-md-4">
//                                   <label className="studLabel">Start Rating</label>
//                                 </div>
//                                 <div className="col-md-8">
//                                   <TextField
//                                     id="mobile"
//                                     className="studEmail"
//                                     name="phone_number"
//                                     type="number"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                       </div>
//                   </div>
//               </div>
//     </div>
//   );
// }
