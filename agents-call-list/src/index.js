import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import FilterCalls from './Components/FilterCalls/FilterCalls';
import Labels from './Components/labels/Labels';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="calls" element={<FilterCalls />} />
      <Route path="labels" element={<Labels />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

