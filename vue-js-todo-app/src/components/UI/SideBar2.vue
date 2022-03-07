<template>
	<header
		class="
			app-nav
			flex flex-col
			bg-purple-700
			transition-width
			duration-300
			overflow-hidden
			z-20
			md:h-screen
		"
		:style="{ width: sidebarWidth }"
		:class="{ open: !collapsed }"
	>
		<nav class="flex flex-col">
			<RouterLink to="/todo-list" class="w-full">
				<span class="flex items-center w-full mb-4">
					<FaIcon
						fillColor="fill-white"
						width="w-8"
						type="circleCheck"
					/>
					<p class="hide-text">Todos</p>
				</span>
			</RouterLink>
			<RouterLink to="/todo-stats">
				<span class="flex items-center w-full mb-4">
					<FaIcon fillColor="fill-white" width="w-8" type="stats" />
					<p class="hide-text">Stats</p>
				</span>
			</RouterLink>
			<RouterLink to="/settings">
				<span class="flex items-center w-full">
					<FaIcon fillColor="fill-white" width="w-8" type="gear" />
					<p class="hide-text">Settings</p>
				</span>
			</RouterLink>
		</nav>
		<span
			class="nav-toggle"
			@click="toggleSidebar"
			:class="{ rotate: !collapsed }"
		>
			<FaIcon
				:class="{ rotate: !collapsed }"
				fillColor="fill-white"
				width="w-6"
				type="doubleArrow"
			/>
		</span>
	</header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./sideBarState.js";
import FaIcon from "./faIcon.vue";
</script>

<style scoped>
.app-nav {
	@apply w-full max-h-0 top-0 left-0 py-8 px-4 bg-purple-900 text-white text-2xl z-20 md:w-24 md:max-h-screen md:h-screen;
}
.app-nav.open {
	@apply max-h-screen;
}
.app-nav nav {
	@apply -z-50 w-0 transition duration-300 delay-300 opacity-0 md:opacity-100 md:z-10 md:!w-full;
}
.app-nav.open nav {
	@apply opacity-100 delay-300 w-full z-20;
}
.nav-toggle {
	@apply p-4 absolute top-0 right-0 z-50 md:top-auto md:right-auto md:bottom-0 md:left-0;
}
.nav-toggle svg {
	@apply rotate-90 transition duration-300 md:rotate-0;
}
.nav-toggle svg.rotate {
	@apply -rotate-90 md:rotate-180;
}
svg {
	@apply mx-3;
}
.hide-text {
	@apply transition duration-300 md:max-w-0 md:opacity-0;
}
.app-nav.open .hide-text {
	@apply md:max-w-full md:opacity-100;
}
.hide-text:hover {
	@apply underline;
}
</style>