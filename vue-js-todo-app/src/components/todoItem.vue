<template>
	<BaseCard
		class="
			relative
			flex flex-row
			items-center
			justify-between
			cursor-pointer
			mb-2
		"
		:class="{ 'bg-gray-100': todo.complete }"
		bgColor="bg-gray-200"
		bgHoverColor="hover:bg-gray-300"
	>
		<div class="flex flex-row items-center w-full overflow-hidden">
			<div class="p-2 pr-6 z-20" @click="toggleTodo(todo.id)">
				<FaIcon
					width="w-8"
					fillColor="fill-slate-700"
					hoverFillColor="hover:fill-slate-600"
					type="circle"
					class="cursor-pointer"
					v-show="!todo.complete"
				/>
				<FaIcon
					width="w-8"
					fillColor="fill-lime-800"
					hoverFillColor="hover:fill-lime-600"
					type="circleCheck"
					class="cursor-pointer"
					v-show="todo.complete"
				/>
			</div>
			<div
				:class="{
					'opacity-50': todo.complete,
					'line-through': todo.complete,
				}"
				class="w-full overflow-hidden pr-4"
				@click="openTodo(todo)"
			>
				<p class="text-lg font-bold truncate ... md:text-xl">
					{{ todo.title }}
				</p>
				<p class="truncate ... md:text-lg">
					{{ todo.description }}
				</p>
			</div>
		</div>

		<div class="min-width-fit">
			<FaIcon
				fillColor="fill-gray-500"
				hoverFillColor="hover:fill-red-700"
				width="w-8"
				type="circleX"
				class="mr-2 cursor-pointer z-20"
				@click="deleteTodo(todo.id)"
			/>
		</div>
	</BaseCard>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todos.js";
import BaseCard from "../components/Base/baseCard.vue";
import FaIcon from "../components/UI/faIcon.vue";

const todoStore = useTodoStore();

const props = defineProps(["todo"]);

function openTodo(todo) {
	console.log(todo);
	todoStore.setTodosDetailsOpen(true);
	todoStore.setTodosFormData({
		id: todo.id,
		title: todo.title,
		description: todo.description,
		complete: todo.complete,
		valid: true,
		clicked: false,
	});
}

function toggleTodo(id) {
	todoStore.toggleTodo(id);
}

// Add a prompt to delete todos
function deleteTodo(id) {
	todoStore.removeTodo(id);
}
</script>

<style scoped>
.checked {
	filter: invert(32%) sepia(75%) saturate(4651%) hue-rotate(136deg)
		brightness(97%) contrast(87%);
}
</style>