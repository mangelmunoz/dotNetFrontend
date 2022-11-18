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

    fetch("http://localhost:8080/api/Owner/add", requestOptionsPost)
      .then((response) => response.json())
      .then((result) => console.log(result), navigate("../home"))
      .catch((error) => console.log("error", error));
  };

  const handleFirstName = (event) => {
    setOwnerData({
      firstName: event.target.value,
      lastName: OwnerData.lastName,
      email: OwnerData.email,
      phoneNumber: OwnerData.phoneNumber,
    });
  };

  const handleLastName = (event) => {
    setOwnerData({
      firstName: OwnerData.firstName,
      lastName: event.target.value,
      email: OwnerData.email,
      phoneNumber: OwnerData.phoneNumber,
    });
  };

  const handleEmail = (event) => {
    setOwnerData({
      firstName: OwnerData.firstName,
      lastName: OwnerData.lastName,
      email: event.target.value,
      phoneNumber: OwnerData.phoneNumber,
    });
  };

  const handlePhoneNumber = (event) => {
    setOwnerData({
      firstName: OwnerData.firstName,
      lastName: OwnerData.lastName,
      email: OwnerData.email,
      phoneNumber: event.target.value,
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
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleEmail}
          />
          <label for="exampleInputPhone" class="form-label">
            Phone number
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPhone"
            onChange={handlePhoneNumber}
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
