<template>
	<div>
		<form @submit.prevent="login">
			<div class="row">
				<div class="col-12">
					<input-field label="Your Email" v-model="form.email" type="email" :error="validationErrors.email" required></input-field>
				</div>

				<div class="col-12">
					<input-field label="Your Password" type="password" v-model="form.password" :error="validationErrors.password" required></input-field>
				</div>
			</div>

			<div class="p-0 form-check d-flex align-items-center justify-content-between">
				<label class="form-check-label ml-4" for="exampleCheck1">Remember Password
				</label>
				<input type="checkbox" class="form-check-input ml-1 mt-0" id="exampleCheck1" />
				<span class="d-block forgot-pass"><a href="Javascript.void(0)">I forgot my password</a></span>
			</div>
			<!-- Buttons -->
			<div class="d-flex justify-content-center mt-3">
				<button-field class="px-4" label="Login"></button-field>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		redirectUrl: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			form: {
				email: null,
				password: null,
			},
		};
	},

	computed: {
		...mapGetters({
			validationErrors: "validation/validationErrors",
		}),
	},

	methods: {
		async login() {
			this.errMsg = null;
			try {
				await this.$auth.loginWith("local", { data: this.form });
				this.$router.push(this.redirectUrl);
			} catch (error) {
				if (error.response.status === 401) {
					this.$toast.error("Email or Password doesn't match");
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
