<template>
	<div>
		<hero-section></hero-section>
		<jet-section-border></jet-section-border>
        <welcome-section></welcome-section>
        <jet-section-border></jet-section-border>
		<feature-section></feature-section>
		<jet-section-border></jet-section-border>
		<design-section></design-section>
		<jet-section-border></jet-section-border>
		<custom-design></custom-design>
		<jet-section-border></jet-section-border>
		<partner-section></partner-section>
		<jet-section-border></jet-section-border>
		<how-it-works-section></how-it-works-section>
	</div>
</template>

<script>
import HeroSection from "./HeroSection.vue";
import WelcomeSection from "./WelcomeSection.vue";
import DesignSection from "./DesignSection.vue";
import CustomDesign from "./CustomDesign.vue";
import PartnerSection from "./PartnerSection.vue";
import FeatureSection from "./FeatureSection.vue";
import HowItWorksSection from "./HowItWorksSection.vue";
export default {
	components: {
		HeroSection,
		DesignSection,
		CustomDesign,
		PartnerSection,
		FeatureSection,
		HowItWorksSection,
        WelcomeSection,
	},
};
</script>
<style lang="scss" scoped>
</style>
