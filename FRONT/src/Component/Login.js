import React, { useState } from "react";
import { useHistory } from "react-router";
import Instance from "../Instance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const history = useHistory();

	const [adminDetails, setAdminDetails] = useState({
		email: "",
		password: "",
		rememberMe: "",
	});

	const handelChange = (e) => {
		setAdminDetails({
			...adminDetails,
			[e.target.id]: e.target.value,
		});
	};

	const onLogIn = (e) => {
		e.preventDefault();
		Instance.post("/api-user-login", {
			email: adminDetails.email,
			password: adminDetails.password,
		})
			.then(({ data }) => {
				console.log("save", data);
				if (adminDetails?.rememberMe === "true") {
					localStorage.setItem("token$", data?.data?.token);
				} else {
					sessionStorage.setItem("token$", data?.data?.token);
				}

				history.push("/success");
				toast.success("Log In Successfully!");
			})
			.catch((err) => {
				console.log("Err", err?.response?.data);
				toast.error(err?.response?.data?.message);
			});
	};

	return (
		<>
			<div className='singUp'>
				<ToastContainer />
				<div className='container'>
					<h2 id='head'>
						<strong>Sign In to get Started</strong>
					</h2>
					<p id='subHead'>Enter your details below</p>
					<form className='singUP__Body'>
						<div className='form__group'>
							<label>Email Address</label>
							<input
								type='email'
								placeholder='Email'
								autoComplete='off'
								id='email'
								value={adminDetails.email}
								onChange={handelChange}
							/>
							<i className='bi bi-envelope icon'></i>
						</div>
						<div className='form__group'>
							<label>Password</label>
							<input
								type='password'
								placeholder='Password'
								autoComplete='off'
								id='password'
								value={adminDetails.password}
								onChange={handelChange}
							/>
							<i className='bi bi-lock icon'></i>
						</div>
						<div className='form__radio'>
							<input
								type='radio'
								className='inputSize'
								id='rememberMe'
								value='true'
								onChange={handelChange}
							/>
							<label>Remember me</label>
							<span>Recover Password</span>
						</div>

						<button className='homeButton' onClick={(e) => onLogIn(e)}>
							Sing In
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
