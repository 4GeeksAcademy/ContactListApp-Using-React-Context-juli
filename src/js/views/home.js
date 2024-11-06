import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";
import { EditContact } from "../component/editContacts.js";

export const Home = () => {
	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined, 
		name: undefined,
		phone: undefined,
		email: undefined,
		address: undefined
	})
	const { store } = useContext(Context);
	let img = [
		"https://avatarfiles.alphacoders.com/367/367860.png",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0X9fDYmRuzskCXY8rCFdw60-6q7PlihhQg&s",
		"https://i.pinimg.com/736x/92/35/a8/9235a8e9963bbe3c72afbc8390da88bd.jpg",
		"https://i.pinimg.com/originals/0f/85/0d/0f850d5c5c1b84cc32ebc81dbed7b34d.jpg",
	]
	return (
		<div className="d-flex flex-column align-items-center mt-5">
			{store.contacts.map((item, index) => {
				return (
					<div key={index} className="w-75 mb-3">
						< ContactCard
							id={item.id}
							name={item.name}
							image={img[index]}
							phone={item.phone}
							email={item.email}
							address={item.address}
							// abre el modal para editar
							edit={() => setEdit({ showModal: true,
								id: item.id, 
								name: item.name,
								address: item.address,
								email: item.email,
								phone: item.phone
							 })}
						/>
					</div>
				);
			})}
			<EditContact 
			id = {edit.id}
			telefono = {edit.phone}
			direccion = {edit.address}
			correo = {edit.email}
			nombre = {edit.name}
			show = {edit.showModal} 
			onClose = {() => setEdit({ showModal: false })}
			/>
		</div>
	);
};
