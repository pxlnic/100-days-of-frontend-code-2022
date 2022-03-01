<template v-model='todoFormData'>
	<div class="details-panel" :class="{ open: todoStore.getTodosDetailsOpen }">
		<div class="w-full flex justify-between">
			<h1 class="heading">Todo Details</h1>
			<FaIcon
				width="w-8"
				fillColor="fill-gray-500"
				hoverFillColor="hover:fill-red-700"
				type="circleX"
				class="cursor-pointer"
				@click="closeDetailsPanel"
			/>
		</div>
		<form
			@submit.prevent="submitTodo($event.target.children[0].children)"
			class="flex flex-col"
		>
			<div>
				<FormText
					inputLabel="Title"
					inputPlaceholder="Enter a title for your todo ..."
					invalidInputText="A title is required!"
					v-model="todoStore.todosFormData.title"
				/>
				<FormTextArea
					name="description"
					inputLabel="Details"
					inputPlaceholder="Enter the details for your todo ..."
					invalidInputText="Details are required!"
					v-model="todoStore.todosFormData.description"
				/>
			</div>

			<div class="flex flex-col self-end">
				<FormButton
					buttonText="Submit"
					:buttonDisabled="!todoStore.todosFormData.valid"
				/>
				<p
					class="
						opacity-0
						max-h-0
						peer-required:opacity-100 peer-required:max-h-full
						text-sm text-pink-700
						transition
						duration-300
					"
					:class="{
						'opacity-100':
							!todoStore.todosFormData.valid &&
							todoStore.todosFormData.clicked,
						'max-h-full':
							!todoStore.todosFormData.valid &&
							todoStore.todosFormData.clicked,
					}"
				>
					Not all fields are valid!
				</p>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useTodoStore } from "../stores/todos.js";
import { ref, toRef } from "vue";
import FaIcon from "../components/UI/faIcon.vue";
import FormText from "../components/UI/formText.vue";
import FormTextArea from "../components/UI/formTextArea.vue";
import FormButton from "../components/UI/formButton.vue";

const todoStore = useTodoStore();

function resetForm() {
	setTimeout(() => {
		todoStore.setTodosFormData({
			id: null,
			title: "",
			description: "",
			valid: false,
			clicked: false,
		});
	}, 500);
}

function closeDetailsPanel() {
	todoStore.setTodosDetailsOpen(false);
	resetForm();
}

function validateForm(formData) {
	if (formData.title != "" && formData.description != "") {
		formData.valid = true;
	} else {
		formData.valid = false;
	}
	return formData;
}

function submitTodo() {
	let formData = todoStore.getTodosFormData;

	formData.clicked = true;

	formData = validateForm(formData);

	if (!formData.valid) {
		return;
	}

	const newTodo = {
		id: formData.id || todoStore.getTodosCount + 1,
		listId: 1,
		parentId: null,
		title: formData.title,
		description: formData.description,
		createdAt: new Date(),
		modifiedAt: new Date(),
		dueAt: "DATE/TIME",
		complete: formData.complete || false,
		reminder: {},
	};

	if (formData.id != null) {
		todoStore.updateTodo(formData.id, newTodo);
	} else {
		todoStore.addTodo(newTodo);
	}

	todoStore.setTodosDetailsOpen(false);

	resetForm();
}
</script>

<style scoped>
.details-panel {
	@apply fixed top-16 left-0 bottom-0 right-0 w-full max-h-0 p-4 flex flex-col -z-50 bg-white bg-opacity-100 opacity-0 transition duration-300 md:relative md:p-0 md:inset-auto;
}
.details-panel.open {
	@apply max-h-full h-auto z-50 opacity-100;
}
</style>