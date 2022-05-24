<template>
	<table class="table table-bordered">
		<thead>
			<th v-for="(field, index) in fields" :key="index" style="vertical-align: middle" :width="field.width">
				{{ field.title  }}
			</th>
			<th class="text-right" width="5%" style="vertical-align: middle">
				<button class="btn btn-success" @click.prevent="add">
					<i class="fas fa-plus"></i>
				</button>
			</th>
		</thead>
		<tbody>
			<tr v-for="(item, index) in items" :key="index">
				<td v-for="(field, fieldIndex) in fields" :key="fieldIndex">
					<!-- Fields -->
					<slot :name="field.name" :index="index" :item="item" :field="field" :getError="getError">
						<component :is="field.component" v-bind="{ ...field.props }" v-model="item[field.name]">
						</component>
					</slot>
				</td>
				<td>
					<button class="btn btn-danger" @click.prevent="remove(index, item)">
						<i class="fas fa-trash-alt"></i>
					</button>
				</td>
			</tr>
		</tbody>

		<!-- If showTotal props is true -->
		<tfoot v-if="showTotal">
			<td class="font-weight-bold text-right" :colspan="fields.length - 1">
				Total
			</td>
			<td class="font-weight-bold text-left px-4">{{ total }}</td>
			<td></td>
		</tfoot>

		<!-- Else default slot -->
		<tfoot v-else>
			<slot name="footer" :items="items"> </slot>
		</tfoot>
	</table>
</template>

<script>
export default {
	name: "dynamic-field",
	props: {
		/**
		 * Available field to show on table row
		 */
		fields: {
			type: Array,
			required: true,
		},

		/**
		 * Initial Value
		 */
		value: {
			type: [Array, Object],
			default: () => [],
		},

		/**
		 * Validation Error object key name
		 */
		errorName: {
			type: String,
			default: null,
		},

		/**
		 * Sumable key props
		 */
		sumKey: {
			type: String,
			default: "amount",
		},

		/**
		 * Configure show total at footer
		 */
		showTotal: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			items: [],
		};
	},
	computed: {
		/**
		 * Calculate the item total
		 */
		total() {
			return this.items
				.map((item) => parseFloat(item[this.sumKey]))
				.reduce((total, current) => (total += current), 0);
		},
	},
	methods: {
		/**
		 * Component field change
		 */
		handleComponentChange(value, listen) {
			if (listen) {
				this.$nuxt.$emit(`${value.name}-${value.index}-changed`, value);
			}
		},
		/**
		 * Add new row to the table
		 */
		add() {
			this.items.push(this.getFields());
		},

		/**
		 * Remove row from the table
		 */
		remove(index, item = null) {
			this.items.splice(index, 1);
			// Emit remove event
			this.$emit("remove", item);
		},

		/**
		 * Get the field for bind
		 */
		getFields() {
			let result = {};
			this.fields.forEach((item) => {
				result[item.name] = item.value;
			});

			return result;
		},

		/**
		 * Get the validation error
		 */
		getError(name, index) {
			return this.validationErrors[`${this.errorName}.${index}.${name}`];
		},
		/**
		 * Custom Keyboard Shotcuts
		 */
		addShotcuts(e) {
			// Event listener for keyboard '+' button
			// Add new row when clickd on '+' button
			if (e.key === "+") {
				this.add();
			}

			// Event listener for keyboard '+' button
			// Remove row when clickd on '-' button
			if (e.key === "-") {
				const index = this.items.length - 1;
				this.remove(index);
			}

			// Save Invoice when clickd on 'Ctrl Enter' button
			if (e.ctrlKey && e.key == "Enter") {
				this.save();
			}
		},
	},

	mounted() {
		// Listening for window Keyboard press
		window.addEventListener("keyup", this.addShotcuts);
	},
	destroyed() {
		window.removeEventListener("keyup", this.addShotcuts);
	},

	created() {
		// Set the initial value
		this.items = this.value;
	},
};
</script>

<style lang="scss"></style>
