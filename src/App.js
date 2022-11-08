import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddForm from './Components/AddForm/Add';
import TableData from './Components/Table/Table';
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Components/Header/Header';

export default function App() {
  return (
<div>
<ToastContainer />
<Header/>
<Routes>
      <Route path="/" element={<TableData/>}></Route>
      <Route path="/add-form" element={<AddForm/>}></Route>
      <Route path="/view-form" element={<AddForm/>}></Route>
      <Route path="/edit-form" element={<AddForm/>}></Route>

    </Routes>
</div>
   
  );
}
