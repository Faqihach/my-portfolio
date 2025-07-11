import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaMoon, FaSun } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import "./css/NavTop.css";

function NavTop() {
	const [toogleMenu, setToogleMenu] = useState(false);
	const { theme, toggleTheme } = useTheme();

	function toogleOpen() {
		setToogleMenu(true);
	}

	function toogleClose() {
		setToogleMenu(false);
	}

	if (toogleMenu) {
		return (
			<>
				<NavTop />
				<div className="menu">
					<Container fluid className="menu-close">
						<button className="toogle-menu ms-auto" onClick={toogleClose}>
							<GrClose />
						</button>
						<div className="menu-list">
							<NavLink to="/" onClick={toogleClose}>
								Home
							</NavLink>
							<NavLink to="/about" onClick={toogleClose}>
								About
							</NavLink>
							<NavLink to="/skills" onClick={toogleClose}>
								Skills
							</NavLink>
							<NavLink to="/projects" onClick={toogleClose}>
								Projects
							</NavLink>
							<NavLink to="/contact" onClick={toogleClose}>
								Contact
							</NavLink>
						</div>
					</Container>
				</div>
			</>
		);
	}

	return (
		<>
			<Navbar className="navtop py-3" expand="lg">
				<Container fluid className="px-4">
					<Navbar.Brand className="navtop-brand">
						<Link to="/">Fakih.</Link>
					</Navbar.Brand>
					<div className="d-flex align-items-center">
						<button
							className="theme-toggle me-3"
							onClick={toggleTheme}
							aria-label="Toggle theme"
						>
							{theme === "light" ? <FaMoon /> : <FaSun />}
						</button>
						<button className="toogle-menu" onClick={toogleOpen}>
							<FaAlignRight />
						</button>
					</div>
					<Nav className="navtop-list ms-auto">
						<div className="pe-3">
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Home
							</NavLink>
						</div>
						<div className="pe-3">
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								About
							</NavLink>
						</div>
						<div className="pe-3">
							<NavLink
								to="/skills"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Skills
							</NavLink>
						</div>
						<div className="pe-3">
							<NavLink
								to="/projects"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Projects
							</NavLink>
						</div>
						<div>
							<NavLink
								to="/contact"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Contact
							</NavLink>
						</div>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default NavTop;
