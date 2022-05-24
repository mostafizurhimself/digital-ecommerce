<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">Comment Details : {{comment.id }}</h1>
				</div>
				<!-- Route Link -->
				<div class="items-center">
					<inertia-link class="btn btn-primary mr-2" :href="route('comments.index')">
						<i class="ti-arrow-left"></i>
					</inertia-link>
					<jet-danger-button @click="destroy(comment.id)">
						<i class="ti-trash"></i>
					</jet-danger-button>
				</div>
			</div>
		</div>
	</div>

	<!-- Customer Show -->
	<div class="max-w-5xl divide-y divide-gray-200">
		<div class="bg-white mb-6 py-4 px-6 rounded-md">
			<!-- Tabs -->

			<!-- ID -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">ID</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ comment.id }}</p>
				</div>
			</div>

			<!-- Customer -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Customer</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{comment.customer.name}}</p>
				</div>
			</div>

			<!-- Product -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Product</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{comment.commentable.name}}</p>
				</div>
			</div>

			<!-- Comment -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Comment</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{comment.comment}}</p>
				</div>
			</div>

			<!-- Commented At-->
			<div class="flex -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Commented At</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{comment.commentedAt}}</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: "comment-show",
	props: {
		comment: Object,
	},
	methods: {
		destroy(id) {
			this.deleteResource(route("comments.destroy", id));
		},
	},
};
</script>

