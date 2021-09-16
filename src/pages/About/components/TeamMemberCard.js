import teamMemberCardStyles from "./TeamMemberCard.module.css";

export const TeamMemberCard = ({
	name,
	professionTitle,
	description,
	linkedin,
	twitter,
	image,
}) => {
	const {
		container,
		imgContainer,
		img,
		memberName,
		memberTitle,
		memberDescription,
		socialLinksContainer,
	} = teamMemberCardStyles;
	return (
		<article className={container}>
			<div className={imgContainer}>
				<img className={img} src={image} alt={name} />
			</div>
			<h3 className={memberName}>{name}</h3>
			<h4 className={memberTitle}>{professionTitle}</h4>
			<div className={socialLinksContainer}>
				{linkedin && (
					<a href={linkedin} target="_blank" rel="noreferrer">
						<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
							<g>
								<circle stroke="#B1B1B1" fill="#000" cx="20" cy="20" r="19.5" />
								<path
									d="M14.348 29H10V16.045h4.348V29zm-2.173-14.682A2.167 2.167 0 0 1 10 12.158c0-1.192.974-2.158 2.175-2.158 1.198 0 2.173.968 2.173 2.158 0 1.192-.975 2.16-2.173 2.16zM30 29h-4.18v-6.305c0-1.503-.029-3.437-2.173-3.437-2.177 0-2.511 1.638-2.511 3.329V29h-4.18V16.036h4.013v1.771h.056c.558-1.019 1.923-2.093 3.958-2.093 4.234 0 5.017 2.685 5.017 6.176V29z"
									fill="#FFF"
								/>
							</g>
						</svg>
					</a>
				)}
				{twitter && (
					<a href={twitter} target="_blank" rel="noreferrer">
						<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
							<g>
								<circle stroke="#B1B1B1" fill="#000" cx="20" cy="20" r="19.5" />
								<path
									d="M30 14.006c-.749.347-1.5.61-2.334.698.833-.525 1.5-1.396 1.833-2.357-.834.525-1.667.872-2.582 1.05C26.084 12.523 25 12 23.835 12c-2.253 0-4.086 1.917-4.086 4.27 0 .351 0 .699.085.96-3.418-.173-6.416-1.831-8.418-4.447-.417.613-.583 1.396-.583 2.18 0 1.485.749 2.792 1.833 3.575-.667-.088-1.331-.262-1.833-.524v.089c0 2.09 1.416 3.834 3.249 4.185-.332.085-.664.174-1.08.174-.251 0-.502 0-.753-.089.502 1.744 2.002 2.966 3.835 2.966-1.416 1.134-3.167 1.829-5.085 1.829-.332 0-.667 0-.999-.085C11.833 28.302 14 29 16.25 29c7.585 0 11.667-6.538 11.667-12.205v-.525c.833-.61 1.5-1.392 2.083-2.264"
									fill="#FFF"
								/>
							</g>
						</svg>
					</a>
				)}
			</div>
			<p className={memberDescription}>{description}</p>
		</article>
	);
};
