import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OwnerData from './OwnerData'


function OwnerList(props) {

    const [Owners, setOwners] = useState([]);

    const navigate = useNavigate();


    const handleAddOwner = (event) => {

        event.preventDefault();

        navigate('../add');
            
    }

    useEffect(() => {
    
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let string = "https://localhost:7052/api/Owner";
        fetch(string, requestOptions)
        .then(response => {
            return response.json();
        } )
        .then( (response) => {

            let OwnersArray =  [];

            response.forEach(element => {
                OwnersArray.push(element);
            });
            
            setOwners(OwnersArray);
            
        } ).catch(error => console.log('error', error));

    }, [])


    return (

        <div className="row justify-content-center OwnerListDiv">
            <div className="card col-6">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5">
                            <label>List of Owners</label>
                        </div>
                        <div className="offset-2 col-5 topButtons">
                        <button className='btn btn-primary addOwnerButton' type="button" onClick={handleAddOwner}>Add new Owner</button>
                    </div>
                    </div>
                    <div>
                       
                        {
                            Owners.map(
                                (Owner, key) => (<OwnerData object={Owner} key={key}></OwnerData>)
                            )
                        }     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnerList;