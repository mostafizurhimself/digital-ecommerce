<template>
	<jet-form-section @submitted="save">
		<template #title>Custom Page Banner</template>
		<template #description>Change custom page banner section settings.</template>

		<template #form>
			<div class="col-span-6 sm:col-span-4">
				<jet-label for="banner" value="Banner" />
				<jet-image-input :url="$page.props.banner?.primaryMediaUrl" @change="handlePosterChange"></jet-image-input>
                 <small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 100MB/102400KB.</small>
				<jet-input-error :message="form.errors.banner" class="mt-2" />
			</div>
		</template>

		<template #actions>
			<jet-action-message :on="form.recentlySuccessful" class="mr-3">Saved.</jet-action-message>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
		</template>
	</jet-form-section>
</template>

<script>
export default {
	data() {
		return {
			form: this.$inertia.form({
				banner: null,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("appearance.custom-orders.banner"));
		},
		handlePosterChange(file) {
			this.form.banner = file;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
