<template>
	<div class="col-lg-8 mx-auto">
		<div class="row">
			<div class="col-12">
				<h3 class="mb-3">Specify your wishes about vehicle design</h3>
			</div>
			<!-- Button Group -->
			<!-- <div class="col-sm-6">
        <div class="mb-2">Styles <span class="text-danger">*</span></div>
        <div v-for="(row, i) in styles" :key="i">
          <div class="btn-group" role="group">
            <button
              v-for="(col, ii) in row"
              :key="ii"
              class="btn btn-outline"
              :class="{ active: col.selected }"
              @click="toggleGroupItem(row, col)"
            >
              {{ col.title }}
            </button>
          </div>
        </div>
      </div> -->

			<!-- Left Side -->
			<!-- Colors -->
			<div class="col-md-6">
				<div class="mb-3 d-flex align-items-center">
					<span class="mr-2">Colors</span>
					<i v-if="$v.filters.colors.$dirty && !$v.filters.colors.$anyError" class="fas fa-check text-success" :style="{ 'font-size': '15px' }"></i>
					<i v-else class="fas fa-circle text-danger" :style="{ 'font-size': '8px' }"></i>
				</div>
				<p>What color the design should have?</p>
				<div class="
            d-flex
            flex-row flex-wrap
            justify-content-start
            align-content-around
          ">
					<checkbox-field v-for="color in colors" :key="color.id" class="mt-2 mr-3 mb-2" :id="`color-id-${color.id}`" :value="color.id" :isBigBox="true" :bgColor="color.code" :title="color.name" :gradient="color.primaryMediaUrl" checkmarkColor="#FFFFFF" v-model="filters.colors" @change="colorChanges"></checkbox-field>
				</div>
				<small-checkbox v-model="form.notConditioned" id="not_a_condition" label="Is not a condition" class="mt-5"></small-checkbox>
			</div>

			<!-- Right side -->
			<div class="col-md-6">
				<!-- Tags -->
				<div class="mb-3 d-flex align-items-center">
					<span class="mr-2">Tags</span>
					<i v-if="$v.filters.tags.$dirty && !$v.filters.tags.$anyError" class="fas fa-check text-success" :style="{ 'font-size': '15px' }"></i>
					<i v-else class="fas fa-circle text-danger" :style="{ 'font-size': '8px' }"></i>
				</div>
				<!-- Tag list -->
				<div class="">
					<small-checkbox v-for="tag in tags" :key="tag.id" :id="`tag-id-${tag.id}`" :label="tag.name" :value="tag.id" v-model="filters.tags" @change="tagChanges"></small-checkbox>
					<!-- <checkbox-field
            v-for="tag in tags"
            :key="tag.id"
            :id="`tag-id-${tag.id}`"
            :label="tag.name"
            :value="tag.id"
            class="mb-1"
            checkmarkColor="white"
            tiny
            v-model="filters.tags"
            @change="tagChanges"
          ></checkbox-field> -->
				</div>
			</div>

			<!-- Note full width -->
			<div class="col-12">
				<text-field placeholder="Type Here other notes, ideas and requirements, specify exactly your whishes about colors of design." label="Note" v-model="form.designNote">
				</text-field>
			</div>

			<!-- Scrollable Image row -->
			<div class="col-12 mt-4">
				<p class="mb-3">
					<span class="mr-2"> Select your favorite design</span>

					<i v-if="$v.form.products.$dirty && !$v.form.products.$anyError" class="fas fa-check text-success" :style="{ 'font-size': '15px' }"></i>
					<i v-else class="fas fa-circle text-danger" :style="{ 'font-size': '8px' }"></i>
				</p>
				<p>Select max 5 designs. Selected: {{ form.products.length }}</p>

				<div class="row img-scrollable mt-4">
					<div class="col-md-4 mt-3" v-for="(prod, i) in products" :key="i">
						<image-checkbox :src="prod.thumbnailMediaUrl" :value="prod.id" v-model="form.products" :max="5" @change="$v.form.products.$touch()"></image-checkbox>
					</div>
				</div>
				<client-only>
					<infinite-loading @distance="10" @infinite="handleLoadMore" :identifier="infiniteId">
						<span slot="no-more"></span>
					</infinite-loading>
				</client-only>
			</div>

			<!-- Upload area -->
			<div class="col-12 mt-5">
				<p class="mb-4">Upload Your Files</p>

				<image-control label="Upload a photo of the vehicle with the design which you like or images which can help us during making design" v-model="form.referenceDesigns" imageWidth="300px">
				</image-control>
			</div>

			<!-- Pagination -->
			<step-pagination :increment="increment" :decrement="decrement" :disableNext="$v.$invalid" @onNext="saveData"></step-pagination>
		</div>
	</div>
