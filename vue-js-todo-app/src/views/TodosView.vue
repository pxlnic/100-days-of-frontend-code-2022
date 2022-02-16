<template>
	<div class="content-container">
		<h1 class="heading">Todos</h1>
		<button @click.prevent="addTodo">Add Todo</button>

		<TodoList></TodoList>

		<h2 class="text-2xl">Completed Todos</h2>
		<TodoList listType="complete"></TodoList>

		<TodoStats></TodoStats>
	</div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import TodoList from "../components/todoList.vue";
import TodoStats from "../components/todoStats.vue";

import { useTodoListStore } from "../stores/todos.js";

const todoStore = useTodoListStore();

function addTodo() {
	todoStore.addTodo({
		id: todoStore.getTodosCount + 1,
		listId: 1,
		parentId: null,
		title: `Test ${todoStore.getTodosCount + 1}`,
		description: "Testing, testing ... 1, 2, 3 ... testing..",
		createdAt: "DATE/TIME",
		dueAt: "DATE/TIME",
		complete: false,
		reminder: {},
	});
}
</script>

<style scoped>
button {
	@apply bg-gray-300 p-2 rounded;
}
</style>