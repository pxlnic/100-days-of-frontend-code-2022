<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		:class="[iconFillColor, iconWidth]"
	>
		<path
			d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"
		/>
	</svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["fillColor", "width"]);

const iconFillColor = computed(() => {
	return `fill-${props.fillColor}`;
});

const iconHoverFillColor = computed(() => {
	return `fill-${props.hoverFillColor}`;
});

const iconWidth = computed(() => {
	return `w-${props.width}`;
});
</script>