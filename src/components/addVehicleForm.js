import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddVehicleForm(props) {
  
  const [VehicleData, setVehicleData] = useState("");

  const navigate = useNavigate();

  const createNewVehicle = (event) => {
    event.preventDefault();

    setVehicleData({
      firstName: VehicleData.firstName,
      lastName: VehicleData.lastName,
      email: VehicleData.email,
      phoneNumber: VehicleData.phoneNumber,
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
      .then((result) => console.log(result), navigate("../home"))
      .catch((error) => console.log("error", error));
  };

  const handleFirstName = (event) => {
    setVehicleData({
      firstName: event.target.value,
      lastName: VehicleData.lastName,
      driverLicense: VehicleData.driverLicense,
    });
  };

  const handleLastName = (event) => {
    setVehicleData({
      firstName: VehicleData.firstName,
      lastName: event.target.value,
      driverLicense: VehicleData.driverLicense,
    });
  };

  const handleDriverLicense = (event) => {
    setVehicleData({
      firstName: VehicleData.firstName,
      lastName: VehicleData.lastName,
      driverLicense: event.target.value,
    });
  };

  return (
    <div className="addVehicleDiv card">
        <div className="card-body">
        <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            onChange={handleFirstName}
          />
          <label for="exampleInputName1" class="form-label">
            Surname
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            onChange={handleLastName}
          />
          <label for="exampleInputEmail1" class="form-label">
            Driving License
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleDriverLicense}
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
