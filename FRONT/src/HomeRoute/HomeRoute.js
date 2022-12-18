import React from "react";
import { Route, Switch } from "react-router";
import Header from "../Component/Header";
import Login from "../Component/Login";
import SingUp from "../Component/SingUp";
import SingUpForm from "../Component/SingUpForm";
import Success from "../Component/Success";

const HomeRoute = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Login}></Route>
				<Route exact path='/form' component={SingUpForm}></Route>
				<Route exact path='/singUp' component={SingUp}></Route>
				<Route exact path='/success' component={Success}></Route>
			</Switch>
		</>
	);
};

export default HomeRoute;
