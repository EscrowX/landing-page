import React from "react";
import infoStyles from "./Info.module.css";
import polishFlag from "../../../assets/icons-poland.svg";
import twitterIcon from "../../../assets/icons-twitter.svg";
import telegramIcon from "../../../assets/icons-telegram.svg";
import githubIcon from "../../../assets/icons-github.svg";
import youtubeIcon from "../../../assets/icons-youtube.svg";
import mediumIcon from "../../../assets/icons-medium.svg";

export const Info = () => {
	const {
		container,
		title,
		section,
		officeContainer,
		officeText,
		socialLinksContainer,
		telegramJoinBtn,
	} = infoStyles;

	return (
		<section className={container}>
			<div className={section}>
				<h2 className={title}>Our Office</h2>
				<div className={officeContainer}>
					<img src={polishFlag} />
					<p className={officeText}>
						We are located in Poland. We are 100% remote company, without a
						physical office.
					</p>
				</div>
			</div>
			<div className={section}>
				<h2 className={title}>Follow us on</h2>
				<div className={socialLinksContainer}>
					<a
						href="https://twitter.com/escrow_x"
						target="_blank"
						rel="noreferrer"
					>
						<img src={twitterIcon} />
					</a>
					<a
						href="https://escrowx.medium.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={mediumIcon} />
					</a>
					<a
						href="https://github.com/EscrowX/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={githubIcon} />
					</a>
					<a
						href="https://www.youtube.com/channel/UCpEFAQXdK6_SFqJjZlwTR7g"
						target="_blank"
						rel="noreferrer"
					>
						<img src={youtubeIcon} />
					</a>
				</div>
			</div>
			<div className={section}>
				<h2 className={title}>Telegram group</h2>
				<a
					href="https://t.me/escrowx_announcements"
					target="_blank"
					rel="noreferrer"
					className={telegramJoinBtn}
				>
					Join Telegram Group
				</a>
			</div>
		</section>
	);
};
