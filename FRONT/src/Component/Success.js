import React from "react";

const Success = () => {
	return (
		<>
			<div className='singUp'>
				<div className='container'>
					<h2 id='head2'>
						<i className='bi bi-check-circle-fill'></i>
					</h2>

					<form className='singUP__Body'>
						<h2 id='head'>
							<strong>Thank You</strong>
						</h2>
						<label className='mnt'>We sent an email to catherine.sa</label>

						<button className='homeButton'>Open Email App & Continue</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Success;
