<template>
	<button
		class="
			p-2
			bg-purple-700
			hover:bg-purple-500
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
const props = defineProps(["buttonText"]);
</script>