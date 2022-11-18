import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddVehicleForm(props) {

  const [VehicleData, setVehicleData] = useState("");

  const navigate = useNavigate();

  let {id} = useParams();

  const createNewVehicle = (event) => {
    event.preventDefault();

    setVehicleData({
      brand: VehicleData.brand,
      vin: VehicleData.vin,
      color: VehicleData.color,
      year: parseInt(VehicleData.year),
      owner_id: parseInt(id),
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(VehicleData);

    let requestOptionsPost = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://localhost:7052/api/Vehicle", requestOptionsPost)
      .then((response) => response.json())
      .then((result) => console.log(result), navigate("../vehicles/" + id))
      .catch((error) => console.log("error", error));
  };

  const handleBrand = (event) => {
    setVehicleData({
      brand: event.target.value,
      vin: VehicleData.lastName,
      color: VehicleData.color,
      year: parseInt(VehicleData.year),
      owner_id: parseInt(id),
    });
  };

  const handleVin = (event) => {
    setVehicleData({

      brand: VehicleData.brand,
      vin: event.target.value,
      color: VehicleData.color,
      year: parseInt(VehicleData.year),
      owner_id: parseInt(id),
      
    });
  };

  const handleColor = (event) => {
    setVehicleData({

      brand: VehicleData.brand,
      vin: VehicleData.vin,
      color: event.target.value,
      year: parseInt(VehicleData.year),
      owner_id: parseInt(id),

    });
  };

  const handleYear = (event) => {
    setVehicleData({

      brand: VehicleData.brand,
      vin: VehicleData.vin,
      color: VehicleData.color,
      year: parseInt(event.target.value),
      owner_id: parseInt(id),

    });
  };

  

  return (
    <div className="addVehicleDiv card">
        <div className="card-body">
        <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Brand
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            onChange={handleBrand}
          />
          <label for="exampleInputName1" class="form-label">
            Vin
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            onChange={handleVin}
          />
          <label for="exampleInputEmail1" class="form-label">
           Color
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleColor}
          />
          <label for="exampleInputEmail1" class="form-label">
           Year
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleYear}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={createNewVehicle}>
          Create new Vehicle
        </button>
      </form>
        </div>
      
    </div>
  );
}

export default AddVehicleForm;
