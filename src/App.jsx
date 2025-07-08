import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import NavTop from "./partials/NavTop";
import NavBot from "./partials/NavBot";
import Footer from "./partials/Footer";
import Projects from "./components/Projects";
import SideVertical from "./partials/SideVertical";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<>
			<NavTop />
			<div className="d-flex">
				<SideVertical />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/skills" element={<Skills />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</div>
			<Footer />
			<NavBot />
		</>
	);
}

export default App;
