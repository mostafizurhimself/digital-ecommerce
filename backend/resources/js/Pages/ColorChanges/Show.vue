<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">Change Color Details: {{ colorChange.id}}</h1>
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

	<!--Color Change Show -->
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
							<p class="text-90">{{colorChange.id}}</p>
						</div>
					</div>

					<!-- Date -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Date</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.dateFormatted}}</p>
						</div>
					</div>

					<!-- Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Name</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customer.name}}</p>
						</div>
					</div>

					<!-- Email -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Email</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customer.email }}</p>
						</div>
					</div>

					<!-- Phone -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Phone</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customer.phone }}</p>
						</div>
					</div>

					<!-- Customer Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customerAmountFormatted}}</p>
						</div>
					</div>

					<!-- Customer VAT Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer VAT</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customerVatAmountFormatted}}</p>
						</div>
					</div>

					<!-- Customer Grand Total -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Grand Total</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customerGrandTotalFormatted}}</p>
						</div>
					</div>

					<!-- Customer Currency -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Currency</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.customerCurrency}}</p>
						</div>
					</div>

					<!-- Deposit Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Deposit Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.depositAmountFormatted}}</p>
						</div>
					</div>

					<!-- VAT Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vat Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.vatAmountFormatted}}</p>
						</div>
					</div>

					<!-- Grand total Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Grand Total</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.grandTotalFormatted}}</p>
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
							<p class="text-90">{{colorChange.product.name}}</p>
						</div>
					</div>

					<!-- Color -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Color</h4>
						</div>

						<table class="w-full border divide-y divide-gray-200 my-2">
							<thead class="bg-gray-50">
								<tr>
									<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">color</th>
									<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>

								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="(row, index) in colorChange.colors" :key="index">
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-block w-8 h-8" :style="{'background-color': row.colorCode}"></span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap truncate" style="max-width: 200px">{{row.description}}</td>

								</tr>
							</tbody>
						</table>
					</div>

					<!-- Description -->
					<div class="flex  -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Description</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{colorChange.description}}</p>
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
import Feedback from "./Feedback.vue";
export default {
	name: "color-change-show",

	props: {
		colorChange: Object,
	},

	components: {
		Feedback,
	},
	methods: {
		save() {
			this.form.post(route("color-changes.update"));
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
