import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

export const steps = [
	{
		id: 1,
		title: "Set Escrow Rules",
		img: img1,
		desc: "Let’s say that you want to lend a book to your friend. Open EscrowX dapp, set an escrow rate, set your fee and the return date. Now, you have to send a request for signature to your friend’s wallet address.",
	},
	{
		id: 2,
		title: "Sign-off the Deal",
		img: img2,
		desc: "Your friend receives a deal request. The escrow (deposit) taken from your friend is 150%, and we securely lock it in a smart contract. That +50% is to incentivize your friend to return you an asset.",
	},
	{
		id: 3,
		title: "Receive a Token",
		img: img3,
		desc: "After you and your friend sign the contract off, you both receive a deposit token. This is the bill of exchange saved on the blockchain.",
	},
	{
		id: 4,
		title: "Manage Contract",
		img: img4,
		desc: "When the return date is expired, and you haven’t received your item back, you can request a smart contract to return you 100% value of the asset. The remaining 50% will be liquidated among ESX token holders. If your friend returns an asset on time, he will receive 150% of funds from an escrow. ",
	},
];
