<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">Product Details: {{ product.name }}</h1>
				</div>
				<!-- Route Link for product -->
				<div class="items-center">
					<!-- Publish Status -->
					<button class="btn mr-2" :class="{'btn-success' : product.status == 'unpublished', 'btn-danger': product.status == 'published'}" @click="togglePublished(product.id)">
						<div class="flex items-center" v-if="product.status == 'unpublished'">
							<span>Ppublish</span>
						</div>

						<div class="flex items-center" v-else>
							<span>Unpublish</span>
						</div>
					</button>

					<inertia-link class="btn btn-primary mr-2" :href="route('products.edit', product.id)">
						<i class="ti-pencil-alt"></i>
					</inertia-link>

					<inertia-link class="btn btn-primary mr-2" :href="route('products.index')">
						<i class="ti-arrow-left"></i>
					</inertia-link>
				</div>
			</div>
		</div>
	</div>

	<!-- Product Show -->
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
							<p class="text-90">{{ product.id }}</p>
						</div>
					</div>

					<!-- Name -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Name</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.name }}</p>
						</div>
					</div>

					<!-- Price-->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Price</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">$ {{ product.price }}</p>
						</div>
					</div>

					<!-- Sku -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Sku</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.sku }}</p>
						</div>
					</div>

					<!-- Description -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Description</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.description }}</p>
						</div>
					</div>

					<!-- Note -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Note</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.note }}</p>
						</div>
					</div>

					<!-- Print Data Format -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Print Data Format</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.printDataFormat }}</p>
						</div>
					</div>

					<!-- Recommended Material-->
					<div class="flex -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Recommended Material:</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.recommendedMaterial }}</p>
						</div>
					</div>
				</tab>

				<!-- Second Tab -->
				<tab name="Others" class="mt-5">
					<!-- category -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Category</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.category.name }}</p>
						</div>
					</div>

					<!-- Color -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Color</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.color.name }}</p>
						</div>
					</div>

					<!-- Tags -->
					<div class="flex border-b -mx-6 px-6">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Tags</h4>
						</div>
						<div class="w-3/4 py-4 break-words">
							<p class="text-90">{{ product.tags.map(tag => tag.name).join(", ") }}</p>
						</div>
					</div>

					<!-- Images -->
					<div class="flex border-b -mx-6 px-6 pb-4">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Images</h4>
						</div>
						<div class="w-3/4 product-show-img">
							<img v-for="(media, index) in product.mediaCollection" :key="index" :src="media.url" />
						</div>
					</div>

					<!-- Thumbbnail -->

					<div class="flex border-b -mx-6 px-6 pb-4">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80"> Thumbnail</h4>
						</div>
						<div class="w-3/4 product-show-img">
							<img :src="product.thumbnailMediaUrl" />
						</div>
					</div>

					<!-- Downloadable -->
					<div class="flex flex-wrap">
						<div class="w-1/4 py-4">
							<h4 class="font-normal text-80">Downloadable</h4>
						</div>
						<div class="mt-2 w-3/4 py-4 break-words" v-if="product.downloadableMediaUrl">
							<a target="_blank" class="text-primary-500 hover:underline" :href="product.downloadableMediaUrl">{{product.downloadableMedia.name}}</a>
						</div>
					</div>

				</tab>
			</tabs>
		</div>
	</div>
</template>

<script>
import Button from "../../Jetstream/Button.vue";
export default {
	components: { Button },
	props: {
		product: Object,
	},

	methods: {
		togglePublished(id) {
			this.$swal
				.fire({
					title: "Are you sure?",
					text: "",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#EF4444",
					confirmButtonText: "Yes, do it!",
					cancelButtonText: "Cancel",
				})
				.then((result) => {
					if (result.isConfirmed) {
						this.$inertia.post(
							this.route("products.published", id)
						);
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.product-show-img {
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
