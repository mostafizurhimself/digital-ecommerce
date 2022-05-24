<template>
	<div>
		<website-settings></website-settings>
		<jet-section-border></jet-section-border>
		<vat-settings></vat-settings>
	</div>
</template>

<script>
import WebsiteSettings from "./WebsiteSettings.vue";
import VatSettings from "./VatSettings.vue";
export default {
	components: {
		WebsiteSettings,
		VatSettings,
	},
};
</script>

<style lang="scss" scoped>
</style>
