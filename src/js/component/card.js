import React, { useContext }from "react";
import { Context } from "../store/appContext"

export const ContactCard = ({ id, name, image, email, phone, address, edit }) => {
const {actions} = useContext(Context)

    return (
        <div className="card mb-3" style={{ maxWidth: "1000px", minHeight: "150px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-circle p-2" alt={name} style={{
                        width: "195px",
                        height: "195px",
                    }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{name}</h5>
                            <div className="d-flex">
                                <button type="button" onClick={() => edit()} className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#editModal">
                                <i className="fa fa-pen mx-2 fs-4"></i>
                                </button>


                                <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa fa-trash fs-4 text-danger"></i>
                                </button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Borrar contacto</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ? desea borrar a {name}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" onClick = {() => actions.deleteContacts(id)} className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card-text"> <i className="fa fa-phone"> </i> Phone Number: {phone}</p>
                        <p className="card-text"> <i className="fa fa-envelope"></i> Email: {email}</p>
                        <p className="card-text"> <i className="fa fa-map-pin"></i> Address: {address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


