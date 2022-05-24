<template>
	<div class="sidebar h-screen absolute lg:relative bg-gray-900 transform -translate-x-full lg:translate-x-0 transition lg:transition-none duration-500 ease-in-out z-20 overflow-x-hidden" :class="{ expanded: expanded }">
		<div class="sidebar__header">
			<inertia-link class="flex items-center px-4" :href="route('dashboard')">
				<jet-application-mark class="block h-8 mr-2" />

				<span class="text-lg w-5 font-bold text-white">
					Digital Ecommerce
				</span>
			</inertia-link>
		</div>

		<ul class="overflow-y-auto">
			<sidebar-item :href="route('dashboard')" :active="route().current('dashboard')">
				<i class="ti-home text-lg w-5 mr-4"></i>
				<span>Dashboard</span>
			</sidebar-item>

			<h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
				Resources
			</h4>

			<!-- Product -->
			<sidebar-item :href="route('products.index')" :active="route().current('products.*')">
				<i class="ti-package text-lg w-5 mr-4"></i>
				<span>Products</span>
			</sidebar-item>

			<!-- Categories -->
			<sidebar-item :href="route('categories.index')" :active="route().current('categories.*')">
				<i class="ti-list text-lg w-5 mr-4"></i>
				<span>Categories</span>
			</sidebar-item>

			<!-- Tags -->
			<sidebar-item :href="route('tags.index')" :active="route().current('tags.*')">
				<i class="ti-tag text-lg w-5 mr-4"></i>
				<span>Tags</span>
			</sidebar-item>

			<!-- Colors -->
			<sidebar-item :href="route('colors.index')" :active="route().current('colors.*')">
				<i class="ti-view-grid text-lg w-5 mr-4"></i>
				<span>Colors</span>
			</sidebar-item>

			<!-- Vehicles -->
			<sidebar-item :href="route('vehicles.index')" :active="route().current('vehicles.*')">
				<i class="ti-car text-lg w-5 mr-4"></i>
				<span>Vehicles</span>
			</sidebar-item>

			<!-- Messages -->
			<sidebar-item :href="route('contacts.index')" :active="route().current('contacts.*')">
				<i class="ti-email text-lg w-5 mr-4"></i>
				<span>Messages</span>
			</sidebar-item>

			<!-- Comments -->
			<sidebar-item :href="route('comments.index')" :active="route().current('comments.*')">
				<i class="ti-comments text-lg w-5 mr-4"></i>
				<span>Comments</span>
			</sidebar-item>

			<!-- Coupons -->
			<sidebar-item :href="route('coupons.index')" :active="route().current('coupons.*')">
				<i class="ti-credit-card text-lg w-5 mr-4"></i>
				<span>Coupons</span>
			</sidebar-item>

			<!--  People -->
			<h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
				Peoples
			</h4>
			<!-- Users -->
			<sidebar-item :href="route('users.index')" :active="route().current('users.*')">
				<i class="ti-user text-lg w-5 mr-4"></i>
				<span>Users</span>
			</sidebar-item>

			<!-- Customer -->
			<sidebar-item :href="route('customers.index')" :active="route().current('customers.*')">
				<customer-icon class="h-6 w-5 mr-4"></customer-icon>
				<span>Customers</span>
			</sidebar-item>

			<!-- Partners -->
			<sidebar-item :href="route('companies.index')" :active="route().current('companies.*')">
				<partner-icon class="h-6 mr-4"></partner-icon>
				<span>Partners</span>
			</sidebar-item>

			<!--  Earnings -->
			<h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
				Earnings
			</h4>
			<!-- Orders -->
			<sidebar-item :href="route('orders.index')" :active="route().current('orders.*')">
				<i class="ti-shopping-cart text-lg w-5 mr-4"></i>
				<span>Orders</span>
			</sidebar-item>

			<sidebar-item :href="route('custom-orders.index')" :active="route().current('custom-orders.*')">
				<custom-order-icon class="w-5 mr-4"></custom-order-icon>
				<span>Custom Orders</span>
			</sidebar-item>

			<sidebar-item :href="route('color-changes.index')" :active="route().current('color-changes.*')">
				<i class="ti-paint-roller text-lg w-5 mr-4"></i>
				<span>Color Changes</span>
			</sidebar-item>

			<sidebar-item :href="route('preview-designs.index')" :active="route().current('preview-designs.*')">
				<preview-icon class="w-5 mr-4"></preview-icon>
				<span>Preview Designs</span>
			</sidebar-item>

			<!--  Appearance -->
			<h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
				Appearance
			</h4>

			<!--Home Page  -->
			<sidebar-item :href="route('appearance.home')" :active="route().current('appearance.home')">
				<i class="ti-ruler-pencil text-lg w-5 mr-4"></i>
				<span>Home Page</span>
			</sidebar-item>

			<!-- Design page -->
			<sidebar-item :href="route('appearance.designs')" :active="route().current('appearance.designs')">
				<i class="ti-palette text-lg w-5 mr-4"></i>
				<span>Design Page</span>
			</sidebar-item>

			<!--Custom order page  -->
			<sidebar-item :href="route('appearance.custom-orders')" :active="route().current('appearance.custom-orders')">
				<custom-page-icon class="w-5 mr-4"></custom-page-icon>
				<span>Custom Page</span>
			</sidebar-item>

			<!-- Partner Page  -->
			<sidebar-item :href="route('appearance.partner')" :active="route().current('appearance.partner')">

				<partner-page-icon class="w-5 mr-4"></partner-page-icon>
				<span>Partner Page</span>
			</sidebar-item>

			<!-- Other page -->
			<sidebar-item :href="route('appearance.others')" :active="route().current('appearance.others')">
				<other-page-icon class="w-5 mr-4"></other-page-icon>
				<span>Other Page</span>
			</sidebar-item>

			<!-- Configuration -->
			<h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
				Configuration
			</h4>
			<!--Setting page  -->
			<sidebar-item :href="route('settings')" :active="route().current('settings')">
				<i class="ti-settings text-lg w-5 mr-4"></i>
				<span>Settings</span>
			</sidebar-item>

			<!-- Vat Settings -->
			<sidebar-item :href="route('vats.index')" :active="route().current('vats.index')">
				<i class="ti-stamp text-lg w-5 mr-4"></i>
				<span>Vat Settings</span>
			</sidebar-item>
		</ul>
	</div>

</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import SidebarItem from "@/Jetstream/SidebarItem";
import PartnerIcon from "@/Icons/PartnerIcon.vue";
import PreviewIcon from "@/Icons/PreviewIcon.vue";
import PartnerPageIcon from "@/Icons/PartnerPageIcon.vue";
import CustomerIcon from "@/Icons/CustomerIcon.vue";
import OtherPageIcon from "@/Icons/OtherPageIcon.vue";
import CustomOrderIcon from "@/Icons/CustomOrderIcon.vue";
import CustomPageIcon from "@/Icons/CustomPageIcon.vue";

export default {
	props: {
		expanded: {
			type: Boolean,
			required: true,
		},
	},
	components: {
		JetApplicationMark,
		SidebarItem,
		PartnerIcon,
		PreviewIcon,
		PartnerPageIcon,
		CustomerIcon,
		OtherPageIcon,
		CustomOrderIcon,
		CustomPageIcon,
	},
};
</script>

<style lang="scss">
.sidebar {
	width: 240px;
	min-width: 240px;

	&__header {
		height: 64px;
		display: flex;
		align-items: center;
	}
}

.expanded {
	@apply translate-x-0;
}
</style>
