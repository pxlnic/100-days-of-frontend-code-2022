<template>
	<div
		class="rounded p-4 w-full transition duration-300"
		:class="[bgColor, bgHoverColor]"
	>
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	bgColor: {
		type: String,
		default: "bg-gray-200",
	},
	bgHoverColor: {
		type: String,
		default: "hover:bg-gray-300",
	},
});
</script>

<style lang="scss" scoped>
</style>