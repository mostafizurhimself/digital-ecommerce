<template>
	<div>
		<form @submit.prevent="register">
			<div class="row">
				<div class="col-md-6">
					<input-field label="Your Name" v-model="form.name" :error="validationErrors.name" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field label="Your Surname" v-model="form.surname" :error="validationErrors.surname" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field label="Your Phone" type="number" v-model="form.phone" :error="validationErrors.phone" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field label="Your Email" type="email" v-model="form.email" :error="validationErrors.email" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field label="Your Password" type="password" v-model="form.password" :error="validationErrors.password" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field label="Confirm Password" type="password" v-model="form.password_confirmation" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field type="text" label="Street" placeholder="Street" v-model="form.billingAddress.street" :error="validationErrors['billingAddress.street']" :required="true"></input-field>
				</div>
				<div class="col-md-6">
					<input-field type="text" label="City" placeholder="City" v-model="form.billingAddress.city" :error="validationErrors['billingAddress.city']" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field type="text" label="ZIP code" placeholder="ZIP code" v-model="form.billingAddress.zipcode" :error="validationErrors['billingAddress.zipcode']" required></input-field>
				</div>
				<div class="col-md-6">
					<select-field label="Country/Region" :options="this.countries" v-model="form.billingAddress.country" :error="validationErrors['billingAddress.country']" required></select-field>
				</div>
			</div>

			<!-- Optional Company details -->
			<div>
				<div class="row">
					<div class="col-12 d-inline-flex">
						<checkbox-field class="mb-1" checkmarkColor="white" id="companyDetails" @change="companyDetails = !companyDetails" label="Company details (optional)" tiny></checkbox-field>
					</div>
				</div>

				<div v-if="companyDetails" class="row mt-3">
					<div class="col-md-6">
						<input-field label="Company name (optional)" v-model="form.company" :error="validationErrors.company"></input-field>
					</div>
					<div class="col-md-6">
						<input-field label="EU VAT registration (optional)" v-model="form.euVatNo" :error="validationErrors.euVatNo"></input-field>
					</div>
				</div>
			</div>

			<!-- Optional shippingAddress bill-->
			<div class="row mt-3">
				<div class="col-12 d-inline-flex">
					<checkbox-field class="mb-1" checkmarkColor="white" id="shippingAddress" @change="shippingEnabled = !shippingEnabled" label="Shipping billingAddress is different than billing" tiny></checkbox-field>
				</div>
			</div>
			<div v-if="shippingEnabled" class="row mt-4">
				<div class="col-md-6">
					<select-field label="Country/Region" :options="this.countries" v-model="shippingAddress.country" :error="validationErrors['shippingAddress.country']" required></select-field>
				</div>
				<div class="col-md-6">
					<input-field type="text" label="City/Town" v-model="shippingAddress.city" :error="validationErrors['shippingAddress.city']" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field type="text" label="Street" v-model="shippingAddress.street" :error="validationErrors['shippingAddress.street']" required></input-field>
				</div>
				<div class="col-md-6">
					<input-field type="text" label="ZIP code" v-model="shippingAddress.zipcode" :error="validationErrors['shippingAddress.zipcode']" required></input-field>
				</div>
			</div>

			<div class="d-flex justify-content-center mb-3">
				<button type="submit" class="btn btn-primary mt-3 px-4">
					Register
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			form: {
				email: null,
				number: null,
				name: null,
				surname: null,
				password: null,
				password_confirmation: null,
				company: null,
				euVatNo: null,
				billingAddress: {
					street: null,
					city: null,
					zipcode: null,
					country: null,
				},
			},
			shippingAddress: {
				country: null,
				city: null,
				street: null,
				zipcode: null,
			},
			countries: [],
			shippingEnabled: false,
			companyDetails: false,
		};
	},

	computed: {
		...mapGetters({
			validationErrors: "validation/validationErrors",
		}),
	},

	methods: {
		async register() {
			let data = this.shippingEnabled
				? { ...this.form, shippingAddress: this.shippingAddress }
				: this.form;
			try {
				const res = await this.$axios.$post("/register", data);
				this.$toast.success("Register successfully");
				this.$emit("registered");
			} catch (error) {
				console.log(error);
			}
		},
	},

	async fetch() {
		const res = await this.$axios.$get("/countries");
		this.countries = res;
	},
};
</script>

<style lang="scss" scoped>
</style>