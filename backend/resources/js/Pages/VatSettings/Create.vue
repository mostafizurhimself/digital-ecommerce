<template>
	<form-view @submitted="save">
		<template #title>New Vat Settings</template>
		<template #form>

			<!-- Category-->
			<div class="mb-4">
				<jet-label for="name" value="Country" />
				<jet-select v-model="form.countryId" :options="countries"></jet-select>

				<jet-input-error :message="form.errors.countryId" class="mt-2" />
			</div>

			<!-- Amount -->
			<div class="mb-4">
				<jet-label for="amount" value="Amount" />
				<jet-input id="amount" type="text" class="mt-1 block w-full" v-model="form.amount" ref="amount" autocomplete="amount" />
				<jet-input-error :message="form.errors.amount" class="mt-2" />
			</div>

			<!-- Type -->
			<div class="col-span-6 sm:col-span-4">
				<jet-label for="type" value="Vat Type" />
				<jet-select track="value" :showPlaceholder="false" :options="$page.props.vatTypes" v-model="form.type" autocomplete="off" />
				<jet-input-error :message="form.errors.type" class="mt-2" />
			</div>

		</template>

		<template #actions>
			<inertia-link :href="route('vats.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
		</template>
	</form-view>
</template>

<script>
export default {
	name: "vats-create",

	props: {
		countries: Object,
	},
	data() {
		return {
			form: this.$inertia.form({
				amount: null,
				type: "%",
				countryId: null,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("vats.store"));
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
