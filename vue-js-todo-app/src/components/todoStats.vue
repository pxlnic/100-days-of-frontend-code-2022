<template>
	<div class="w-full">
		<BaseCard class="w-full bg-gray-300 flex justify-between items-center">
			<div>
				<span>
					<input
						class="filter-radio"
						type="radio"
						name="toggle-todos"
						id="toggle-incomplete"
						checked="checked"
					/>
					<label
						for="toggle-incomplete"
						class="filter-button"
						@click="updateTodoFilter('open')"
						>Open</label
					>
				</span>
				<span>
					<input
						class="filter-radio"
						type="radio"
						name="toggle-todos"
						id="toggle-open"
					/>
					<label
						for="toggle-open"
						class="filter-button"
						@click="updateTodoFilter('complete')"
						>Complete</label
					>
				</span>
				<span>
					<input
						class="filter-radio"
						type="radio"
						name="toggle-todos"
						id="toggle-all"
					/>
					<label
						for="toggle-all"
						class="filter-button"
						@click="updateTodoFilter('all')"
						>All</label
					>
				</span>
			</div>
			<div>
				<p class="text-lg font-bold">Open Todos: {{ openTodos }}</p>
			</div>
		</BaseCard>
	</div>
</template>

<script setup>
import BaseCard from "../components/Base/baseCard.vue";
import { useTodoStore } from "../stores/todos.js";
import { computed } from "vue";

const todoStore = useTodoStore();

const openTodos = computed(() => {
	return todoStore.getIncompleteTodosCount;
});

function updateTodoFilter(type) {
	todoStore.setTodosFilter(type);
}
</script>

<style scoped>
.filter-button {
	@apply px-2 py-1 rounded bg-gray-200 transition duration-300 mr-2 cursor-pointer hover:bg-purple-300;
}
.filter-radio {
	@apply hidden;
}
.filter-radio:checked ~ .filter-button {
	@apply bg-purple-900 text-white;
}
</style>