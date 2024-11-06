import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";

export const Home = () => {
	const { store } = useContext(Context);
	let img = [
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0X9fDYmRuzskCXY8rCFdw60-6q7PlihhQg&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0X9fDYmRuzskCXY8rCFdw60-6q7PlihhQg&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0X9fDYmRuzskCXY8rCFdw60-6q7PlihhQg&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0X9fDYmRuzskCXY8rCFdw60-6q7PlihhQg&s",
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
						/>
					</div>
				);
			})}
		</div>
	);
};
