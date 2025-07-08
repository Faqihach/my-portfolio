import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "devicon/devicon.min.css";
import "animate.css";
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<StrictMode>
			<App />
		</StrictMode>
	</BrowserRouter>
);
