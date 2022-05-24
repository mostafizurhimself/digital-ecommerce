<template>
	<div>
		<div class="page-wrapper">
			<!-- Header Image -->
			<div class="container-fluid header-image">
				<div class="container light-section" style="min-height: 530px; height: 100%">
					<div class="row justify-content-center align-items-center h-100">
						<div class="col-lg-4 text-center text-white">
							<h1 class="text-uppercase mb-3 text-6xl partner-title">
								<b>Become</b> <span>our partner</span>
							</h1>
							<p>
								We are constantly looking for partners to be on board with us to
								expand our network. Our goal is to offer a wide range of
								printing and wrapping companies for our customers who can
								contact you in your region for printing or wrapping services.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Partner step from -->
			<div class="mt-5">
				<multi-step-form stepWidth="210px" :activeLineWidth="activeLineWidth" :stepData="stepData" :offsetTop="160"></multi-step-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Become A Partner",
		};
	},
	data() {
		return {
			stepData: [
				{ title: "USER", component: "user-step" },
				{ title: "COMPANY", component: "company-step" },
			],
		};
	},
	methods: {
		activeLineWidth(index) {
			let w;
			if (index == 0) w = "105px";
			return { width: w };
		},
	},
	mounted() {
		this.isLoading = false;
	},
};
</script>

<style lang="scss" scoped>
.header-image {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(/images/features/wrapping-company.jpg);
	background-color: #000;
	background-repeat: no-repeat;
	height: 507px;
	background-position: 50%;
	background-size: cover;
}

.stepper-box {
	box-shadow: none;
}

@media only screen and (max-width: 600px) {
	.partner-title {
		font-size: 2.5rem;
	}
}
@media only screen and (max-width: 414px) {
	.partner-title {
		font-size: 2.2rem;
	}
}
</style>
