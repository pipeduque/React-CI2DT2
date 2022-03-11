import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { bindId } from "../../keys";

export default function Profile() {

    const { id } = useParams();

    return (
        <>
            <h1>Profile</h1>
            User <h1> {id}</h1>
        </>
    );
}