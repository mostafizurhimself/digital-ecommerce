<template>
  <div class="cookie-modal shadow" v-if="show">
    <span role="button" class="close" @click="showModal=false">&#10006;</span>
    <div class="cookie-modal__body">
      <p class="text-sm font-weight-bold">Site Cookies</p>
      <div class="d-flex flex-column flex-md-row align-items-center">
        <p style="font-size: 14px" class="text-justify">
          We use cookies to improve your experience on our site and to show you relevant advertising.
          By continuing to browse the site you are agreeing to our use of cookies. Tap
          <a class="text-primary" href="/pdf/wrapmotif-cookie-policy.pdf" target="_blank">here</a> for more details.
        </p>
        <div class="pt-4 pt-md-0 pl-md-4">
          <button class="btn btn-primary rounded-pill px-4" @click="acceptCookie">Accept</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			showModal: true,
		};
	},
	computed: {
		show() {
			const accepted = this.$cookies.get("accept-cookie");
			return this.showModal && !accepted;
		},
	},
	methods: {
		acceptCookie() {
			this.$cookies.set("accept-cookie", true, {
				path: "/",
				maxAge: 60 * 60 * 24 * 30,
			});
			this.showModal = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.cookie-modal {
	width: 50%;
	z-index: 10000;
	background: white;
	position: fixed;
	bottom: 50px;
	left: 50%;
	border-radius: 20px;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: center;

	.close {
		position: absolute;
		right: 1rem;
		top: 10px;
		font-size: 1rem;
	}

	&__body {
		padding: 1.5rem;
	}
}
</style>