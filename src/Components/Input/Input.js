import React from "react";
import "./Input.css";

const Input=(props)=>{
    return(
        <div className="row">
            <label className="AddForm_label col-3 mt-2">{props.label}</label>
            <input type={props.type} className="AddUser_Input col-9" value={props.value} onChange={props.onChange} name={props.name}></input>
        </div>
    )
}
export default Input;