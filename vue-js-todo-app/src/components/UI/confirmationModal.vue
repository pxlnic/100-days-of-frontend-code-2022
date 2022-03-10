<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	description: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div class="p-4 flex flex-col justify-start">
		<p class="text-lg md:text-xl">{{ title }}</p>
		<p v-if="description" class="md:text-lg">{{ description }}</p>
		<span>
			<button>Confirm</button>
			<button>Go Back</button>
		</span>
	</div>
</template>

<style>
</style>