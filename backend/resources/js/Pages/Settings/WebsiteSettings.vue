<template>
	<jet-form-section @submitted="save">
		<template #title>Website Settings</template>
		<template #description>Change your website settings from here.</template>

		<template #form>
			<div class="col-span-6 sm:col-span-4">
				<jet-label for="name" value="Name" />
				<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" ref="name" autocomplete="name" />
				<jet-input-error :message="form.errors.name" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="description" value="Description" />
				<jet-text-input id="description" type="text" class="mt-1 block w-full" v-model="form.description" ref="description" autocomplete="description" />
				<jet-input-error :message="form.errors.description" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="logoLight" value="Logo Light" />
				<jet-image-input :url="$page.props.website?.primaryMediaUrl" @change="handleLightLogoChange"></jet-image-input>
				<small class="mt-1 font-thin text-gray-400">* Logo should be minimum 500x188 px. Maximum file size: 5MB/5120KB.</small>
				<jet-input-error :message="form.errors.logoLight" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="logoDark" value="Logo Dark" />
				<jet-image-input :url="$page.props.website?.secondaryMediaUrl" @change="handleDarkLogoChange"></jet-image-input>
				<small class="mt-1 font-thin text-gray-400">* Logo should be minimum 500x188 px. Maximum file size: 5MB/5120KB.</small>
				<jet-input-error :message="form.errors.logoDark" class="mt-2" />
			</div>
			<div class="col-span-6 sm:col-span-4">
				<jet-label for="phone" value="Phone" />
				<jet-input id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" ref="phone" autocomplete="phone" />
				<jet-input-error :message="form.errors.phone" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="email" value="Email" />
				<jet-input id="email" type="text" class="mt-1 block w-full" v-model="form.email" ref="email" autocomplete="email" />
				<small class="mt-1 font-thin text-gray-400">* Admin will get notified if any user sent through this email.</small>
				<jet-input-error :message="form.errors.email" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="street" value="Street Address" />
				<jet-input id="street" type="text" class="mt-1 block w-full" v-model="form.street" ref="street" autocomplete="street" />
				<jet-input-error :message="form.errors.street" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="city" value="City" />
				<jet-input id="city" type="text" class="mt-1 block w-full" v-model="form.city" ref="city" autocomplete="city" />
				<jet-input-error :message="form.errors.city" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="zip" value="Zip Code" />
				<jet-input id="zip" type="text" class="mt-1 block w-full" v-model="form.zip" ref="zip" autocomplete="zip" />
				<jet-input-error :message="form.errors.zip" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="country" value="Country" />
				<jet-input id="country" type="text" class="mt-1 block w-full" v-model="form.country" ref="country" autocomplete="country" />
				<jet-input-error :message="form.errors.country" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<jet-label for="vatNo" value="Vat No" />
				<jet-input id="vatNo" type="text" class="mt-1 block w-full" v-model="form.vatNo" ref="vatNo" autocomplete="vatNo" />
				<jet-input-error :message="form.errors.vatNo" class="mt-2" />
			</div>
		</template>

		<template #actions>
			<jet-action-message :on="form.recentlySuccessful" class="mr-3">Saved Successfully.</jet-action-message>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
		</template>
	</jet-form-section>
</template>

<script>
export default {
	data() {
		return {
			form: this.$inertia.form({
				name: this.$page.props.website?.data?.name,
				description: this.$page.props.website?.data?.description,
				logoLight: null,
				logoDark: null,
				phone: this.$page.props.website?.data?.phone,
				email: this.$page.props.website?.data?.email,
				street: this.$page.props.website?.data?.street,
				city: this.$page.props.website?.data?.city,
				zip: this.$page.props.website?.data?.zip,
				country: this.$page.props.website?.data?.country,
				vatNo: this.$page.props.website?.data?.vatNo,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("settings.website"));
		},
		handleLightLogoChange(file) {
			this.form.logoLight = file;
		},
		handleDarkLogoChange(file) {
			this.form.logoDark = file;
		},
	},
	mounted() {
		// console.log();;
	},
};
</script>

<style lang="scss" scoped>
</style>
