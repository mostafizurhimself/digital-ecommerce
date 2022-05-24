<template>
	<div>
		<form-view @submitted="save">
			<template #title>Create Coupon</template>
			<template #form>
				<!-- Name -->
				<div class="mb-4">
					<jet-label for="name" value="Name" />
					<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" ref="name" autocomplete="name" />
					<jet-input-error :message="form.errors.name" class="mt-2" />
				</div>

				<!-- Code -->
				<div class="mb-4">
					<jet-label for="code" value="Code" />
					<jet-input id="code" type="text" class="mt-1 block w-full" v-model="form.code" ref="code" autocomplete="code" />
					<jet-input-error :message="form.errors.code" class="mt-2" />
				</div>

				<!-- Coupon Amount -->
				<div class="mb-4">
					<jet-label for="amount" value="Coupon Amount" />
					<jet-input id="amount" type="number" class="mt-1 block w-full" v-model="form.amount" ref="amount" autocomplete="amount" />
					<jet-input-error :message="form.errors.amount" class="mt-2" />
				</div>

				<!--Description -->
				<div class="mb-4">
					<jet-label for="description" value="Description" />
					<jet-text-input id="description" type="text" class="mt-1 block w-full" v-model="form.description" ref="description" autocomplete="description" rows="8" />
					<jet-input-error :message="form.errors.description" class="mt-2" />
				</div>

				<!-- Start From -->
				<div class="mb-4">
					<jet-label for="startFrom" value="Start From" />
					<jet-input id="startFrom" type="number" class="mt-1 block w-full" v-model="form.startFrom" ref="startFrom" autocomplete="startFrom" />
					<small class="mt-1 font-thin text-gray-400">How much order amount will be eligable for the coupon.</small>
					<jet-input-error :message="form.errors.startFrom" class="mt-2" />
				</div>

				<!-- Available From -->
				<div class="mb-4">
					<jet-label for="availableFrom" value="Available From" />
					<jet-input id="availableFrom" type="date" class="mt-1 block w-full" v-model="form.availableFrom" ref="availableFrom" autocomplete="availableFrom" />
					<jet-input-error :message="form.errors.availableFrom" class="mt-2" />
				</div>

				<!-- Available To -->
				<div class="mb-4">
					<jet-label for="availableTo" value="Available To" />
					<jet-input id="availableTo" type="date" class="mt-1 block w-full" v-model="form.availableTo" ref="availableTo" autocomplete="availableTo" />
					<jet-input-error :message="form.errors.availableTo" class="mt-2" />
				</div>

			</template>

			<template #actions>
				<inertia-link :href="route('coupons.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
				<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
			</template>
		</form-view>
	</div>
</template>

<script>
export default {
	name: "coupon-create",

	data() {
		return {
			form: this.$inertia.form({
				name: null,
				code: null,
				description: null,
				amount: null,
				startFrom: null,
				availableFrom: null,
				availableTo: null,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("coupons.store"));
		},
	},
};
</script>

<style lang="scss">
</style>

