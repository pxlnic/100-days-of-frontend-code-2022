<template>
	<div
		class="
			content-container
			relative
			h-screen
			max-h-screen
			grid grid-cols-1
			grid-rows-[min-content_1fr]
			gap-2
			md:grid-rows-[1fr_min-content] md:grid-cols-2
		"
	>
		<!-- Todo Filters and Stats -->
		<TodoStats
			class="col-span-2 md:self-end md:-mb-4 md:order-last"
		></TodoStats>

		<!-- Todo Panel -->
		<div
			class="col-span-1 todo-list md:overflow-y-auto md:overflow-x-hidden"
		>
			<!-- TODO: Hide icon when details panel open -->
			<!-- Todo List Heading -->
			<div class="w-full flex justify-between">
				<h1 class="heading">Todos</h1>
				<FaIcon
					fillColor="fill-purple-700"
					hoverFillColor="hover:fill-purple-500"
					width="w-8"
					type="circlePlus"
					class="mr-4 cursor-pointer"
					@click="addTodo"
				/>
			</div>

			<!-- Todo List -->
			<TodoList class="max-w-full" @openTodoItem="openTodo"></TodoList>
		</div>

		<!-- Todo Details Overlay / Panel -->
		<div class="md:ml-4 md:overflow-y-auto md:overflow-x-hidden">
			<TodoDetails class="todo-details"></TodoDetails>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useTodoStore } from "../stores/todos.js";
import TodoList from "../components/todoList.vue";
import TodoDetails from "../components/todoDetails.vue";
import TodoStats from "../components/todoStats.vue";
import FaIcon from "../components/UI/faIcon.vue";

const todoStore = useTodoStore();

const showDetails = ref(false);

function openTodo(todoInfo) {
	console.log("OPENING FROM MAIN VIEW");
	todoStore.setTodosDetailsOpen(true);
}

function addTodo() {
	todoStore.setTodosDetailsOpen(true);
}
</script>

<style scoped>
button {
	@apply bg-gray-300 p-2 rounded;
}

/* Todo-List */
.todo-list,
.todo-details {
	@apply bg-transparent transition duration-300;
	-webkit-background-clip: text;
}
.todo-list:hover,
.todo-details:hover {
	@apply bg-purple-200;
}
.todo-list::-webkit-scrollbar,
.todo-details::-webkit-scrollbar {
	@apply w-[12px];
}

.todo-list::-webkit-scrollbar-thumb,
.todo-details::-webkit-scrollbar-thumb {
	@apply rounded-full bg-inherit;
}
</style>