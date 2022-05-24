<template>
	<div class="container-fluid mb-5" id="multi_step-form">
		<!-- Step List -->
		<div class="step-wrapper">
			<div :style="{ width: stepWidth }" class="d-flex justify-content-between step-ul">
				<span :style="activeLineWidth(activeIndex)" class="active-line"></span>
				<div v-for="(item, i) in stepData" :key="i" class="step-btn-wrapper text-center d-flex flex-column align-items-center step-li" :class="{ active: activeIndex >= i }">
					<!--  -->
					<span @click="i < activeIndex ? (activeIndex = i) : null" class="step-btn">{{ i + 1 }}</span>
					<p class="step-title">{{ item.title }}</p>
				</div>
			</div>
		</div>

		<!-- Step Output Component -->
		<div class="row" id="multi_step_row">
			<div class="col-lg-9 mx-auto mb-4">
				<div class="stepper-image"></div>
			</div>

			<div class="col-12">
				<keep-alive>
					<component :is="stepData[activeIndex].component" :increment="increment" :decrement="decrement" :adjustWindow="adjustWindow" />
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: 0,
		};
	},
	computed: {},
	methods: {
		increment() {
			this.activeIndex++;
		},
		decrement() {
			this.activeIndex--;
		},
		adjustWindow() {
			const el = document.getElementById("multi_step_row");
			window.scrollTo({
				top: el.offsetTop - this.offsetTop,
				left: 0,
				behavior: "smooth",
			});
		},
	},
	watch: {
		activeIndex() {
			this.adjustWindow();
		},
	},
	props: {
		stepData: {
			type: Array,
			required: true,
		},
		stepWidth: {
			type: String,
			required: true,
		},
		activeLineWidth: {
			type: Function,
			required: true,
		},
		offsetTop: {
			type: Number,
			default: 200,
		},
	},
};
</script>

<style lang="scss" scoped>
#multi_step-form {
	.step-wrapper {
		.step-ul {
			position: relative;

			margin-left: auto;
			margin-right: auto;
			&::before {
				content: "";
				height: 3px;
				position: absolute;
				background: #ccc;
				top: 18px;
				left: 2px;
				right: 2px;
				z-index: -1;
				@media (max-width: 650px) {
					left: 12px;
					right: 10px;
					top: 15px;
				}
			}
			.active-line {
				max-width: 100%;
				height: 3px;
				position: absolute;
				background: var(--primary);
				top: 18px;
				left: 2px;
				right: 2px;
				z-index: 1;
				transition: width 0.4s ease;

				@media (max-width: 650px) {
					left: 12px;
					right: 10px;
					top: 15px;
				}
			}
		}

		.step-li {
			z-index: 3;
			&.active {
				.step-btn {
					background-color: var(--primary);
					color: var(--white);
					font-weight: bold;
				}
				.step-title {
					color: var(--primary);
				}
			}
		}
		.step-btn-wrapper {
			width: 80px;
			@media (max-width: 650px) {
				width: 47px;
			}
		}
		.step-btn {
			display: block;
			width: 100%;
			height: 37px;
			padding-top: 9px;
			padding-bottom: 9px;
			border-radius: 20px;
			color: #9a9a9a;
			background-color: #ece9f0;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 0;
			transition: all 0.4s ease;

			@media (max-width: 650px) {
				height: 30px;
			}
		}
		.step-title {
			color: #9a9a9a;
			margin-top: 10px;
			font-size: 12px;
		}
	}
	.stepper-image {
		background-image: url("@/static/images/background/background-stepper.png");
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		height: 70px;
		width: 100%;
	}
}
</style>
