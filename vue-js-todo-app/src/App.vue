<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div class="container main">
		<!-- Nav -->
		<header class="p-8 bg-gray-800 text-white md:h-screen">
			<nav class="flex flex-col">
				<!-- TODO: Add icons next to each link -->
				<!-- TODO: Add hover state to the panel to only show icons until hovered and then slide out from the left -->
				<RouterLink to="/todo-list">Todos</RouterLink>
				<RouterLink to="/todo-stats">Stats</RouterLink>
				<RouterLink to="/settings">Settings</RouterLink>
			</nav>
		</header>

		<!-- Router View -->
		<RouterView />

		<!-- Stats -->
		<div></div>
	</div>
</template>

<style>
@import "@/assets/base.css";
/* Main Container */
div.container {
	@apply w-full min-h-screen flex flex-col md:flex-row;
}
</style>
