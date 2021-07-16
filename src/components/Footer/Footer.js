import React from "react";
import footerStyles from "./Footer.module.css";
import medium from "../../assets/icons-medium.svg";
import telegram from "../../assets/icons-telegram.svg";
import twitter from "../../assets/icons-twitter.svg";
import youtube from "../../assets/icons-youtube.svg";
import logoShape from "../../assets/logo-s.svg";

function Footer() {
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
				<a href="#">
					<img className={logo} src={logoShape} alt="" />
				</a>
				<div className={info}>
					<nav className={nav}>
						<ul className={navList}>
							<li className={navItem}>
								<a href="#">FAQ</a>
							</li>
							<li className={navItem}>
								<a href="#">about us</a>
							</li>
							<li className={navItem}>
								<a href="#">token</a>
							</li>
							<li className={navItem}>
								<a href="#">white paper</a>
							</li>
							<li className={navItem}>
								<a href="#">contact us</a>
							</li>
						</ul>
					</nav>
					<p className={copyright}>©2021 EscrowX. All Rights Reserved</p>
				</div>
				<div className={socialLinks}>
					<a className={socialLink} href="#">
						<img src={youtube} alt="" />
					</a>
					<a className={socialLink} href="#">
						<img src={telegram} alt="" />
					</a>
					<a className={socialLink} href="#">
						<img src={medium} alt="" />
					</a>
					<a className={socialLink} href="#">
						<img src={twitter} alt="" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
