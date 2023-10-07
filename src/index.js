import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeStyle from './home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FacilitiesStyle from './facilities/facilities';
import RoomsStyle from './rooms/rooms';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HomeStyle/>

      <Routes>
        <Route path="/HomeStyle" element={<HomeStyle/>}/>
        <Route path="/FacilitiesStyle" element={<FacilitiesStyle/>}/>
        <Route path='/RooomsStyle' element={<RoomsStyle/>}/>
      </Routes>
  </BrowserRouter>
);
