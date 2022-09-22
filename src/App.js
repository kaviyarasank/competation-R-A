import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddForm from './Components/Add';
import TableData from './Components/Table';
import "./App.css";

export default function App() {
  return (
<div>
<Routes>
      <Route path="/" element={<TableData/>}></Route>
      <Route path="/add-form" element={<AddForm/>}></Route>
    </Routes>
</div>
   
  );
}
