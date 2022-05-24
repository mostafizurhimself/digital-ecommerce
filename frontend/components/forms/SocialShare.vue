<template>
  <div>
    <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :style="{ backgroundColor: network.color }"
      :url="link"
      :media="sharingProduct.thumbnailMediaUrl"
      :title="title"
      :description="sharingProduct.note"
      :quote="sharingProduct.description"
      class="py-2 px-3 text-white rounded-lg d-block mb-1 mx-2"
    >
      <i :class="network.icon"></i>
      <span class="ml-1">{{ network.name }}</span>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  props: {
    link: {
      type: String
    },
    sharingProduct: {
      type: Object
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      sharing: {
        quote: "The hot reload is so fast it's near instant. - Evan You"
      },
      networks: [
        {
          network: "email",
          name: "Email",
          icon: "fas fa-envelope",
          color: "#333333"
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fa-facebook-square",
          color: "#1877f2"
        }
      ]
    };
  }
};
</script>
