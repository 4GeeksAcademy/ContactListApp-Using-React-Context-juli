import React from "react";

export const ContactCard = ({ id, name, image, email, phone, address }) => {

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
                                <i className="fa fa-pen mx-2 fs-4"></i>
                                <i className="fa fa-trash fs-4 text-danger"></i>
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


