<template>
	<div>
		<jet-card-section @submitted="save">
			<template #title>Faq Section</template>
			<template #description>Change FAQ page content.</template>
			<template #action>
				<jet-button type="button" @click="addFaq">Add Faq</jet-button>
			</template>

			<!-- Feature list -->
			<template #card>
				<table class="w-full divide-y divide-gray-200" v-if="$page.props.faqs.length">
					<thead class="bg-gray-50">
						<tr>
							<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
							<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Question</th>
							<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Answer</th>

							<th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						<tr v-for="(faq, index) in $page.props.faqs" :key="index">
							<td class="px-6 py-4 whitespace-nowrap capitalize">{{ beautify(faq.type)}}</td>
							<td class="px-6 py-4 whitespace-nowrap truncate" style="max-width:50px">{{ faq.question}}</td>
							<td class="px-6 py-4 whitespace-nowrap truncate" style="max-width: 150px">{{ faq.answer}}</td>

							<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
								<jet-button type="button" class="mr-2" @click="editFaq(index)">
									<i class="ti-pencil-alt"></i>
								</jet-button>

								<jet-danger-button @click="deleteFaq(faq.id)">
									<i class="ti-trash"></i>
								</jet-danger-button>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="flex justify-center items-center text-gray-600 h-32" v-else>
					<span>No Faq Added</span>
				</div>
			</template>
		</jet-card-section>

		<!-- Add FAQ modal -->
		<jet-dialog-modal :show="showDialog" @close="closeModal">
			<template #title>Add Faq</template>

			<template #content>
				<!-- Type -->
				<div class="col-span-6 sm:col-span-4">
					<jet-label for="type" value="Faq Type" />
					<jet-select track="value" :options="$page.props.faqTypes" v-model="form.type" autocomplete="off" />
					<jet-input-error :message="form.errors.type" class="mt-2" />
				</div>
				<!-- Question -->
				<div class="mt-4">
					<jet-label for="title" value="Faq Question" />
					<jet-input type="text" class="mt-1 block w-full" ref="title" v-model="form.question" />
					<jet-input-error :message="form.errors.question" class="mt-2" />
				</div>
				<!-- Answer -->
				<div class="col-span-6 sm:col-span-4 mt-4">
					<jet-label for="description" value="Answer" />
					<jet-text-input id="description" type="text" class="mt-1 block w-full" v-model="form.answer" ref="description" autocomplete="description" />
					<jet-input-error :message="form.errors.answer" class="mt-2" />
				</div>

			</template>
			<!-- Modal footer -->
			<template #footer>
				<jet-secondary-button @click="closeModal">Cancel</jet-secondary-button>
				<jet-button class="ml-2" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="save">Save</jet-button>
			</template>
		</jet-dialog-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: this.$inertia.form({
				id: null,
				type: null,
				question: null,
				answer: null,
			}),

			showDialog: false,
			edit: false,
		};
	},

	methods: {
		addFaq() {
			this.edit = false;
			this.form.reset();
			this.showDialog = true;
		},
		beautify(value) {
			return value.replaceAll("_", " ");
		},
		save() {
			if (this.edit) {
				this.form.put(route("faqs.update", this.form.id), {
					onSuccess: () => {
						this.edit = false;
						this.closeModal();
						this.form.reset();
					},
				});
			} else {
				this.form.post(route("faqs.store"), {
					onSuccess: () => {
						this.closeModal();
						this.form.reset();
					},
				});
			}
		},

		closeModal() {
			this.showDialog = false;
		},

		editFaq(index) {
			this.showDialog = true;
			this.edit = true;
			this.form.id = this.$page.props.faqs[index].id;
			this.form.type = this.$page.props.faqs[index].type;
			this.form.question = this.$page.props.faqs[index].question;
			this.form.answer = this.$page.props.faqs[index].answer;
		},

		deleteFaq(id) {
			this.deleteResource(route("faqs.destroy", id));
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
