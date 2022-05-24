<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">Coupon Details: {{ coupon.name }}</h1>
				</div>
				<!-- Route Link for coupon -->
				<div class="items-center">
					<inertia-link class="btn btn-primary mr-2" :href="route('coupons.edit', coupon.id)" v-if="coupon.status=='unpublished'">
						<i class="ti-pencil-alt"></i>
					</inertia-link>

					<inertia-link class="btn btn-primary mr-2" :href="route('coupons.index')">
						<i class="ti-arrow-left"></i>
					</inertia-link>
				</div>
			</div>
		</div>
	</div>

	<!-- Coupon Show -->
	<div class="max-w-5xl divide-y divide-gray-200">
		<div class="bg-white mb-6 py-4 px-6 rounded-md">
			<!-- ID -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">ID</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.id }}</p>
				</div>
			</div>

			<!-- Name -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Name</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.name }}</p>
				</div>
			</div>

			<!-- Code-->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Code</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.code }}</p>
				</div>
			</div>

			<!-- Coupon Amount -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Coupon Amount</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.amount }}</p>
				</div>
			</div>

			<!-- Description -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Description</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.description }}</p>
				</div>
			</div>

			<!-- Start From -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Start From</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.startFrom }}</p>
				</div>
			</div>

			<!-- Available From -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Available From</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.availableFrom }}</p>
				</div>
			</div>

			<!-- Available To -->
			<div class="flex border-b -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Available To</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ coupon.availableTo }}</p>
				</div>
			</div>

			<!-- Status -->
			<div class="flex -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Status</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="badge" :class="[coupon.status == 'published'? 'bg-green-500': 'bg-yellow-500',]">
						{{ coupon.status }}
					</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	props: {
		coupon: Object,
	},
};
</script>

