import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteBadge } from './FavoriteBadge.jsx';

export const UnsignedProfessionalCard = ( { unsignedProfessionals } ) => {
    const [ userId, setUserId ] = useState( localStorage.getItem( "id" ) );
    return (
        <>
            <ul className="d-flex flex-wrap flex-column">
                { unsignedProfessionals !== null && unsignedProfessionals.map( ( professional ) => (
                    <li key={ professional.id } className="mb-4">

                        <div className="card overflow-hidden  w-100">

                            <div className="card-body p-0 text-center project-light">

                                <a href="#!.html" className="avatar xl rounded-circle bg-gray bg-opacity-10 p-1 position-relative mt-n5 d-block mx-auto">
                                    <img src="https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" className="avatar-img img-fluid rounded-circle" alt="" style={ { width: "10rem" } } />
                                </a>
                                <h5 className="mb-3 pt-3">
                                    <a href="#!.html" className="text-reset">{ professional.title } </a>
                                </h5>
                                { localStorage.getItem( "email" ) &&
                                    <FavoriteBadge
                                        userId={ userId }
                                        professionalId={ professional.id }
                                        type={ localStorage.getItem( "professionalType" ) }
                                    /> }

                                <div className="row mx-0 border-top border-bottom">
                                    <div className="col-12 text-center border-end py-3">
                                        {/* <h5 className="mb-0">2345</h5> */ }
                                        <small className="text-muted">{ professional.address }</small>
                                    </div>

                                </div>
                                <ul className="list-group list-group-flush d-flex text-center ">

                                    { localStorage.getItem( "email" ) && <ul>
                                        <li className="list-group-item px-3 d-flex justify-content-center project-blue ">
                                            <div className="me-2">
                                                <h6 className="text-white">Phone Number:</h6>
                                            </div>
                                            <div>
                                                <h6 className="">{ professional.phoneNumber }</h6>
                                            </div>
                                        </li>
                                        <li className="list-group-item px-3 d-flex justify-content-center">
                                            <div className="me-2">
                                                <h6 className="text-muted">Website:</h6>
                                            </div>
                                            <div>
                                                <h6 className="">{ professional.website }</h6>
                                            </div>
                                        </li>
                                        <li className="list-group-item px-3 d-flex justify-content-center project-blue">
                                            <div className="me-2">
                                                <h6 className="text-white">Contact:</h6>
                                            </div>
                                            <div>
                                                <h6 className="">{ professional.phone_number }</h6>
                                            </div>

                                        </li>
                                        <li className="list-group-item px-3 d-flex justify-content-center ">
                                            <div className="me-2">
                                                <h6 className="text-muted">Email:</h6>
                                            </div>
                                            <div>
                                                <h6 className="">{ professional.email }</h6>
                                            </div>

                                        </li>
                                    </ul> }
                                    { !localStorage.getItem( "email" ) && <Link to="/login" class="btn btn-outline-primary project-blue text-white">SignIn To See Contact</Link>
                                    }

                                </ul>
                            </div>
                        </div>

                    </li>
                ) ) }
            </ul>
        </>
    );
};
