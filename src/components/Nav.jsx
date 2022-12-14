import React from "react";
import Logo from "../images/logo.svg";
import styled from "styled-components";

const Nav = () => {
	return (
		<Menu>
			<li>
				<img src={Logo} alt='Logo' />
			</li>
			<li>
				<a href=''>Home</a>
			</li>
			<li>
				<a href=''>Feed</a>
			</li>
			<li>
				<a href=''>Login</a>
			</li>
			<li>
				<button>Sign Up</button>
			</li>
		</Menu>
	);
};

const Menu = styled.ul`
	position: absolute;
	top: 30px;
	display: flex;
	gap: 30px;
	align-items: center;
	padding: 0 30px 0 100px;
	pointer-events: auto;

	li {
		list-style: none;
		margin: 0;

		a {
			text-decoration: none;
			color: white;
			padding: 8px 20px;
			border-radius: 14px;
			border: 1px solid rgba(255, 255, 255, 0);
			transition: 1s;

			:hover {
				border: 1px solid rgba(255, 255, 255, 0.2);
			}
		}
	}

	button {
		background: rgba(0, 0, 0, 0.2);
		border: 0px;
		font-size: 16px;
		padding: 12px 30px;
		border-radius: 14px;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.1);
		max-width: 280px;
		backdrop-filter: blur(20px);
		font-weight: 600;
		box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
		transition: 1s;
		cursor: pointer;
		pointer-events: auto;

		display: flex;
		gap: 12px;
		justify-content: center;
		align-items: center;

		:hover {
			border: 1px solid rgba(255, 255, 255, 0.8);
			transform: translateY(-3px);
		}
	}

	@media (max-width: 800px) {
		justify-content: space-between;
		li:nth-child(2),
		li:nth-child(3),
		li:nth-child(4),
		li:nth-child(5) {
			display: none;
		}
	}
`;

export default Nav;
