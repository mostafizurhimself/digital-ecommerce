<template>
	<div>
		<the-header type="light" fixed="top" class="sticky-top stickyHeader">
			<template #logo>
				<Logo :dark="true" />
			</template>
		</the-header>
		<div class="wrapper">
			<Nuxt />
		</div>
		<the-footer></the-footer>
		<accept-cookie-modal></accept-cookie-modal>
	</div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import Logo from "@/components/Logo";

export default {
	name: "default-layout",
	components: {
		TheHeader,
		TheFooter,
		Logo,
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

.stickyHeader {
	z-index: 9999;
}
</style>
