<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/UI/SideBar.vue";
</script>

<template>
	<div class="app-container">
		<!-- Nav -->
		<SideBar></SideBar>

		<!-- Router View -->
		<div class="w-full"><RouterView /></div>
	</div>
</template>
<style>
@import "@/assets/base.css";
/* Main Container */
div.app-container {
	@apply w-full min-h-screen flex flex-col md:flex-row md:items-start;
}
</style>
