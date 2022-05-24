<template>
	<form-view @submitted="save">
		<template #title>Edit Vat Settings</template>
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
				<jet-select track="value" :options="$page.props.vatTypes" v-model="form.type" autocomplete="off" />
				<jet-input-error :message="form.errors.type" class="mt-2" />
			</div>

		</template>

		<template #actions>
			<inertia-link :href="route('vats.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Update</jet-button>
		</template>
	</form-view>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
	name: "vat-edit",
	props: {
		vat: Object,
		countries: Object,
	},

	data() {
		return {
			form: this.$inertia.form({
				countryId: this.vat.countryId,
				amount: this.vat.amount,
				type: this.vat.type,
			}),
		};
	},

	methods: {
		save() {
			this.form.put(route("vats.update", this.vat.id), {
				onSuccess: () => toast.success("Updated successfully"),
			});
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
