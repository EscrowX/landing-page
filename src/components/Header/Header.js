import React, { useState } from "react";
import { Link } from "react-router-dom";
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
								href="https://invis.io/YJ10RDVLZ87R"
								target="_blank"
								rel="noreferrer"
							>
								Demo
							</a>
						</li>
						<li className={navItem}>
							<a
								href="https://faq.escrowx.io/"
								target="_blank"
								rel="noreferrer"
							>
								FAQ
							</a>
						</li>
						<li className={navItem}>
							<Link to="/about">about us</Link>
						</li>
						<li className={navItem}>
							<Link to="/white-paper">white paper</Link>
						</li>
						<li className={navItem}>
							<Link to="/token">token</Link>
						</li>
						<li className={navItem}>
							<Link to="/contact">contact us</Link>
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
