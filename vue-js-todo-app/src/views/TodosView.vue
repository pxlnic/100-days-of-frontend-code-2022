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
			<!-- Todo List Heading -->
			<div class="w-full flex justify-between">
				<h1 class="heading">Todos</h1>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="
						w-8
						mr-4
						transition
						duration-300
						fill-purple-700
						cursor-pointer
						hover:fill-purple-500
					"
					@click.prevent="addTodo"
				>
					<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"
					/>
				</svg>
			</div>

			<!-- Todo List -->
			<TodoList class="max-w-full"></TodoList>
		</div>

		<!-- Todo Details Overlay / Panel -->
		<div class="md:ml-4 md:overflow-y-auto md:overflow-x-hidden">
			<TodoDetails></TodoDetails>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useTodoStore } from "../stores/todos.js";
import TodoList from "../components/todoList.vue";
import TodoDetails from "../components/todoDetails.vue";
import TodoStats from "../components/todoStats.vue";

const todoStore = useTodoStore();

const showDetails = ref(false);

function addTodo() {
	todoStore.setTodosDetailsOpen(true);
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

/* Todo-List */
.todo-list {
	@apply bg-transparent transition duration-300;
	-webkit-background-clip: text;
}
.todo-list:hover {
	@apply bg-purple-200;
}
.todo-list::-webkit-scrollbar {
	@apply w-[12px];
}

.todo-list::-webkit-scrollbar-thumb {
	@apply rounded-full bg-inherit;
}
</style>