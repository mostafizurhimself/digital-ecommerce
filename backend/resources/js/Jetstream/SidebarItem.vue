<template>
	<li class="">
		<inertia-link :href="href" class="flex px-6 py-2 text-white hover:bg-gray-800 items-center " :class="{'active': active}">
			<slot></slot>
		</inertia-link>
	</li>
</template>

<script>
export default {
	props: ["href", "active"],
};
</script>

<style lang="scss" scoped>
.active {
	@apply font-bold text-primary-500;
}
</style>
