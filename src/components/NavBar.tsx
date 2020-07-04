import React from "react";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<div className="bg-gray-300 flex justify-center items-center border-b-4 border-reactblue">
				<Link to="/">
					<img src={logo} className="w-32" alt="logo" />
				</Link>
				<p className="text-2xl text-blue-900">React ToDo</p>
				<Link to="/login">
					<h1>Login</h1>
				</Link>
			</div>
		</div>
	);
}
