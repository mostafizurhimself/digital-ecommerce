<template>
  <form-view @submitted="save">
    <template #title>Create Table</template>
    <template #form>
        <!-- Name -->
      <div class="mb-4">
        <jet-label for="name" value="Name" />
        <jet-input
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          ref="name"
          autocomplete="name"
        />
        <jet-input-error :message="form.errors.name" class="mt-2" />
      </div>

    <!-- Description -->
      <div class="mb-4">
        <jet-label for="description" value="Description" />
        <jet-text-input
          id="description"
          type="text"
          class="mt-1 block w-full"
          v-model="form.description"
          ref="description"
          autocomplete="description"
          rows="8"
        />
        <jet-input-error :message="form.errors.description" class="mt-2" />
      </div>


    </template>

    <template #actions>
      <inertia-link
        :href="route('vehicles.index')"
        class="btn btn-secondary mr-4"
        >Cancel</inertia-link
      >
      <jet-button
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
        >Save</jet-button
      >
    </template>
  </form-view>
</template>

<script>
export default {
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        description: null,
      }),
    };
  },

  methods: {
    save() {
      this.form.post(route("vehicles.store"));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