</template>

<script>
import ImageCheckbox from "@/components/forms/ImageCheckbox.vue";
import { required, maxLength } from "vuelidate/lib/validators";
import { mapMutations } from "vuex";

export default {
	name: "design-form",
	components: {
		ImageCheckbox,
	},
	data() {
		return {
			// styles: [
			//   [
			//     { title: "minimal", selected: false },
			//     { title: "playfull", selected: true },
			//   ],
			//   [
			//     { title: "modern", selected: false },
			//     { title: "classic", selected: false },
			//   ],
			//   [
			//     { title: "sport", selected: false },
			//     { title: "urban", selected: false },
			//   ],
			//   [
			//     { title: "loud", selected: true },
			//     { title: "subtel", selected: false },
			//   ],
			// ],
			products: [],
			tags: [],
			colors: [],
			page: 1,
			infiniteId: +new Date(),
			filters: {
				tags: [],
				colors: [],
			},
			form: {
				designNote: "",
				products: [],
				referenceDesigns: null,
				notConditioned: false,
			},
		};
	},
	validations: {
		filters: {
			tags: { required },
			colors: { required },
		},
		form: {
			products: { required, maxLength: maxLength(5) },
		},
	},

	watch: {
		filters: {
			handler: function (newValue, oldValue) {
				this.infiniteId++;
				this.products = [];
				this.page = 1;
			},
			deep: true,
		},
	},

	methods: {
		...mapMutations({
			setFields: "customDesign/setFields",
		}),
		saveData(e, increment) {
			this.setFields({
				...this.filters,
				...this.form,
				notConditioned: this.form.notConditioned ? 1 : 0,
			});
			increment();
		},

		toggleGroupItem(row, col) {
			row.forEach((r) => (r.selected = false));
			col.selected = !col.selected;
		},
		colorChanges(val) {
			this.$v.filters.colors.$touch();
		},
		tagChanges(val) {
			this.$v.filters.tags.$touch();
		},

		/**
		 * Get the base 64 filter string
		 */
		getQueries() {
			let queryString = "";
			for (const key in this.filters) {
				if (this.filters[key] && this.filters[key].length) {
					queryString += `&${key}=${this.filters[key]}`;
				}
			}

			return queryString;
		},
		handleLoadMore($state) {
			this.$axios
				.get(`/products?page=${this.page}${this.getQueries()}`)
				.then((res) => {
					const result = res.data.data;
					if (result.length) {
						result.forEach((value) => {
							this.products.push(value);
						});
						$state.loaded();
					} else {
						$state.complete();
					}
				});

			this.page = this.page + 1;
		},
	},
	props: {
		increment: {
			type: Function,
		},
		decrement: {
			type: Function,
		},
	},

	async fetch() {
		const resColor = await this.$axios.get("/colors");
		this.colors = resColor.data.data;
		const resTag = await this.$axios.get("/tags");
		this.tags = resTag.data.data;
	},
};
</script>

<style lang="scss" scoped>
.btn.btn-outline {
	border-color: var(--primary);
	width: 170px;
	&.active {
		background: #c85007eb;
		color: #eee;
	}
}
.img-scrollable {
	overflow-y: scroll;
	overflow-x: hidden;
	max-height: 500px;
}
</style>
