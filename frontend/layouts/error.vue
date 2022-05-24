<template>
	<div class="text-center">
		<h1 class="text-primary">{{ error.statusCode }}!</h1>
		<h4 v-if="error.statusCode === 404">Page not found.</h4>
		<h4 v-if="error.statusCode === 500">Server Error.</h4>
		<h4 v-if="error.statusCode === 403">
			You are forbidden.
		</h4>
		<h4 v-if="error.statusCode === 401">
			You are unauthrized.
		</h4>
		<p class="mb-4">
			{{ error.message }}
		</p>
		<NuxtLink class="btn btn-primary px-4" to="/">Back to home</NuxtLink>
	</div>
</template>

<script>
export default {
	props: ["error"],
	layout: "errorLayout", // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active,
.nuxt-link-active {
	color: white !important;
}
</style>