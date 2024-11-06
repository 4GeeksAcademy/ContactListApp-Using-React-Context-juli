import React, { useState, useContext, useEffect, } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const EditContact = ({ id, nombre, telefono, direccion, correo }) => {
    const { actions, store } = useContext(Context)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()

    const editContacts = async (e) => {
        e.preventDefault()
        console.log(name, phone, email, address)
        // saveContacts: async (name,phone,email,address) => {
        let resp = await actions.editContacts(name, phone, email, address, id)
        console.log(resp)
        if (resp) {
            navigate("/")
        }
    }

    console.log(nombre, telefono, direccion, correo)
    return (
        <>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>    
                        </div>
                        <div className="modal-body">
                            <div className="container mt-5">
                                <div className="card shadow-sm" style={{ backgroundColor: "white", padding: "20px" }}>

                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                                        <input type="text" id="fullName" className="form-control" placeholder="Full Name" defaultValue={nombre} onChange={(e) => setName(e.target.value)} />
                                        <div className="form-text">We'll never share your name with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Enter Email" defaultValue={correo} onChange={(e) => setEmail(e.target.value)} />
                                        <div className="form-text">We'll never share your email with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label fw-bold">Enter Phone</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="Enter Phone Number" defaultValue={telefono} onChange={(e) => setPhone(e.target.value)} />
                                        <div className="form-text">We'll never share your phone number with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label fw-bold">Enter Address</label>
                                        <input type="text" id="address" className="form-control" placeholder="Enter Address" defaultValue={direccion} onChange={(e) => setAddress(e.target.value)} />
                                        <div className="form-text">We'll never share your address with anyone else.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick = {(e) => editContacts(e)}>Edit</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
