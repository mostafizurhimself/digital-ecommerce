<template>
	<div ref="paypal"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		checkoutItems: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			clientId: process.env.PAYPAL_CLIENT_ID,
		};
	},
	// computed: {
	//   ...mapGetters({
	//     getCartItems: "cart/getCartItems",
	//     getTotalItem: "cart/getTotalItem",
	//     getTotalPrice: "cart/getTotalPrice",
	//   }),

	// },

	methods: {
		// Open paypal payment modal
		openPaymentAmountModal() {
			this.isPaymentAmountModalVisible = true;
		},

		// Close paypal modal
		closePaymentAmountModal() {
			this.isPaymentAmountModalVisible = false;
		},

		// Render paypal button
		setLoaded: function () {
			window.paypal
				.Buttons({
					// onInit is called when the button first renders
					onInit: (data, actions) => {
						// Disable the buttons
						// if (this.isDisabled) {
						//   actions.disable();
						// } else {
						//   actions.enable();
						// }
					},
					// onClick is called when the button is clicked
					onClick: () => {
						// Show a validation error if the checkbox is not checked
					},
					createOrder: (data, actions) => {
						// This function sets up the details of the transaction, including the amount and line item details.
						return actions.order.create({
							purchase_units: this.checkoutItems,
						});
					},
					onApprove: (data, actions) => {
						// This function captures the funds from the transaction.
						// await this.handlePaymentComplete();
						return actions.order.capture().then((details) => {
							// This function shows a transaction success message to your buyer.
							this.$toast.success(
								"Payment successfully. Please,Wait for redirection."
							);
							this.$emit("payment-complete", details);
						});
					},
					style: {
						color: "blue",
						shape: "pill",
						label: "checkout",
						tagline: false,
						layout: "vertical",
						fundingicons: "true",
						funding: {
							// allowed: [window.paypal.FUNDING.CARD],
							disallowed: [
								window.paypal.FUNDING.CREDIT,
								window.paypal.FUNDING.CARD,
							],
						},
					},
				})
				.render(this.$refs.paypal);
		},
	},
	mounted() {
		const script = document.createElement("script");
		script.src = `https://www.paypal.com/sdk/js?client-id=${this.clientId}&disable-funding=credit,card`;
		script.addEventListener("load", this.setLoaded);
		document.body.appendChild(script);
	},
};
</script>

<style lang="scss" scoped>
</style>
