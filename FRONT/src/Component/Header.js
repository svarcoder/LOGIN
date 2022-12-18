import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

const Header = () => {
	let match = useRouteMatch("/form");
	const history = useHistory();

	return (
		<>
			<div className='header'>
				<div className='header__body'>
					<div className='d-flex flex-row justify-content-center align-items-center headerColor'>
						<span className='logoo'>
							<i className='bi bi-house-door'></i>
						</span>
						<h4 className='m-0'>
							<strong>Roomsfy</strong>
						</h4>
					</div>
					<div className='vbgthsd'>
						{match && match.isExact === true ? (
							<button
								type='button'
								className='themeButton loginButton mr-4'
								onClick={() => history.goBack()}>
								<b>Back</b>
							</button>
						) : (
							""
						)}
						<button
							type='button'
							className='themeButton loginButton'
							onClick={() => history.push("/singUp")}>
							<b>Sign Up</b>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
