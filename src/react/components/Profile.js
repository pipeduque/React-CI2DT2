import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {

    const {id} = useParams();

    return(
        <>
            
            <h1>1</h1>
            User <h1> {id}</h1>
        </>
    );
}