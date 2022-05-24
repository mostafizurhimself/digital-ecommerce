<template>
    <div>
        <jet-card-section @submitted="save">
            <template #title>Feature Section</template>
            <template #description>Change home page features content.</template>
            <template #action>
                <jet-button type="button" @click="addFeature">Add Feature</jet-button>
            </template>

            <!-- Feature list -->
            <template #card>
                <table class="w-full divide-y divide-gray-200" v-if="$page.props.features.length">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >Content</th>

                            <th
                                scope="col"
                                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                            >Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(feature, index) in $page.props.features" :key="index">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="bg-gray-100">
                                        <img
                                            class="h-16 w-32 object-contain"
                                            :src="feature.primaryMediaUrl"
                                            alt
                                        />
                                    </div>
                                    <div class="ml-4">
                                        <div
                                            class="text-sm font-medium text-gray-900"
                                        >{{feature.title}}</div>
                                        <div class="text-sm text-gray-500">{{feature.subtitle}}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <jet-button type="button" class="mr-2" @click="editFeature(index)">
                                    <i class="ti-pencil-alt"></i>
                                </jet-button>

                                <jet-danger-button @click="deleteFeature(index)">
                                    <i class="ti-trash"></i>
                                </jet-danger-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-center items-center text-gray-600 h-32" v-else>
                    <span>No Feature Added</span>
                </div>
            </template>
        </jet-card-section>

        <!-- Add feature modal -->
        <jet-dialog-modal :show="showDialog" @close="closeModal">
            <template #title>Add Feature</template>

            <template #content>
                <div class="mt-4">
                    <jet-label for="title" value="Title" />
                    <jet-input
                        type="text"
                        class="mt-1 block w-full"
                        ref="title"
                        v-model="form.title"
                    />

                    <jet-input-error :message="form.errors.title" class="mt-2" />
                </div>

                <div class="mt-4">
                    <jet-label for="subtitle" value="Subtitle" />
                    <jet-input
                        type="text"
                        class="mt-1 block w-full"
                        ref="subtitle"
                        v-model="form.subtitle"
                    />

                    <jet-input-error :message="form.errors.subtitle" class="mt-2" />
                </div>

                <div class="mt-4">
                    <jet-label for="icon" value="Icon" />
                    <jet-image-input :url="form.iconUrl" @change="handleIconChange"></jet-image-input>
                     <small class="mt-1 font-thin text-gray-400">* Icon should be minimum 256x144 px. Maximum file size: 5MB/5120KB. </small>
                    <jet-input-error :message="form.errors.icon" class="mt-2" />
                </div>
            </template>

            <template #footer>
                <jet-secondary-button @click="closeModal">Cancel</jet-secondary-button>

                <jet-button
                    class="ml-2"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="save"
                >Save</jet-button>
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
                title: null,
                subtitle: null,
                icon: null,
                iconUrl: null,
            }),

            showDialog: false,
            edit: false,
        };
    },

    methods: {
        addFeature() {
            this.edit = false;
            this.form.reset();
            this.showDialog = true;
        },
        save() {
            if (this.edit) {
                this.form.put(route("features.update", this.form.id), {
                    onSuccess: () => {
                        this.edit = false;
                        this.closeModal();
                        this.form.reset();
                    },
                });
            } else {
                this.form.post(route("features.store"), {
                    onSuccess: () => {
                        this.closeModal();
                        this.form.reset();
                    },
                });
            }
        },
        handleIconChange(file) {
            this.form.icon = file;
        },
        closeModal() {
            this.showDialog = false;
        },

        editFeature(index) {
            this.showDialog = true;
            this.edit = true;
            this.form.id = this.$page.props.features[index].id;
            this.form.title = this.$page.props.features[index].title;
            this.form.subtitle = this.$page.props.features[index].subtitle;
            this.form.iconUrl =
                this.$page.props.features[index].primaryMediaUrl;
        },
        deleteFeature(index) {
            this.form.delete(
                route("features.destroy", this.$page.props.features[index].id)
            );
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
