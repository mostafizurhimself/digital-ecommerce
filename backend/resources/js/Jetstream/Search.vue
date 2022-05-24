<template>
	<div class="flex items-center">
		<div class="flex rounded-md items-center border border-gray-300 focus-within:border-primary-500 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
			<input class="w-64 block rounded-l-md px-4" style="border:none; outline:none; box-shadow:none" :value="modelValue" type="text" @input="$emit('update:modelValue', $event.target.value)" ref="input" />
			<jet-dropdown align="right" width="64">
				<template #trigger>
					<span class="h-10 px-4 flex items-center justify-center bg-white cursor-pointer rounded-r-md">
						<i class="ti-filter"></i>
						<i class="ti-angle-down ml-1 text-xs"></i>
					</span>
				</template>

				<template #content>
					<div class="block px-4 py-2 text-xs text-gray-400">
						<slot>
							<p class="text-center"> No Filter added </p>
						</slot>
					</div>
				</template>
			</jet-dropdown>
		</div>
		<button class="ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-primary-500" type="button" @click="$emit('reset')">Reset</button>
	</div>
</template>

<script>
export default {
	props: ["modelValue"],

	emits: ["update:modelValue"],

	methods: {
		focus() {
			this.$refs.input.focus();
		},
	},
};
</script>

