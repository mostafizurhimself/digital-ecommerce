<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">Preview Design Details</h1>
				</div>
				<!-- Route Link forcustomOrder -->
				<div class="items-center">
					<inertia-link class="btn btn-primary mr-2" :href="route('color-changes.index')">
						<i class="ti-arrow-left"></i>
					</inertia-link>
				</div>
			</div>
		</div>
	</div>

	<!--customOrder Show -->
	<div class="max-w-5xl divide-y divide-gray-200">
		<div class="bg-white mb-6 py-4 px-6 rounded-md">
			<!-- Tabs -->
			<tabs :options="{ useUrlFragment: false }" nav-item-class="tab-item">
				<!-- First Tab -->
				<tab name="General Info">
					<!-- ID -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">ID</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.id}}</p>
						</div>
					</div>

					<!-- Date -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Date</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.dateFormatted}}</p>
						</div>
					</div>

					<!-- Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Name</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customer.name}}</p>
						</div>
					</div>

					<!-- Email -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Email</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customer.email }}</p>
						</div>
					</div>

					<!-- Phone -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Phone</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customer.phone }}</p>
						</div>
					</div>

					<!-- Customer Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customerAmountFormatted}}</p>
						</div>
					</div>

					<!-- Customer VAT Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer VAT</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customerVatAmountFormatted}}</p>
						</div>
					</div>

					<!-- Customer Grand Total -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Grand Total</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customerGrandTotalFormatted}}</p>
						</div>
					</div>

					<!-- Customer Currency -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Currency</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.customerCurrency}}</p>
						</div>
					</div>

					<!-- Deposit Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Deposit Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.depositAmountFormatted}}</p>
						</div>
					</div>

					<!-- VAT Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vat Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.vatAmountFormatted}}</p>
						</div>
					</div>

					<!-- Grand total Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Grand Total</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.grandTotalFormatted}}</p>
						</div>
					</div>

				</tab>

				<!-- Second Tab -->
				<tab name="Description" class="mt-5">

					<!-- Product Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Product Name</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.product.name}}</p>
						</div>
					</div>

					<!-- Vehicle -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vehicle</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.vehicle.name}}</p>
						</div>
					</div>

					<!-- Vehicle Model -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vehicle Model</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.vehicleModel.name}}</p>
						</div>
					</div>

					<!-- Description -->
					<div class="flex  -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Description</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{previewDesign.description}}</p>
						</div>
					</div>

				</tab>

				<!-- Third Tab -->
				<tab name="Feedback" class="mt-5">
					<feedback></feedback>
				</tab>
			</tabs>
		</div>
	</div>

</template>

<script>
import Feedback from "./Feedback";
export default {
	name: "preview-desings-show",

	components: {
		Feedback,
	},

	props: {
		previewDesign: Object,
	},

	methods: {
		save() {
			this.form.post(route("preview-designs.update"));
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
