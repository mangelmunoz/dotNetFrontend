import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVehiclePage from "./pages/addOwnerPage";
import HomePage from "./pages/homePage";
import VehiclesPage from "./pages/vehiclesPage";

import './styles/App.css';

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddVehiclePage/> } />
          <Route path="/vehicles/:id" element={<VehiclesPage/> } />
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;