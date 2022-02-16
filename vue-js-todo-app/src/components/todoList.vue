<template>
	<transition-group name="todos" tag="ul">
		<li v-for="todo in todoList" :key="todo.id">
			<TodoItem :todo="todo"></TodoItem>
		</li>
	</transition-group>
</template>

<script setup>
import TodoItem from "../components/todoItem.vue";
import { useTodoListStore } from "../stores/todos.js";
import { ref, computed, onUpdated } from "vue";

const todoStore = useTodoListStore();

const props = defineProps(["listType"]);

// console.log(props.listType);

const todoList = computed(() => {
	if (props.listType == "all") {
		return todoStore.getAllTodos;
	} else if (props.listType == "complete") {
		return todoStore.getCompleteTodos;
	} else {
		return todoStore.getIncompleteTodos;
	}
});

// console.log("TODO LIST SETUP");
// console.log(todoList);
onUpdated(() => console.log(todoList));
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
	transform: translateX(30px);
}

.todos-leave-activ {
	position: absolute;
}
</style>