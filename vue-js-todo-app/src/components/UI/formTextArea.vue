<template>
	<span class="flex flex-col">
		<label for="textInput" class="text-lg mb-1">{{ inputLabel }}</label>
		<textarea
			:placeholder="inputPlaceholder"
			:required="focused"
			rows="4"
			:value="modelValue"
			class="
				p-2
				transition
				duration-300
				border-2 border-purple-200
				rounded
				focus:ring-purple-700 focus:border-purple-700 focus:outline-none
				invalid:ring-pink-500
				invalid:border-pink-500
				invalid:outline-none
				required:ring-pink-500
				required:border-pink-500
				required:outline-none
				peer
			"
			@input="$emit('update:modelValue', $event.target.value)"
			@blur="lostFocus($event.target.value)"
		></textarea>
		<p
			class="
				opacity-0
				max-h-0
				peer-required:opacity-100 peer-required:max-h-screen
				mb-2
				text-sm text-pink-700
				transition
				duration-300
			"
		>
			{{ invalidInputText }}
		</p>
	</span>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	inputLabel: { type: String, default: "Text Area" },
	inputPlaceholder: { type: String, default: "Placeholder" },
	invalidInputText: { type: String, default: "Invalid Input!" },
	modelValue: { type: String, default: "" },
});

const focused = ref(false);

function lostFocus(value) {
	if (value.length < 1) {
		focused.value = true;
	} else {
		focused.value = false;
	}
}
</script>

<style scoped>
</style>