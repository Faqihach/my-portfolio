import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import realProfile from "../assets/images/profile/profile1.webp";
import hoverProfile from "../assets/images/profile/profile2.webp";

import Hi from "../assets/images/Hi.gif";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./css/Home.css";

function Home() {
	function setAvatarReal() {
		setImage(hoverProfile);
	}

	function setAvatarAnimation() {
		setImage(realProfile);
	}
	const [image, setImage] = useState(realProfile);

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>Faqih - Home</title>
				</Helmet>
			</HelmetProvider>
			<Container fluid className="home-wrapper">
				<div className="home-left animate__animated animate__fadeInLeft">
					<h3>
						Hi there <img width="35" src={Hi} alt="Hi" />, my name is
					</h3>
					<h2>
						<span className="name-hover">Ahmad Fakih</span>
					</h2>
					<NavLink to="/contact" className="btn-download text-center">
						Let's Connect
					</NavLink>
				</div>
				<div className="home-right animate__animated animate__fadeIn animate__slower">
					<img
						className="home-image"
						src={image}
						onMouseOver={setAvatarReal}
						onMouseOut={setAvatarAnimation}
						alt="Avatar"
					/>
				</div>
			</Container>
		</>
	);
}

export default Home;
