import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './pages/testPage.js';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TestPage/>}/>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);