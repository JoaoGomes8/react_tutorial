import React from "react";

export default function User({usuario}) {
    return(
        <>
            
            <p className="user-container">Nome: <strong>{usuario.firstName} {usuario.lastName}</strong></p>
            
        </>
    )
}