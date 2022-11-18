import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from 'react-router-dom';



function OwnerData(props){


    const navigate = useNavigate();
    
    const handleDeleteOwner = (event) => {

        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptionsPost = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
        };

        console.log(props.object.id)
        fetch("http://localhost:8080/api/Owner/delete/" + props.object.id, requestOptionsPost)
        .then((response) => response.json())
        .then(() => navigate("../home"))
        .catch((error) => console.log("error", error));

    }


    const handleUpdateOwner = (event) => {

        event.preventDefault();

        navigate('../update/' + props.object.id);
            
    }

    
    
    return (
        <>
           <div className="OwnerDetails card" id={props.object.id}>
                
                <div className='card-body OwnerDetailsCardBody'>
                    <div className="OwnerName">
                        <label>{props.object.firstName + " " + props.object.lastName}</label>
                    </div>
                    <div className="phoneNumber">
                        <label>{props.object.driverLicense}</label>
                    </div>
                    
                    <div className="buttonsDiv">
                        <button className='btn btn-success seeVehicles' type="button" onClick={handleDeleteOwner}>See vehicles</button>
                        
                    </div>
                    
                </div>
           </div>
        </>
    )
}

export default OwnerData;