<template>
	<div class="col-sm-8 col-lg-6 mx-auto">
		<div class="row">
			<div class="col-md-8 col-xl-6 mx-auto">
				<form @submit.prevent="handleSubmit">
					<!-- Name  -->
					<validated-text-field v-if="!emailExits" label="Your name" placeholder="John Doe" v-model="form.name" :validation="$v.form.name" :error="validationErrors.name"></validated-text-field>

					<!-- surname  -->
					<input-field v-if="!emailExits" label="Your surname" placeholder="Newman" v-model="form.surname" :error="validationErrors.surname">
					</input-field>
					<!-- Email  -->
					<validated-text-field type="email" label="Your Email" placeholder="user@example.com" v-model="form.email" :validation="$v.form.email" @blur="checkEmailExits" :error="validationErrors.email"></validated-text-field>
					<!-- Phone -->
					<validated-text-field v-if="!emailExits" type="tel" label="Phone" placeholder="e.g. +420 777 123" v-model="form.phone" :validation="$v.form.phone" :error="validationErrors.phone"></validated-text-field>
					<!-- Password -->
					<validated-text-field v-if="!$auth.user" type="password" label="Your Password" placeholder="Password" v-model="form.password" :validation="$v.form.password" :error="validationErrors.password"></validated-text-field>
					<!-- Confirm -->
					<validated-text-field v-if="!$auth.user && !emailExits" type="password" label="Confirm Password" placeholder="Confirm Password" v-model="form.password_confirmation" :validation="$v.form.password_confirmation"></validated-text-field>

					<!-- Login -->
					<button v-if="emailExits && !$auth.user" class="btn btn-primary px-5 mt-4 d-block mx-auto" type="submit" :disabled="$v.form.password.$anyError">
						Login
					</button>
					<!-- Next Button -->
					<button v-if="!emailExits || $auth.user" :disabled="$v.$invalid" class="px-4py-1  btn m-5  d-flex align-items-center bg-primary rounded-pill text-white d-block mx-auto" @click="goNext">
						Next
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import {
	required,
	email,
	minLength,
	maxLength,
	sameAs,
	requiredIf,
} from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";
export default {
	name: "partner-step-one",
	computed: {
		...mapGetters({
			validationErrors: "validation/validationErrors",
		}),
	},
	data() {
		return {
			form: {
				email: "",
				password: "",
				password_confirmation: "",
				name: "",
				surname: "",
				phone: "",
			},
			emailExits: false,
		};
	},
	validations: {
		form: {
			email: { required, email },
			password: {
				minLength: minLength(6),
				required: requiredIf(function (val) {
					return !this.$auth.user;
				}),
			},
			password_confirmation: {
				sameAsPassword: sameAs("password"),
				minLength: minLength(6),
			},
			name: { required, minLength: minLength(3) },
			phone: {
				required: requiredIf(function (val) {
					return !this.emailExits;
				}),
				maxLength: maxLength(15),
			},
		},
	},
	methods: {
		...mapMutations({
			setPartner: "partner/setPartner",
		}),
		async checkEmailExits(email) {
			if (
				this.$v.form.email.$dirty &&
				!this.$v.form.email.$anyError &&
				!this.$auth.user
			) {
				const res = await this.$axios.post("/search-customer", { email });

				if (res.data) this.emailExits = true;
				else this.emailExits = false;
			}
		},
		handleSubmit() {
			if (this.emailExits) {
				this.login();
			} else {
				this.goNext();
			}
		},
		async login() {
			try {
				const resLogin = await this.$auth.loginWith("local", {
					data: {
						email: this.form.email,
						password: this.form.password,
					},
				});

				this.emailExits = false;
				this.setAuthData();
				this.$router.push("/partner/become-partner");
				// this.goNext();

				this.$toast.success("Login successfully");
			} catch (error) {
				console.log(error);
				if (error.response.status === 401) {
					this.$toast.error("Email or Password doesn't match");
				}
			}
		},
		goNext() {
			this.setPartner(this.form);
			this.increment();
		},

		setAuthData() {
			const user = this.$auth.user;
			if (user) {
				const newUser = {
					email: user.email,
					name: user.name,
					surname: user.surname,
					phone: user.phone,
				};
				this.form = { ...newUser };
				this.$v.form.$touch();
				this.goNext();
			}
		},
	},

	created() {
		this.setAuthData();
	},
	watch: {
		emailExits() {
			this.adjustWindow();
		},
	},
	props: {
		increment: {
			type: Function,
		},
		adjustWindow: {
			type: Function,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
