import React, { useState } from "react";
import headerStyles from "./Header.module.css";
import logoEscrowX from "../../assets/logo.svg";

function Header() {
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
	} = headerStyles;
	const handleNavbar = () => {
		setIsNavbarOpen((prevState) => !prevState);
	};
	return (
		<header className={header}>
			<div className={container}>
				<h1 className={logo}>
					<a href="#">
						<img src={logoEscrowX} alt="" />
					</a>
				</h1>
				<nav className={isNavbarOpen ? `${nav} ${navOpened}` : nav}>
					<ul className={navList}>
						<li className={navItem}>
							<a href="#">FAQ</a>
						</li>
						<li className={navItem}>
							<a href="#">about us</a>
						</li>
						<li className={navItem}>
							<a href="#">white paper</a>
						</li>
						<li className={navItem}>
							<a href="#">token</a>
						</li>
						<li className={navItem}>
							<a href="#">contact us</a>
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
}

export default Header;
