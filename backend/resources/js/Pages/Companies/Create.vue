<template>
	<div>
		<form-view @submitted="save">
			<template #title>Add New Partner</template>
			<template #form>
				<tabs :options="{ useUrlFragment: false }" nav-item-class="tab-item">
					<!-- First Tab -->
					<tab name="General Info">
						<!-- Customer -->
						<div class="mb-4">
							<jet-label for="customerId" value="Customer" />
							<jet-select :options="customers" id="customerId" class="mt-1 block w-full" v-model="form.customerId" ref="customerId" />
							<jet-input-error :message="form.errors.customerId" class="mt-2" />
						</div>

						<!-- Company Name -->
						<div class="mb-4">
							<jet-label for="companyName" value="Company Name" />
							<jet-input id="companyName" type="text" class="mt-1 block w-full" v-model="form.companyName" ref="companyName" />
							<jet-input-error :message="form.errors.companyName" class="mt-2" />
						</div>

						<!-- Company Email -->
						<div class="mb-4">
							<jet-label for="companyEmail" value="Company Email" />
							<jet-input id="companyEmail" type="email" class="mt-1 block w-full" v-model="form.companyEmail" ref="companyEmail" />
							<jet-input-error :message="form.errors.companyEmail" class="mt-2" />
						</div>

						<!-- Company Website -->
						<div class="mb-4">
							<jet-label for="companyWebsite" value="Website" />
							<jet-input id="companyWebsite" type="text" class="mt-1 block w-full" v-model="form.companyWebsite" ref="companyWebsite" />
							<jet-input-error :message="form.errors.companyWebsite" class="mt-2" />
						</div>

						<!-- Service -->
						<div class="mb-4">
							<jet-label for="service" value="Service" />
							<jet-select :options="services" track="value" id="service" class="mt-1 block w-full" v-model="form.service" ref="service" />
							<jet-input-error :message="form.errors.service" class="mt-2" />
						</div>

						<!-- Status -->
						<div class="mb-4">
							<jet-label for="status" value="Status" />
							<jet-select :options="statusOptions" track="value" id="status" class="mt-1 block w-full" v-model="form.status" ref="status" />
							<jet-input-error :message="form.errors.status" class="mt-2" />
						</div>
					</tab>
					<!-- Second tab -->
					<tab name="Address" class="mt-5">
						<!-- Street -->
						<div class="mb-4">
							<jet-label for="billingAddress.street" value="Street" />
							<jet-input id="billingAddress.street" type="text" class="mt-1 block w-full" v-model="form.billingAddress.street" ref="billingAddress.street" />
							<jet-input-error :message="form.errors['billingAddress.street']" class="mt-2" />
						</div>

						<!-- City -->
						<div class="mb-4">
							<jet-label for="billingAddress.city" value="City" />
							<jet-input id="billingAddress.city" type="text" class="mt-1 block w-full" v-model="form.billingAddress.city" ref="billingAddress.city" />
							<jet-input-error :message="form.errors['billingAddress.city']" class="mt-2" />
						</div>

						<!-- Street -->
						<div class="mb-4">
							<jet-label for="billingAddress.zipcode" value="Zipcode" />
							<jet-input id="billingAddress.zipcode" type="text" class="mt-1 block w-full" v-model="form.billingAddress.zipcode" ref="billingAddress.zipcode" />
							<jet-input-error :message="form.errors['billingAddress.zipcode']" class="mt-2" />
						</div>

						<!-- Country -->
						<div class="mb-4">
							<jet-label for="billingAddress.country" value="Country" />
							<jet-select :options="countries" id="billingAddress.country" class="mt-1 block w-full" v-model="form.billingAddress.country" ref="billingAddress.country" />
							<jet-input-error :message="form.errors['billingAddress.country']" class="mt-2" />
						</div>

                        <!-- Position -->
                        <div class="mb-4">
                            <jet-label for="shippingAddress.country" value="Global Position" />
                            <div class="grid grid-cols-2 gap-4 ">

                                <!-- Latitude -->
                                <div>
                                    <jet-input id="shippingAddress.zipcode" type="text" placeholder="Latitude" class="mt-1 block w-full" v-model="form.billingAddress.position.lat" ref="billingAddress.position" />

                                </div>

                                <!-- longitude -->
                                  <div>
                                    <jet-input id="shippingAddress.zipcode" type="text" placeholder="Longitude" class="mt-1 block w-full" v-model="form.billingAddress.position.lng" ref="billingAddress.position" />
                                </div>
                            </div>
                             <jet-input-error :message="form.errors['billingAddress.position']" class="mt-2" />
                        </div>





						<!-- Has Shipping address -->
						<div class="mb-4 d-flex">
							<label class="flex items-center">
								<jet-checkbox :value="form.hasShipping" v-model:checked="form.hasShipping" />
								<span class="ml-2 text-sm text-gray-600">Shipping Address</span>
							</label>
						</div>

						<div v-if="form.hasShipping">
							<!-- Street -->
							<div class="mb-4">
								<jet-label for="shippingAddress.street" value="Street" />
								<jet-input id="shippingAddress.street" type="text" class="mt-1 block w-full" v-model="form.shippingAddress.street" ref="shippingAddress.street" />
								<jet-input-error :message="form.errors['shippingAddress.street']" class="mt-2" />
							</div>

							<!-- City -->
							<div class="mb-4">
								<jet-label for="shippingAddress.city" value="City" />
								<jet-input id="shippingAddress.city" type="text" class="mt-1 block w-full" v-model="form.shippingAddress.city" ref="shippingAddress.city" />
								<jet-input-error :message="form.errors['shippingAddress.city']" class="mt-2" />
							</div>

							<!-- Street -->
							<div class="mb-4">
								<jet-label for="shippingAddress.zipcode" value="Zipcode" />
								<jet-input id="shippingAddress.zipcode" type="text" class="mt-1 block w-full" v-model="form.shippingAddress.zipcode" ref="shippingAddress.zipcode" />
								<jet-input-error :message="form.errors['shippingAddress.zipcode']" class="mt-2" />
							</div>

							<!-- Country -->
							<div class="mb-4">
								<jet-label for="shippingAddress.country" value="Country" />
								<jet-select :options="countries" id="shippingAddress.country" track="value" class="mt-1 block w-full" v-model="form.shippingAddress.country" ref="shippingAddress.country" />
								<jet-input-error :message="form.errors['shippingAddress.country']" class="mt-2" />
							</div>
						</div>

					</tab>
				</tabs>
			</template>

			<template #actions>
				<inertia-link :href="route('products.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
				<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
			</template>
		</form-view>
	</div>
</template>

<script>
export default {
	name: "product-create",

	props: {
		countries: Array,
		customers: Array,
		services: Array,
		statusOptions: Array,
	},
	data() {
		return {
			form: this.$inertia.form({
				customerId: null,
				companyName: "",
				companyEmail: "",
				companyWebsite: "",
				service: "",
				status: "pending",
				billingAddress: {
					street: "",
					city: "",
					zipcode: "",
					country: null,
                    position:{
                        lat:null,
                        lng:null,
                    }
				},
				hasShipping: false,
				shippingAddress: {
					street: "",
					city: "",
					zipcode: "",
					country: null,
				},
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("companies.store"));
		},
	},
};
</script>

<style lang="scss">
</style>

