<template>
	<form-view @submitted="save">
		<template #title>Create User</template>
		<template #form>
			<div class="mb-4">
				<jet-label for="name" value="Name" />
				<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" ref="name" autocomplete="name" />
				<jet-input-error :message="form.errors.name" class="mt-2" />
			</div>

			<div class="mb-4">
				<jet-label for="email" value="Email" />
				<jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" ref="email" autocomplete="email" />
				<jet-input-error :message="form.errors.email" class="mt-2" />
			</div>

			<div class="mb-4">
				<jet-label for="password" value="Password" />
				<jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" ref="password" autocomplete="password" />
				<jet-input-error :message="form.errors.password" class="mt-2" />
			</div>

			<div class="mb-4">
				<jet-label for="password_confirmation" value="Confirm Password" />
				<jet-input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" ref="password_confirmation" autocomplete="password_confirmation" />
			</div>

		</template>

		<template #actions>
			<inertia-link :href="route('users.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
		</template>
	</form-view>
</template>

<script>
export default {
	data() {
		return {
			form: this.$inertia.form({
				name: null,
				email: null,
				password: null,
				password_confirmation: null,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("users.store"), {
				onFinish: () =>
					this.form.reset("password", "password_confirmation"),
			});
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
