import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddOwnerForm(props) {
  const [OwnerData, setOwnerData] = useState("");

  const navigate = useNavigate();

  const createNewUser = (event) => {
    event.preventDefault();

    setOwnerData({
      firstName: OwnerData.firstName,
      lastName: OwnerData.lastName,
      email: OwnerData.email,
      phoneNumber: OwnerData.phoneNumber,
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(OwnerData);

    let requestOptionsPost = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://localhost:7052/api/Owner", requestOptionsPost)
      .then((response) => response.json())
      .then((result) => console.log(result), navigate("../home"))
      .catch((error) => console.log("error", error));
  };

  const handleFirstName = (event) => {
    setOwnerData({
      firstName: event.target.value,
      lastName: OwnerData.lastName,
      driverLicense: OwnerData.driverLicense,
    });
  };

  const handleLastName = (event) => {
    setOwnerData({
      firstName: OwnerData.firstName,
      lastName: event.target.value,
      driverLicense: OwnerData.driverLicense,
    });
  };

  const handleDriverLicense = (event) => {
    setOwnerData({
      firstName: OwnerData.firstName,
      lastName: OwnerData.lastName,
      driverLicense: event.target.value,
    });
  };

  return (
    <div className="addOwnerDiv card">
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
        <button type="submit" class="btn btn-primary" onClick={createNewUser}>
          Create new Owner
        </button>
      </form>
        </div>
      
    </div>
  );
}

export default AddOwnerForm;
