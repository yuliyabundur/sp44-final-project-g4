import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
// import { Navbar } from "../component/Navbar.jsx"
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";
// import { Footer } from '../component/footer/Footer.jsx'



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>
				Spain 44 final project
			</h1>

			{/*Navbar */}

			{/*Jumbotron */}
			<Jumbotron />

			{/*END of Navbar */}

			{/*Jumbotron */}

			{/*Select Professional*/}

			{/*Footer*/}
			{/* <Footer /> */}
		</>
	);
};