import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './pages/testPage.js';
import QuestionPage from './pages/questionPage.js';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TestPage/>}/>
      <Route path="/question" element={<QuestionPage/>}/>


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);