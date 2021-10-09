import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import headerStyles from "./Header.module.css";
import logoEscrowX from "../../assets/logo.svg";

export const Header = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const {
		header,
		container,
		nav,
		navOpened,
		logo,
		navList,
		navItem,
		navBtn,
		navBtnOpened,
		activeNavLink,
	} = headerStyles;
	const handleNavbar = () => {
		setIsNavbarOpen((prevState) => !prevState);
	};
	return (
		<header className={header}>
			<div className={container}>
				<h1 className={logo}>
					<Link to="/">
						<img
							src={logoEscrowX}
							alt="EscrowX - Simple Contracts on Blockchain"
						/>
					</Link>
				</h1>
				<nav className={isNavbarOpen ? `${nav} ${navOpened}` : nav}>
					<ul className={navList}>
						<li className={navItem}>
							<a
								onClick={() => setIsNavbarOpen(false)}
								href="https://invis.io/GK10TG16NXD6"
								target="_blank"
								rel="noreferrer"
							>
								Demo
							</a>
						</li>
						<li className={navItem}>
							<a
								onClick={() => setIsNavbarOpen(false)}
								href="https://faq.escrowx.io/"
								target="_blank"
								rel="noreferrer"
							>
								FAQ
							</a>
						</li>
						<li className={navItem}>
							<NavLink
								activeClassName={activeNavLink}
								onClick={() => setIsNavbarOpen(false)}
								to="/about"
							>
								about us
							</NavLink>
						</li>
						<li className={navItem}>
							<NavLink
								activeClassName={activeNavLink}
								onClick={() => setIsNavbarOpen(false)}
								to="/white-paper"
							>
								white paper
							</NavLink>
						</li>
						<li className={navItem}>
							<NavLink
								activeClassName={activeNavLink}
								onClick={() => setIsNavbarOpen(false)}
								to="/token"
							>
								token
							</NavLink>
						</li>
						<li className={navItem}>
							<NavLink
								activeClassName={activeNavLink}
								onClick={() => setIsNavbarOpen(false)}
								to="/contact"
							>
								contact us
							</NavLink>
						</li>
					</ul>
				</nav>
				<button
					aria-label="navigation button"
					className={isNavbarOpen ? `${navBtn} ${navBtnOpened}` : navBtn}
					onClick={() => handleNavbar()}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	);
};
