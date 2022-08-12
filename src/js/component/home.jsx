import React from "react";

import Container from './Container.jsx'

//create your first component
const Home = () => {



	return (
		<div className="text-center ">
			<p className="display-1">Bienvenido</p>
			<p className="display-4">Este es un to-do list</p>
			<p className="display-6">Agrega tus pendientes abajo</p>
		<div className="text-center" >
			<Container />
			<p>Una vez cumplidos tus pendientes, marcalos y dale al botón <b className="text-success">"cumplidos"</b></p>
		</div>
		</div>
	);
};

export default Home;
