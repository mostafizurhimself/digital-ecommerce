<template>
	<div>
		<stripe-element-card @error="onError" ref="elementRef" :pk="pulishableKey" @token="tokenCreated" :hidePostalCode="true" />
		<button @click.prevent="submit" class="btn btn-primary form-control text-white text-xl border-0">
			Pay Now
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pulishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
			token: null,
		};
	},
	emits: ["token-generated"],
	methods: {
		submit() {
			// this will trigger the process
			this.$refs.elementRef.submit();
			this.$emit("onSubmit");
		},
		tokenCreated(token) {
			this.$emit("token-generated", token);

			// handle the token
			// send it to your server
		},
		onError(err) {
			this.$emit("onError", err);
		},
	},
};
</script>

<style lang="scss">
.StripeElement {
	border: 1px solid #c85007 !important;
}
</style>
