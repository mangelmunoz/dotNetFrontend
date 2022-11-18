import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from 'react-router-dom';



function OwnerData(props){


    const navigate = useNavigate();
    
    const handleSeeVehicles = (event) => {

        navigate("../vehicles/" + props.object.id)

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
                        <button className='btn btn-success seeVehicles' type="button" onClick={handleSeeVehicles}>See vehicles</button>
                        
                    </div>
                    
                </div>
           </div>
        </>
    )
}

export default OwnerData;