import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudentForm(props) {

    const [studentData, setStudentData] = useState({});

    const navigate = useNavigate();

    let {id} = useParams();

    const updateStudent = (event) => {

        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(studentData);

        let requestOptionsPost = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        };

        fetch("http://localhost:8080/api/student/update", requestOptionsPost)
        .then((response) => response.json())
        .then(() => navigate("../home"))
        .catch((error) => console.log("error", error));

    }
  

    useEffect(() => {
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptionsPost = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        };

        fetch("http://localhost:8080/api/student/get/" + id, requestOptionsPost)
        .then((response) => response.json())
        .then((result) => {setStudentData(result)})
        .catch((error) => console.log("error", error));
    
    }, [])

    const handleFirstName = (event) => {
        setStudentData({
        firstName: event.target.value,
        lastName: studentData.lastName,
        email: studentData.email,
        phoneNumber: studentData.phoneNumber,
        });
    };

    const handleLastName = (event) => {
        setStudentData({
            id: studentData.id,
            firstName: studentData.firstName,
            lastName: event.target.value,
            email: studentData.email,
            phoneNumber: studentData.phoneNumber,
        });
    };

    const handleEmail = (event) => {
        setStudentData({
            id: studentData.id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: event.target.value,
            phoneNumber: studentData.phoneNumber,
        });
    };

    const handlePhoneNumber = (event) => {
        setStudentData({
            id: studentData.id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: studentData.email,
            phoneNumber: event.target.value,
        });
    }

  return (
    <div className="updateStudentDiv card">
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
                    value={studentData.firstName}
                />
                <label for="exampleInputName1" class="form-label">
                    Surname
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputName1"
                    onChange={handleLastName}
                    value={studentData.lastName}

                />
                <label for="exampleInputEmail1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    onChange={handleEmail}
                    value={studentData.email}
                />
                <label for="exampleInputPhone" class="form-label">
                    Phone number
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputPhone"
                    onChange={handlePhoneNumber}
                    value={studentData.phoneNumber}

                />
                </div>
                <button type="submit" class="btn btn-primary" onClick={updateStudent}>
                Update student data
                </button>
            </form>
        </div>
    </div>
  );
}

export default UpdateStudentForm;
