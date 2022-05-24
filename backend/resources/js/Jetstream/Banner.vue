<template>
	<div>
		<div class="rounded-md mb-4" :class="{ 'bg-green-500': style == 'success', 'bg-red-500': style == 'danger' }" v-if="show && message">
			<div class="py-2 px-3 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between flex-wrap">
					<div class="w-0 flex-1 flex items-center min-w-0">
						<span class="flex p-2 rounded-lg" :class="{ 'bg-green-600': style == 'success', 'bg-red-600': style == 'danger' }">
							<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="style == 'success'">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>

							<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="style == 'danger'">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
							</svg>
						</span>

						<p class="ml-3 font-medium text-sm text-white truncate">{{ message }}</p>
					</div>

					<div class="flex-shrink-0 sm:ml-3">
						<button type="button" class="-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition" :class="{ 'hover:bg-green-600 focus:bg-green-600': style == 'success', 'hover:bg-red-600 focus:bg-red-600': style == 'danger' }" aria-label="Dismiss" @click.prevent="show = false">
							<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div v-if="Object.keys($page.props.errors).length > 0 && show" class="mb-4 flex items-center justify-between bg-red-500 rounded-md">
			<div class="flex items-center">
				<svg class="fill-current ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
				</svg>

				<div class="py-4 text-white text-sm font-medium">
					<span v-if="Object.keys($page.props.errors).length === 1">There is one form error.</span>
					<span v-else>There are {{ Object.keys($page.props.errors).length }} form errors.</span>
				</div>
			</div>
			<button type="button" class="group mr-2 p-2" @click="show = false">
				<svg class="block fill-current w-2 h-2 text-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908">
					<path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: true,
		};
	},

	computed: {
		style() {
			return this.$page.props.jetstream.flash?.bannerStyle || "success";
		},

		message() {
			return this.$page.props.jetstream.flash?.banner || "";
		},
	},
};
</script>
