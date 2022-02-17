<template>
	<span class="flex flex-col">
		<label for="textInput" class="text-lg mb-1">{{ inputLabel }}</label>
		<input
			type="text"
			:placeholder="inputPlaceholder"
			:required="validData"
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
			@blur="isDataValid($event.target.value)"
		/>
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
const props = defineProps([
	"inputLabel",
	"inputPlaceholder",
	"invalidInputText",
	"modelValue",
]);

const validData = ref(false);

function isDataValid(value) {
	if (value.length < 1) {
		validData.value = true;
	} else {
		validData.value = false;
	}
}
</script>

<style scoped>
</style>