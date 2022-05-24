<template>
	<div>
		<div>
			<div class="max-w-5xl divide-y divide-gray-200">
				<div class="flex justify-between py-3 rounded-md">
					<div>
						<h1 class="truncate text-90 font-normal text-2xl">
							Order Details For : {{ order.customer.name }}
						</h1>
					</div>
					<!-- Route Link -->
					<div class="items-center">
						<inertia-link class="btn btn-primary mr-2" :href="route('orders.index')">
							<i class="ti-arrow-left"></i>
						</inertia-link>
					</div>
				</div>
			</div>
		</div>

		<!-- order Show -->
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="bg-white mb-6 py-4 px-6 rounded-md">
				<!-- Tabs -->

				<!-- ID -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Order ID</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.id }}</p>
					</div>
				</div>

				<!-- Name -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Name</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customer.name }}</p>
					</div>
				</div>

				<!--Customer ID -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Customer ID</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customerId }}</p>
					</div>
				</div>

				<!-- Date -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Date</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.dateFormatted }}</p>
					</div>
				</div>

				<!-- Total Amount -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Total Amount</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.totalAmountFormatted }}</p>
					</div>
				</div>

				<!-- Vat -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Vat</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.vat}} {{order.vatType}}</p>
					</div>
				</div>

				<!-- Vat Amount -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Vat Amount</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.vatAmountFormatted }}</p>
					</div>
				</div>

				<!-- Total Discount -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Total Discount</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.totalDiscountFormatted }}</p>
					</div>
				</div>

				<!-- Grand Total -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Grand Total</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.grandTotalFormatted }}</p>
					</div>
				</div>

				<!-- Currency -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Customer Currency</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customerCurrency }}</p>
					</div>
				</div>

				<!-- Customer Order Amount -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Customer Amount</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customerAmountFormatted }}</p>
					</div>
				</div>

				<!-- Customer Vat Amount -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Customer Vat Amount</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customerVatAmountFormatted }}</p>
					</div>
				</div>

				<!-- Customer Total Discount -->
				<div class="flex border-b border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Customer Total Discount</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customerTotalDiscountFormatted }}</p>
					</div>
				</div>

				<!--  Customer Grand Total Amount -->
				<div class="flex  border-40 -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Customer Grand Toatal</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<p class="text-90">{{ order.customerGrandTotalFormatted}}</p>
					</div>
				</div>

			</div>
		</div>
	</div>

	<!-- Order Items -->
	<div>
		<order-items></order-items>
	</div>

</template>

<script>
import OrderItems from "./OrderItems.vue";
export default {
	components: {
		OrderItems,
	},

	name: "order-show",
	props: {
		order: Object,
	},
};
</script>

