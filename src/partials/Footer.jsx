import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./css/Footer.css";

function Footer() {
	return (
		<>
			<footer className="px-4">
				<div className="foot-left d-flex">
					<p>Ahmad Fakih &copy; 2025</p>
				</div>
				<div className="foot-right d-flex">
					<a
						href="https://github.com/Faqihach"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillGithub className="foot-icon" />
						&nbsp;&nbsp;GitHub
					</a>
					<a
						href="https://linkedin.com/in/ahmad-fakih-792971372"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin className="foot-icon" />
						&nbsp;&nbsp;Linkedin
					</a>
					<a
						href="https://www.instagram.com/faqihachh/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillInstagram className="foot-icon" />
						&nbsp;&nbsp;Instagram
					</a>
				</div>
			</footer>
		</>
	);
}

export default Footer;
