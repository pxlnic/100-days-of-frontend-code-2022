<template>
	<div class="content-container">
		<h1 class="heading">Todo Stats</h1>

		<!-- # open / % complete /  -->
		<div class="w-full flex flex-wrap mx-auto md:w-[60%] md:flex-nowrap">
			<BaseCard class="statbar">
				<p class="text-xl">Open Todos</p>
				<p class="text-3xl">{{ todoStore.getIncompleteTodosCount }}</p>
			</BaseCard>
			<BaseCard class="statbar">
				<p class="text-xl">% Complete</p>
				<p class="text-3xl">
					{{ completePercent }}
				</p>
			</BaseCard>
		</div>

		<!-- Time Stats (day, week, month, year) -->
	</div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useTodoStore } from "../stores/todos.js";
import BaseCard from "../components/Base/baseCard.vue";

const todoStore = useTodoStore();

const completePercent = computed(() => {
	return todoStore.getTodosCount == 0
		? "N/A"
		: `${Math.round(
				(todoStore.getCompleteTodosCount / todoStore.getTodosCount) *
					100
		  )}%`;
});
</script>

<style scoped>
.statbar {
	@apply w-full mr-2 text-center md:w-[50%];
}
</style>