import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from 'react-router-dom';



function VehicleData(props){


    const navigate = useNavigate();
    
    const handleSeeVehicles = (event) => {

        navigate("../vehicles/" + props.object.id)

    }
    
    
    return (
        <>
           <div className="VehicleDetails card" id={props.object.id}>
                
                <div className='card-body VehicleDetailsCardBody'>
                    <div className="VehicleName">
                        <label>{props.object.brand }</label>
                    </div>
                    <div className="Vim">
                        <label>{props.object.vin}</label>
                    </div>
                    <div className="Color">
                        <label>{props.object.color}</label>
                    </div>
                    <div className="Year">
                        <label>{props.object.year}</label>
                    </div>
                    
                    <div className="buttonsDiv">
                        <button className='btn btn-success seeClaims' type="button" onClick={handleSeeVehicles}>See claims</button>
                        
                    </div>
                    
                </div>
           </div>
        </>
    )
}

export default VehicleData;