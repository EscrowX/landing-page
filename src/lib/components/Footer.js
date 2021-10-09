import React from "react";
import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";
import medium from "../../assets/icons-medium.svg";
import telegram from "../../assets/icons-telegram.svg";
import twitter from "../../assets/icons-twitter.svg";
import youtube from "../../assets/icons-youtube.svg";
import logoShape from "../../assets/logo-s.svg";

export const Footer = () => {
	const {
		footer,
		container,
		logo,
		nav,
		navItem,
		navList,
		copyright,
		info,
		socialLinks,
		socialLink,
	} = footerStyles;
	return (
		<footer className={footer}>
			<div className={container}>
				<Link to="/">
					<img
						className={logo}
						src={logoShape}
						alt="EscrowX - Simple Contracts on Blockchain"
					/>
				</Link>
				<div className={info}>
					<nav className={nav}>
						<ul className={navList}>
							<li className={navItem}>
								<a
									href="https://invis.io/GK10TG16NXD6"
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
								<Link to="/token">token</Link>
							</li>
							<li className={navItem}>
								<Link to="/white-paper">white paper</Link>
							</li>
							<li className={navItem}>
								<Link to="/contact">contact us</Link>
							</li>
						</ul>
					</nav>
					<p className={copyright}>©2021 EscrowX. All Rights Reserved</p>
				</div>
				<div className={socialLinks}>
					<a className={socialLink} href="https://www.youtube.com/channel/UCpEFAQXdK6_SFqJjZlwTR7g">
						<img src={youtube} alt="EscrowX YouTube" />
					</a>
					<a className={socialLink} href="https://t.me/escrowx_announcements">
						<img src={telegram} alt="EscrowX Announcements" />
					</a>
					<a className={socialLink} href="#">
						<img src={medium} alt="EscrowX Medium" />
					</a>
					<a className={socialLink} href="https://twitter.com/escrow_x">
						<img src={twitter} alt="EscrowX Twitter" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;