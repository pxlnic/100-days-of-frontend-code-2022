<template>
	<BaseCard
		class="relative flex flex-row items-center"
		@click="toggleTodo(todo.id)"
	>
		<div
			class="
				p-2
				pr-6
				cursor-pointer
				transition
				duration-300
				hover:opacity-50
			"
		>
			<img
				class="w-[20px]"
				src="../assets/icons/o-solid.svg"
				alt=""
				v-show="!todo.complete"
			/>
			<img
				class="w-[20px] checked"
				src="../assets/icons/circle-check-solid.svg"
				alt=""
				v-show="todo.complete"
			/>
		</div>
		<div
			:class="{
				'opacity-70': todo.complete,
				'line-through': todo.complete,
			}"
		>
			<p class="text-lg font-bold md:text-xl">{{ todo.title }}</p>
			<p class="md:text-lg">{{ todo.description }}</p>
		</div>
	</BaseCard>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "../components/Base/baseCard.vue";
import { useTodoListStore } from "../stores/todos.js";

const todoStore = useTodoListStore();

const props = defineProps(["todo"]);

function toggleTodo(id) {
	todoStore.toggleTodo(id);
}
</script>

<style scoped>
.checked {
	filter: invert(32%) sepia(75%) saturate(4651%) hue-rotate(136deg)
		brightness(97%) contrast(87%);
}
</style>