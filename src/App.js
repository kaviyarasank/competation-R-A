import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddForm from './Components/AddForm/Add';
import TableData from './Components/Table';
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  return (
<div>
<ToastContainer />
<Routes>
      <Route path="/" element={<TableData/>}></Route>
      <Route path="/add-form" element={<AddForm/>}></Route>
    </Routes>
</div>
   
  );
}
