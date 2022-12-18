import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import Context from "../Context/Context";
import { PROFILE_DETAILS } from "../Context/action.type";

const SingUp = () => {
	const history = useHistory();
	const { dispatchDetails } = useContext(Context);

	const [adminDetails, setAdminDetails] = useState({
		email: "",
	});

	const handelChange = (e) => {
		setAdminDetails({
			...adminDetails,
			[e.target.id]: e.target.value,
		});
	};

	const onSubmitSignIn = (Details) => {
		dispatchDetails({
			type: PROFILE_DETAILS,
			payload: { Details },
		});
		history.push(`/form`);
	};

	return (
		<>
			<div className='singUp'>
				<div className='container'>
					<h2 id='head'>
						<strong>Sign Up to get Started</strong>
					</h2>
					<p id='subHead'>Enter your details below</p>
					<form className='singUP__Body'>
						<div className='form__group'>
							<label>Email Address</label>
							<input
								type='email'
								autoComplete='off'
								id='email'
								placeholder='Enter your email'
								value={adminDetails.email}
								onChange={handelChange}
							/>
							<i className='bi bi-envelope icon'></i>
						</div>
						<button
							className='homeButton'
							onClick={() => onSubmitSignIn(adminDetails)}>
							Continue
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SingUp;
