import React from "react";
import "./css/Preloader.css";

const Preloader = () => {
	return (
		<div className="preloader">
			<div className="preloader-content">
				<div className="logo-container">
					<div className="animated-logo">
						<span className="letter">F</span>
						<span className="letter">A</span>
						<span className="letter">K</span>
						<span className="letter">I</span>
						<span className="letter">H</span>
						<span className="letter">•</span>
						<span className="letter">A</span>
						<span className="letter">C</span>
						<span className="letter">H</span>
					</div>
				</div>
				<div className="loading-bar">
					<div className="loading-progress"></div>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
