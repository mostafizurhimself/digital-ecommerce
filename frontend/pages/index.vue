<template>
	<div>
		<hero-section></hero-section>
		<the-features></the-features>
		<all-detailed-features></all-detailed-features>
		<how-it-works></how-it-works>
	</div>
</template>

<script>
import HeroSection from "~/components/layouts/HeroSection.vue";
import TheFeatures from "~/components/layouts/TheFeatures.vue";
import AllDetailedFeatures from "~/components/layouts/AllDetailedFeatures.vue";
import HowItWorks from "~/components/layouts/HowItWorks.vue";

export default {
	layout: "home",
	head() {
		return {
			title: "Amazing Car Wrap Designs | Fit Any Car",
		};
	},
	components: {
		HeroSection,
		TheFeatures,
		AllDetailedFeatures,
		HowItWorks,
	},
	mounted() {
		this.isLoading = false;
	},
};
</script>

<style></style>
