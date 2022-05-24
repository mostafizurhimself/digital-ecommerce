
<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">
						Custom Order Details For :
						{{ customOrder.customer.name }}
					</h1>
				</div>
				<!-- Route Link forcustomOrder -->
				<div class="items-center">
					<inertia-link class="btn btn-primary mr-2" :href="route('custom-orders.index')">
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
							<p class="text-90">{{ customOrder.id }}</p>
						</div>
					</div>

					<!-- Date -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Date</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.dateFormatted }}
							</p>
						</div>
					</div>

					<!-- Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Name</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customer.name }}
							</p>
						</div>
					</div>

					<!-- Email -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Email</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customer.email }}
							</p>
						</div>
					</div>

					<!-- Phone -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Phone</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customer.phone }}
							</p>
						</div>
					</div>

					<!-- Deposit Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Deposit Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.depositAmountFormatted }}
							</p>
						</div>
					</div>

					<!-- Vat -->
					<div class="flex border-b border-40 -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vat</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ customOrder.vat}} {{customOrder.vatType}}</p>
						</div>
					</div>

					<!-- Vat Amount -->
					<div class="flex border-b border-40 -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vat Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ customOrder.vatAmountFormatted}}</p>
						</div>
					</div>

					<!-- Grand Total -->
					<div class="flex border-b border-40 -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Grand Total</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ customOrder.grandTotalFormatted }}</p>
						</div>
					</div>

					<!-- Customer Currency -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">
								Customer Currency
							</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customerCurrency }}
							</p>
						</div>
					</div>

					<!-- Customer Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customerAmountFormatted }}
							</p>
						</div>
					</div>

					<!-- Customer VAT Amount -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Customer VAT Amount</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customerVatAmountFormatted }}
							</p>
						</div>
					</div>

					<!-- Customer Grand Total -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">
								Customer Grand Total
							</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.customerGrandTotalFormatted}}
							</p>
						</div>
					</div>

					<!-- Design Note -->
					<div class="flex -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Design Note</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ customOrder.designNote }}</p>
						</div>
					</div>
				</tab>

				<!-- Second Tab -->
				<tab name="Vehicle Info" class="mt-5">

					<!-- Bodywork -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Bodywork</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90 capitalize">
								{{ customOrder.bodywork }}
							</p>
						</div>
					</div>
					<!-- Vehicle Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vehicle Name</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.vehicle.name }}
							</p>
						</div>
					</div>

					<!-- Vehicle Model  Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">
								Vehicle Model Name
							</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.vehicleModel.name }}
							</p>
						</div>
					</div>

					<!-- Vehicle Manufacturar Year -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">
								Vehicle Manufacturar Year
							</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.vehicleManufactureYear }}
							</p>
						</div>
					</div>

					<!--vehicle Color -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vehicle Color</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<span class="inline-block w-8 h-8" :style="{
                                    'background-color':
                                        customOrder.vehicleColor,
                                }"></span>
						</div>
					</div>

					<!-- Range From -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Range From</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.rangeFromFormatted }}
							</p>
						</div>
					</div>

					<!-- Range To-->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Range To</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{ customOrder.rangeToFormatted }}
							</p>
						</div>
					</div>

					<!--vehicle Note -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Vehicle Note</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ customOrder.vehicleNote }}</p>
						</div>
					</div>

					<!-- Images -->
					<div class="flex -mx-6 px-6 pb-4">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Images</h4>
						</div>
						<div class="w-3/4 vehicle-show-img">
							<img v-for="(
                                    media, index
                                ) in customOrder.vehiclePhotoUrls" :key="index" :src="media.url" />
						</div>
					</div>
				</tab>

				<!-- Third  Tab -->
				<tab name="Design Info" class="mt-5">
					<!-- Colors -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Colors</h4>
						</div>
						<div class="w-3/4 py-4 flex">
							<div v-for="(row, index) in customOrder.colors" :key="index" :style="{ 'background-color': row.code }" class="w-8 h-8 mr-4"></div>
						</div>
					</div>

					<!-- Products -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Products</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{
                                    customOrder.products
                                        .map((product) => product.name)
                                        .join(" , ")
                                }}
							</p>
						</div>
					</div>

					<!-- Tags -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Tags</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">
								{{
                                    customOrder.tags
                                        .map((tag) => tag.name)
                                        .join(" , ")
                                }}
							</p>
						</div>
					</div>

					<!-- Design Images -->
					<div class="flex -mx-6 px-6 pb-4">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">
								Reference Images
							</h4>
						</div>
						<div class="w-3/4 vehicle-show-img">
							<img v-for="(
                                    media, index
                                ) in customOrder.referenceDesignUrls" :key="index" :src="media.url" />
						</div>
					</div>
				</tab>

				<!-- Forth Tab -->
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
	name: "custom-show",

	props: {
		customOrder: Object,
		colors: Array,
	},
	components: {
		Feedback,
	},
};
</script>

<style lang="scss" scoped>
.vehicle-show-img {
	display: flex;
	flex-wrap: wrap;

	img {
		object-fit: contain;
		height: 150px;
		width: 200px;
		padding: 10px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		margin-right: 1rem;
		margin-top: 1rem;
	}
}
</style>

