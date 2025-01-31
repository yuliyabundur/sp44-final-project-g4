import React, { useEffect, useState } from 'react';
import { SignUpComponent } from '../component/signIn/SignUpComponent.jsx';
import { EditProfessionalForm } from "../component/forms/EditProfessionalForm.jsx";
import { EditUserForm } from "../component/forms/EditUserForm.jsx";
export const EditProfile = () => {
    const [ logOption, setLogOption ] = useState( localStorage.getItem( "type" ) );
    console.log( logOption );

    useEffect( () => {
        setLogOption( localStorage.getItem( "type" ) );
    }, [ logOption ] );

    return (
        <>
            <div className="container text-center">
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={ () => setLogOption( 'user' ) }>As User</button>
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={ () => setLogOption( 'professional' ) } >As Professional</button>
            </div>
            { logOption !== 'user' && <EditProfessionalForm /> }
            { logOption === 'user' && <EditUserForm /> }

        </>
    );
};
