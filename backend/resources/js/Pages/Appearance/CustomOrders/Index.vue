<template>
	<div>
		<slider-section></slider-section>
	</div>

     <div class="mt-6">
         <custom-banner></custom-banner>
    </div>

</template>

<script>
import SliderSection from "./SliderSection.vue";
import CustomBanner from "./CustomBanner.vue";
export default {
	components: {
		SliderSection,
        CustomBanner,
	},
};
</script>

<style lang="scss" scoped>
</style>
