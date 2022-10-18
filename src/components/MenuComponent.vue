<template>
	<div
		class="container fixed-top py-3 d-flex flex-row justify-content-between align-items-center"
		style="z-index: 1; background-color: transparent; padding: 0 60px"
	>
		<transition :name="direction" mode="out-in">
			<img src="@/assets/images/TCI.svg" v-if="theme == 'dark'" />
			<img src="@/assets/images/TCI-dark.svg" v-else />
		</transition>
		<transition :name="direction" mode="out-in">
			<img
				class="pointer"
				src="@/assets/images/icons/menu.svg"
				@click="showMenu = true"
				v-if="theme == 'dark'"
			/>
			<img
				class="pointer"
				src="@/assets/images/icons/menu-dark.svg"
				@click="showMenu = true"
				v-else
			/>
		</transition>
	</div>
	<transition name="ease" mode="out-in">
		<div
			class="container-fluid"
			style="
				position: absolute;
				height: 100vh;
				width: 100vw;
				background: rgba(0, 0, 0, 0.4);
				backdrop-filter: blur(10px);
				z-index: 2;
			"
			v-if="showMenu"
		>
			<div
				class="container py-3 d-flex flex-row justify-content-end align-items-center"
				style="padding: 0 60px"
			>
				<img
					class="my-4 pointer"
					src="@/assets/images/icons/close.svg"
					@click="showMenu = false"
				/>
			</div>
		</div>
	</transition>
</template>

<script setup>
	import { defineProps, ref } from 'vue';

	const props = defineProps({
		theme: {
			type: String,
			require: true,
		},
		direction: {
			type: String,
			require: true,
		},
	});

	const showMenu = ref(false);
</script>
