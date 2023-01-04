import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin1 from './portals/Admin_portal1'
import SamplePage from './portals/Sample_page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SamplePage />}></Route>
          {/* <Route path="Admin1" element={<Admin1 />}></Route> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
