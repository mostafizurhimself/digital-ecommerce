<template>
    <div>
        <jet-card-section @submitted="save">
            <template #title>Slider Section</template>
            <template #description>Change your design page slider content.</template>
            <template #action>
                <jet-button type="button" @click="addSlide">Add Slide</jet-button>
            </template>

            <!-- Slider list -->
            <template #card>
                <div class="overflow-x-auto" v-if="$page.props.slider && $page.props.slider.slides?.length">
                    <table class="w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="w-52 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                >Image</th>

                                <th
                                    scope="col"
                                    class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                >Title</th>

                                <th
                                    scope="col"
                                    class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                >Subtitle</th>

                                <th
                                    scope="col"
                                    class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                >Button Text</th>

                                <th
                                    scope="col"
                                    class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                                >Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(slide, index) in $page.props.slider.slides" :key="index">
                                <td class="px-4 py-4">
                                    <div class="flex justify-center bg-gray-100 py-4 items-center">
                                        <img
                                            class="h-16 w-32 object-contain"
                                            :src="slide.url"
                                            alt
                                        />
                                    </div>
                                </td>
                                <td class="px-4 py-4">{{slide.title}}</td>
                                <td class="px-4 py-4">{{slide.subtitle}}</td>
                                <td class="px-4 py-4">
                                    <a target="_blank" :href="slide.btnLink">
                                       {{slide.btnText}}
                                    </a>
                                </td>
                                <td
                                    class="px-4 py-4 text-right text-sm font-medium whitespace-nowrap"
                                >
                                    <jet-button
                                        type="button"
                                        class="mr-2"
                                        @click="editSlide(index)"
                                    >
                                        <i class="ti-pencil-alt"></i>
                                    </jet-button>

                                    <jet-danger-button @click="deleteSlide(index)">
                                        <i class="ti-trash"></i>
                                    </jet-danger-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-center items-center text-gray-600 h-32" v-else>
                    <span>No Slider Added</span>
                </div>
            </template>
        </jet-card-section>

        <!-- Add slider modal -->
        <jet-dialog-modal :show="showDialog" @close="closeModal">
            <template #title>Add Slider</template>

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
                    <jet-label for="btnText" value="Button Text" />
                    <jet-input
                        type="text"
                        class="mt-1 block w-full"
                        ref="btnText"
                        v-model="form.btnText"
                    />

                    <jet-input-error :message="form.errors.btnText" class="mt-2" />
                </div>

                <!-- Button Link -->
                <div class="mt-4">
                    <jet-label for="btnLink" value="Button Link" />
                    <jet-input
                        type="text"
                        class="mt-1 block w-full"
                        ref="btnLink"
                        v-model="form.btnLink"
                    />

                    <jet-input-error :message="form.errors.btnLink" class="mt-2" />
                </div>
                <!-- Image -->
                <div class="mt-4">
                    <jet-label for="image" value="Image" />
                    <jet-image-input :url="form.imageUrl" @change="handleImageChange"></jet-image-input>
                     <small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.</small>
                    <jet-input-error :message="form.errors.image" class="mt-2" />
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
                btnText: null,
                btnLink: null,
                image: null,
                imageUrl: null,
            }),
            showDialog: false,
            edit: false,
        };
    },

    methods: {
        addSlide() {
            this.edit = false;
            this.form.reset();
            this.showDialog = true;
        },
        save() {
            if (this.edit) {
                this.form.post(
                    route("appearance.designs.slider.edit", this.form.id),
                    {
                        onSuccess: () => {
                            this.edit = false;
                            this.closeModal();
                            this.form.reset();
                        },
                    }
                );
            } else {
                this.form.post(route("appearance.designs.slider"), {
                    onSuccess: () => {
                        this.closeModal();
                        this.form.reset();
                    },
                });
            }
        },
        handleImageChange(image) {
            this.form.image = image;
        },
        closeModal() {
            this.showDialog = false;
        },

        editSlide(index) {
            this.showDialog = true;
            this.edit = true;
            this.form.id = this.$page.props.slider.slides[index].id;
            this.form.title = this.$page.props.slider.slides[index].title;
            this.form.subtitle =
                this.$page.props.slider.slides[index].subtitle;
            this.form.btnText =
                this.$page.props.slider.slides[index].btnText;
            this.form.btnLink =
                this.$page.props.slider.slides[index].btnLink;
            this.form.imageUrl =
                this.$page.props.slider.slides[index].url;
        },
        deleteSlide(index) {
            this.form.delete(
                route(
                    "appearance.designs.slider.delete",
                    this.$page.props.slider.slides[index].id
                )
            );
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
