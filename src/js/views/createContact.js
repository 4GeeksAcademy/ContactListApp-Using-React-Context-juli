import React,{ useState, useContext, } from "react"; 
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const CreateContact = () => {
    const {actions, store} = useContext (Context)
    const [name,setName] = useState ("")
    const [phone,setPhone] = useState ("")
    const [email,setEmail] = useState ("")
    const [address,setAddress] = useState ("")
    const navigate = useNavigate ()

    const guardarContacto = async (e) => { 
        e.preventDefault()
        console.log(name,phone,email,address) 
        // saveContacts: async (name,phone,email,address) => {
        let resp = await actions.saveContacts (name,phone,email,address)
        console.log(resp)
        if (resp) {
            navigate("/")
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-sm" style={{ backgroundColor: "white", padding: "20px" }}>
                    <h2 className="mb-4">Create Contact</h2>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                        <input type="text" id="fullName" className="form-control" placeholder="Full Name" value = {name} onChange = {(e) => setName (e.target.value)}/>
                        <div className="form-text">We'll never share your name with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter Email" value = {email} onChange = {(e) => setEmail (e.target.value)}/>
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
            
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label fw-bold">Enter Phone</label>
                        <input type="tel" id="phone" className="form-control" placeholder="Enter Phone Number" value = {phone} onChange = {(e) => setPhone (e.target.value)}/>
                        <div className="form-text">We'll never share your phone number with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label fw-bold">Enter Address</label>
                        <input type="text" id="address" className="form-control" placeholder="Enter Address" value = {address} onChange = {(e) => setAddress (e.target.value)}/>
                        <div className="form-text">We'll never share your address with anyone else.</div>
                    </div>

                    <button onClick = {(e) => guardarContacto (e)} type="button" className="btn btn-primary"> Save </button>
                </div>
            </div>
        </>
    )
}
