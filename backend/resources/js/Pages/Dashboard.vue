<template>
	<div class="">
		<div class="grid md:grid-cols-3 gap-4">
			<dashboard-card>
				<template #title>Total Orders ({{currentMonth}})</template>
				<span>
					{{totalOrder}}
				</span>
				<template #link>
					<inertia-link class="hover:underline" :href="route('orders.index')">Read More</inertia-link>
				</template>
			</dashboard-card>
			<dashboard-card>
				<template #title>Color Change ({{currentMonth}})</template>
				<span>
					{{totalColorChange}}
				</span>
				<template #icon><i class="ti-paint-roller"></i></template>
				<template #link>
					<inertia-link class="hover:underline" :href="route('color-changes.index')">Read More</inertia-link>
				</template>
			</dashboard-card>
			<dashboard-card>
				<template #title>Preview Design ({{currentMonth}})</template>
				<span>
					{{totalPreviewDesign}}
				</span>
				<template #icon>
					<preview-icon class="h-14"></preview-icon>
				</template>
				<template #link>
					<inertia-link class="hover:underline" :href="route('preview-designs.index')">Read More</inertia-link>
				</template>
			</dashboard-card>

			<dashboard-card>
				<template #title>Color Change (Pending)</template>
				<span>
					{{pendingColorChange}}
				</span>
				<template #icon><i class="ti-paint-roller"></i></template>
				<template #link>
					<inertia-link class="hover:underline" :href="route('color-changes.index')">Read More</inertia-link>
				</template>
			</dashboard-card>
			<dashboard-card>
				<template #title>Preview Design (Pending)</template>
				<span>
					{{pendingPreviewDesign}}
				</span>
				<template #icon>
					<preview-icon class="h-14"></preview-icon>
				</template>
				<template #link>
					<inertia-link class="hover:underline" :href="route('preview-designs.index')">Read More</inertia-link>
				</template>
			</dashboard-card>

			<dashboard-card>
				<template #title>Message (Unanswered)</template>
				<span>
					{{unansweredMessage}}
				</span>
				<template #icon><i class="ti-email"></i></template>
				<template #link>
					<inertia-link class="hover:underline" :href="route('contacts.index')">Read More</inertia-link>
				</template>
			</dashboard-card>

		</div>

		<!-- Letest Order & Comment section -->
		<div class="mt-6 grid md:grid-cols-2 gap-4">
			<!-- Latest Orders -->
			<div>
				<div class="font-bold uppercase mb-2 ml-2">
					Latest Orders
				</div>
				<div class="bg-white overflow-hidden shadow sm:rounded-lg items-center">
					<ul>
						<li v-for="(row, index) in orders" :key="index">
							<inertia-link :href="route('orders.show', row.id)" class="flex border-b px-4 py-3">
								<div class="w-full items-center">
									<div class="">{{row.customer.name}}
										<div class="text-xs truncate w-full normal-case font-normal text-gray-500">Order Date: {{row.dateFormatted}}</div>
									</div>
								</div>
								<div class="w-full items-center">
									<div class="">Grand Total
										<div class="text-xs truncate w-full normal-case font-normal text-gray-500">{{row.grandTotalFormatted}}</div>
									</div>
								</div>

							</inertia-link>
						</li>
						<li>
							<inertia-link class="inline-block px-4 py-2 text-sm text-primary-500 hover:underline" :href="route('orders.index')">View All</inertia-link>
						</li>
					</ul>
				</div>
			</div>

			<!-- Latest Comments -->
			<div>
				<div class="font-bold uppercase mb-2 ml-2">
					Latest Comments
				</div>
				<div class="bg-white overflow-hidden shadow sm:rounded-lg items-center">
					<ul>
						<li v-for="(row, index) in comments" :key="index">
							<inertia-link :href="route('comments.show', row.id)" class="block border-b px-4 py-3">
								<div class="">{{row.customer.name}}</div>
								<div class="text-xs truncate normal-case font-normal text-gray-500 w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laborum quo blanditiis at quam itaque natus animi facere, voluptates odit unde, fugiat quos numquam laboriosam, dolor pariatur quidem dolorem nam a amet magni non sit placeat id! Eaque impedit explicabo atque vel voluptates excepturi! Facilis dolorum impedit omnis consequatur hic ipsa possimus illo placeat labore minima praesentium quas, excepturi temporibus recusandae. Vel dicta placeat ab omnis repellat, iure quidem mollitia libero, inventore atque nam eligendi nihil laboriosam id obcaecati cum at voluptas qui sequi. Sequi numquam ipsam temporibus repudiandae alias! Porro, officia praesentium labore quas molestias iure optio architecto ad officiis cupiditate sequi culpa perspiciatis iusto odio tempore rem, blanditiis doloremque rerum quis numquam libero ratione. Tempora officia perspiciatis voluptatum in iste repellendus quo quibusdam dolores atque adipisci doloribus veritatis magni eius, modi iusto at quisquam ullam, amet placeat animi nobis! Officia libero eos accusamus saepe quos? Fuga molestiae voluptate obcaecati veritatis earum ipsa reiciendis repudiandae dolorum assumenda velit. Beatae, assumenda! A veniam illo odit laborum qui unde possimus minima et blanditiis sit eum non, atque hic doloribus! Necessitatibus dicta autem ab ex ratione veniam molestiae accusamus odit magni magnam repellendus corrupti delectus ipsam placeat, perferendis velit quisquam tempora blanditiis.</div>
							</inertia-link>
						</li>
						<li>
							<inertia-link class="inline-block px-4 py-2 text-sm text-primary-500 hover:underline" :href="route('comments.index')">View All</inertia-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DashboardCard from "@/Widgets/DashboardCard";
import PreviewIcon from "@/Icons/PreviewIcon.vue";

export default {
	name: "Dashboard",
	props: [
		"totalOrder",
		"totalColorChange",
		"totalPreviewDesign",
		"currentMonth",
		"pendingColorChange",
		"pendingPreviewDesign",
		"unansweredMessage",
		"orders",
		"comments",
	],
	components: {
		DashboardCard,
		PreviewIcon,
	},
};
</script>
