import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import Context from "../Context/Context";
import Instance from "../Instance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingUpForm = () => {
	const { details } = useContext(Context);

	const history = useHistory();

	const [adminDetails, setAdminDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		termCondition: "",
	});

	useEffect(() => {
		if (!details) return;
		setAdminDetails({
			email: details?.Details?.email,
		});
	}, [details]);

	const handelChange = (e) => {
		setAdminDetails({
			...adminDetails,
			[e.target.id]: e.target.value,
		});
	};

	const onSubmitSignIn = (e) => {
		e.preventDefault();
		Instance.post("/api-user-singup", {
			firstName: adminDetails.firstName,
			lastName: adminDetails.lastName,
			email: adminDetails.email,
			password: adminDetails.password,
			confirmPassword: adminDetails.confirmPassword,
			termCondition: adminDetails.termCondition === "true" ? true : false,
		})
			.then(({ data }) => {
				console.log("save", data);
				history.push("/success");
				toast.success("Wow so easy!");
			})
			.catch((err) => {
				// console.log("Err", err?.response?.data?.messege[0]);
				if (err?.response?.data?.messege.length > 0) {
					toast.error(err?.response?.data?.messege[0]?.msg);
				} else {
					toast.error(err?.response?.data?.messege);
				}
			});
	};

	if (details == null) {
		return <Redirect to='/singUp' />;
	}

	return (
		<>
			<div className='singUp'>
				<ToastContainer />
				<div className='container'>
					<h2 id='head'>
						<strong>Tell us about your self</strong>
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
						<div className='form__bundle'>
							<div className='form__group animated mr-2'>
								<input
									type='text'
									placeholder='First Name'
									autoComplete='off'
									id='firstName'
									value={adminDetails.firstName}
									onChange={handelChange}
								/>
								<label>First Name</label>
								<i className='bi bi-person icon'></i>
							</div>
							<div className='form__group animated'>
								<input
									type='text'
									placeholder='Last Name'
									autoComplete='off'
									id='lastName'
									value={adminDetails.lastName}
									onChange={handelChange}
								/>
								<label>Last Name</label>
								<i className='bi bi-person icon'></i>
							</div>
						</div>
						<div className='form__group animated'>
							<input
								type='password'
								placeholder='Password'
								autoComplete='off'
								id='password'
								value={adminDetails.password}
								onChange={handelChange}
							/>
							<label>Password</label>
							<i className='bi bi-lock icon'></i>
						</div>
						<div className='form__group animated'>
							<input
								type='password'
								placeholder='Confirm Password'
								autoComplete='off'
								id='confirmPassword'
								value={adminDetails.confirmPassword}
								onChange={handelChange}
							/>
							<label>Confirm Password</label>
							<i className='bi bi-check-circle icon'></i>
						</div>
						<div className='form__radio'>
							<input
								type='radio'
								id='termCondition'
								value='true'
								onChange={handelChange}
							/>
							<label>I agree with terms & condition</label>
						</div>
						<button className='homeButton' onClick={(e) => onSubmitSignIn(e)}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SingUpForm;
