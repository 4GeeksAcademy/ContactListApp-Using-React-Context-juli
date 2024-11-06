const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// funcion para importar mis contactos
			getContacts: async () => {
				const resp = await fetch(process.env.BACKEND_URL + "agendas/juliju");
				const data = await resp.json()
				console.log(data);
				setStore({ contacts: data.contacts })
			},
			saveContacts: async (name,phone,email,address) => {
				try {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/juliju/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address,
						})
					})
					if (resp.status==201) {
						await getActions ().getContacts() 
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			}
		}
	};
};

export default getState;
