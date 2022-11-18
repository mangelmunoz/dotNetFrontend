import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import VehicleData from './VehicleData'


function VehicleList(props) {

    const [Vehicles, setVehicles] = useState([]);

    const navigate = useNavigate();
    let {id} = useParams();


    const handleAddVehicle = (event) => {

        event.preventDefault();

        navigate('../vehicles/add/' + id);
            
    }

    useEffect(() => {
    
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let string = "https://localhost:7052/api/Vehicle";
        fetch(string, requestOptions)
        .then(response => {
            return response.json();
        } )
        .then( (response) => {

            let VehiclesArray =  [];

            response.forEach(element => {
                VehiclesArray.push(element);
            });
            
            setVehicles(VehiclesArray);
            
        } ).catch(error => console.log('error', error));

    }, [])


    return (

        <div className="row justify-content-center VehicleListDiv">
            <div className="card col-6">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5">
                            <label>List of Vehicles</label>
                        </div>
                        <div className="offset-2 col-5 topButtons">
                        <button className='btn btn-primary addVehicleButton' type="button" onClick={handleAddVehicle}>Add new Vehicle</button>
                    </div>
                    </div>
                    <div>
                       
                        {
                            Vehicles.map(
                                (Vehicle, key) => (<VehicleData object={Vehicle} key={key}></VehicleData>)
                            )
                        }     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleList;