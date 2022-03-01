<template>
	<div>
		<transition-group name="todos" tag="ul" class="pt-4 relative">
			<li v-for="todo in todoList" :key="todo.id" class="w-full">
				<TodoItem :todo="todo"></TodoItem>
			</li>
		</transition-group>
	</div>
</template>

<script setup>
import TodoItem from "../components/todoItem.vue";
import { useTodoStore } from "../stores/todos.js";
import { ref, computed, onUpdated } from "vue";

const todoStore = useTodoStore();

const todoFilter = ref(todoStore.getTodosFilter);

const todoList = computed(() => {
	if (todoStore.getTodosFilter == "all") {
		return todoStore.getAllTodos;
	} else if (todoStore.getTodosFilter == "complete") {
		return todoStore.getCompleteTodos;
	} else {
		return todoStore.getIncompleteTodos;
	}

	console.log(todoStore.getAllTodos);
});

onUpdated(() => {
	todoList;
});
</script>

<style scoped>
/* TODO: Add delay to entering and animation */
/* TODO: Add transition of parent elements */

.todos-move,
.todos-enter-active,
.todos-leave-active {
	transition: all 0.5s ease;
}

.todos-enter-from,
.todos-leave-to {
	opacity: 0;
	transform: translateX(50px);
}

.todos-leave-active {
	position: absolute;
}
</style>