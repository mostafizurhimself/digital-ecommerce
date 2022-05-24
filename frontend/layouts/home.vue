<template>
	<div>
		<the-header></the-header>
		<div>
			<Nuxt />
		</div>
		<the-footer :bgWhite="true"></the-footer>
		<accept-cookie-modal></accept-cookie-modal>
	</div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import AcceptCookieModal from "@/components/AcceptCookieModal.vue";
export default {
	name: "home-layout",
	components: {
		TheHeader,
		TheFooter,
		AcceptCookieModal,
	},
	mounted() {
		this.$store.dispatch("cart/setCart");
	},
	async created() {
		await this.$store.dispatch("currency/setExchangeRate");
	},
	async fetch() {
		await this.$store.dispatch("config/setConfig", { url: "/config" });
	},
};
</script>

<style>
.nuxt-link-exact-active,
.nuxt-link-active {
	color: #c85007 !important;
}
</style>
