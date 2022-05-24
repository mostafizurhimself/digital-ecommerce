<template>
	<div class="bg-white overflow-hidden shadow sm:rounded-lg flex justify-between items-center">
		<div class="bg-white p-4">
			<div class="font-bold uppercase">
				<slot name="title"></slot>
			</div>

			<div class="flex mt-4 text-gray-600 text-3xl items-center">
				<slot></slot>
			</div>
			<div class="text-sm text-primary-500 mt-4">
				<slot name="link"></slot>
			</div>
		</div>
		<div class="text-5xl mr-4">
			<slot name="icon"><i class="ti-receipt"></i></slot>
		</div>
	</div>
</template>

<script>
import JetApplicationLogo from "@/Jetstream/ApplicationLogo";

export default {
	components: {
		JetApplicationLogo,
	},

	computed: {
		// hasLinkSlot() {
		// 	return !!this.$slots.link;
		// },
	},
};
</script>
