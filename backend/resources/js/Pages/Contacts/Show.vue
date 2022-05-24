<template>
	<div>
		<div class="max-w-5xl divide-y divide-gray-200">
			<div class="flex justify-between py-3 rounded-md">
				<div>
					<h1 class="truncate text-90 font-normal text-2xl">Message Details : {{contact.id }}</h1>
				</div>
				<!-- Route Link -->
				<div class="items-center">
					<inertia-link class="btn btn-primary mr-2" :href="route('contacts.index')">
						<i class="ti-arrow-left"></i>
					</inertia-link>
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
					<p class="text-90">{{ contact.id }}</p>
				</div>
			</div>

			<!-- Name -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Name</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{ contact.name }}</p>
				</div>
			</div>

			<!-- Email -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Email</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{contact.email}}</p>
				</div>
			</div>

			<!-- Subject -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Subject</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{contact.subject}}</p>
				</div>
			</div>

			<!-- Message -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Message</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{contact.message}}</p>
				</div>
			</div>

			<!-- Reply -->
			<div class="flex border-b border-40 -mx-6 px-6" v-if="contact.answered">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Reply</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p class="text-90">{{contact.reply}}</p>
				</div>
			</div>

			<!-- Answered -->
			<div class="flex border-b border-40 -mx-6 px-6">
				<div class="w-1/4 py-4">
					<h4 class="font-normal text-80">Answered</h4>
				</div>
				<div class="w-3/4 py-4 break-words">
					<p :class="[contact.answered == true ? 'text-green-500': 'text-red-500',]">
						<spna v-if="contact.answered">Yes</spna>
						<spna v-else>No</spna>
					</p>
				</div>
			</div>

			<form @submit.prevent="reply" v-if="!contact.answered">
				<!-- Reply -->
				<div class="flex -mx-6 px-6">
					<div class="w-1/4 py-4">
						<h4 class="font-normal text-80">Reply</h4>
					</div>
					<div class="w-3/4 py-4 break-words">
						<jet-text-input v-model="form.reply" class="w-full"></jet-text-input>
						<jet-input-error :message="form.errors.reply" class="mt-2" />
					</div>
				</div>
				<div class="flex items-center justify-end">
					<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
				</div>
			</form>

		</div>
	</div>

</template>

<script>
export default {
	name: "contact-show",
	props: {
		contact: Object,
	},
	data() {
		return {
			form: this.$inertia.form({
				reply: null,
			}),
		};
	},
	methods: {
		reply() {
			this.form.post(this.route("contacts.reply", this.contact.id));
		},
	},
};
</script>

