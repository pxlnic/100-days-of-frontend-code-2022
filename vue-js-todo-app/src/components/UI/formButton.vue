<template>
	<button
		class="
			p-2
			bg-purple-700
			hover:bg-purple-500
			disabled:bg-gray-500
			transition
			duration-300
			text-white
			rounded
		"
		type="submit"
	>
		{{ buttonText }}
	</button>
</template>

<script setup>
const props = defineProps({
	buttonText: {
		type: String,
		default: "Button",
	},
	buttonDisabled: {
		type: Boolean,
	},
});

// Add to button later :disabled="buttonDisabled"
</script>