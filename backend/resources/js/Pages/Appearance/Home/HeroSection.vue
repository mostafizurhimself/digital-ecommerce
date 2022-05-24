<template>
	<jet-form-section @submitted="save">
		<template #title>Hero Section</template>
		<template #description>Change home page hero section settings.</template>

		<template #form>
			<div class="col-span-6 sm:col-span-4">
				<jet-label for="title" value="Title" />
				<jet-input id="title" type="text" class="mt-1 block w-full" v-model="form.title" ref="title" autocomplete="title" />
				<jet-input-error :message="form.errors.title" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="subtitle" value="Subtitle" />
				<jet-input id="subtitle" type="text" class="mt-1 block w-full" v-model="form.subtitle" ref="subtitle" autocomplete="subtitle" />
				<jet-input-error :message="form.errors.subtitle" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="video" value="Video" />
				<!-- <input type="file" @input="form.video = $event.target.files[0]" /> -->
				<jet-file-input :url="$page.props.hero?.primaryMediaUrl" @change="handleVideoChange"></jet-file-input>
				<small class="block mt-2 font-thin text-gray-400">* Supported format: mp4,mov,ogg,avi. Max allocation: 30MB.</small>
				<jet-input-error :message="form.errors.video" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="poster" value="Poster" />
				<jet-image-input :url="$page.props.hero?.secondaryMediaUrl" @change="handlePosterChange"></jet-image-input>
				<small class="mt-2 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.</small>
				<!-- <input type="file" @input="form.poster = $event.target.files[0]" /> -->
				<jet-input-error :message="form.errors.poster" class="mt-2" />
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
				title: this.$page.props.hero?.data?.title,
				subtitle: this.$page.props.hero?.data?.subtitle,
				video: null,
				poster: null,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("appearance.home.hero"));
		},
		handlePosterChange(file) {
			this.form.poster = file;
		},
		handleVideoChange(file) {
			this.form.video = file;
		},
	},
	mounted() {
		// console.log();;
	},
};
</script>

<style lang="scss" scoped>
</style>
