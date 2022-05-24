<template>
  <div class="mb-3">
    <!-- comment box -->
    <form @submit.prevent="postComment" v-if="$auth.loggedIn">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mt-5">
          <textarea v-model="comment" class="form-control" rows="3"></textarea>
          <button type="submit" class="btn btn-primary px-4 mt-3">Send</button>
        </div>
      </div>
    </form>

    <div v-if="allComments">
      <!-- comment devider -->
      <div
        v-if="allComments.length > 0"
        class="row justify-content-center px-0 mt-5"
      >
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <h5 class="mb-0">All Comments</h5>
          <hr class="mt-2" />
        </div>
      </div>

      <!-- Single comment -->
      <div
        class="row justify-content-center"
        v-for="(singleComment, index) in allComments"
        :key="index"
      >
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mt-3">
          <div class="card">
            <div
              class="
                card-header
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="mb-0">{{ singleComment.customer.name }}</h6>
              <i
                v-if="$auth.user.id == singleComment.customerId"
                @click="delComment(singleComment.id, index)"
                class="fa fa-trash text-sm"
                style="cursor: pointer"
              ></i>
            </div>
            <div class="card-body">
              <p>{{ singleComment.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComment",
  data() {
    return {
      comment: null,
      allComments: null
    };
  },

  methods: {
    async postComment() {
      await this.$axios.$post(`/comments/${this.$route.params.id}`, {
        comment: this.comment
      });
      this.comment = null;
      this.loadComments();
    },

    async delComment(id, index) {
      await this.$axios.$delete(`/comments/${id}`);
      this.allComments.splice(index, 1);
    },

    async loadComments() {
      const resComments = await this.$axios.$get(
        `/comments/${this.$route.params.id}`
      );
      this.allComments = resComments.data;
    }
  },

  async fetch() {
    const resComments = await this.$axios.$get(
      `/comments/${this.$route.params.id}`
    );
    this.allComments = resComments.data;
  }
};
</script>

<style lang="scss" scoped></style>
