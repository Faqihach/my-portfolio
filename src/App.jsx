import React from "react";
import { Route, Routes } from "react-router-dom";

import NavTop from "./partials/NavTop";
import NavBot from "./partials/NavBot";
import Footer from "./partials/Footer";
import SideVertical from "./partials/SideVertical";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

// import { useState } from "react";

function App() {
	return (
		<>
			<NavTop />
			<div className="d-flex">
				<SideVertical />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/skills" element={<Skills />}></Route>
					{/* <Route path="/projects" element={<Projects />}></Route> */}
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</div>
			<Footer />
			<NavBot />
		</>
	);
}

export default App;
