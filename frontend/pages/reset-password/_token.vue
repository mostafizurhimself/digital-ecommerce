<template>
	<div class="container my-5">
		<div class="row align-items-center justify-content-center">
			<div class="col-12 col-md-8 col-lg-6">
				<div class="card card-default">
					<h6 class="card-header">Reset Password</h6>
					<div class="card-body">
						<form autocomplete="off" @submit.prevent="resetPassword">
							<div class="form-group mb-2">
								<input-field type="email" label="Your Email" v-model="email" :error="validationErrors.email"></input-field>
							</div>
							<div class="form-group mb-2">
								<input-field type="password" label="Password" v-model="password" :error="validationErrors.password"></input-field>
							</div>
							<div class="form-group">
								<input-field type="password" label="Confirm Password" v-model="password_confirmation"></input-field>
							</div>
							<button type="submit" class="btn btn-primary mt-3">Update</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	layout: "auth",
	data() {
		return {
			token: null,
			email: null,
			password: null,
			password_confirmation: null,
		};
	},
	computed: {
		...mapGetters({
			validationErrors: "validation/validationErrors",
		}),
	},

	methods: {
		resetPassword() {
			this.$axios
				.$post("/reset-password", {
					token: this.$route.params.token,
					email: this.email,
					password: this.password,
					password_confirmation: this.password_confirmation,
				})
				.then(
					(result) => {
						this.$toast.success("Password reset successfully");
						this.$router.push("/login");
					},
					(error) => {
						this.$toast.error("Something went wrong");
						console.error(error);
					}
				);
		},
	},
};
</script>
