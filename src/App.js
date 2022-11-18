import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddOwnerPage from "./pages/addOwnerPage";
import HomePage from "./pages/homePage";
import VehiclesPage from "./pages/vehiclesPage";
import AddVehiclePage from "./pages/addVehiclePage";

import './styles/App.css';

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddOwnerPage/> } />
          <Route path="/vehicles/:id" element={<VehiclesPage/> } />
          <Route path="/vehicles/add/:id" element={<AddVehiclePage/> } />
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;