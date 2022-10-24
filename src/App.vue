<template>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Albert+Sans&display=swap"
			rel="stylesheet"
		/>
	</head>
	<router-view v-slot="{ Component, route }">
		<transition name="route" mode="out-in">
			<div class="container-fluid" :key="route.name">
				<component :is="Component"></component>
			</div>
		</transition>
	</router-view>
</template>

<script setup>
	import { RouterView } from 'vue-router';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;200;300;400;500;600;700&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

	#app {
		font-family: 'Albert Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #00000;
	}

	.container-fluid {
		height: 100vh;
		padding: 0 !important;
	}

	/* Route transitions */
	.route-enter-from {
		opacity: 0;
	}
	.route-enter-active {
		transition: all 0.2s ease-out;
	}
	.route-leave-to {
		opacity: 0;
	}
	.route-leave-active {
		transition: all 0.2s ease-in;
	}
</style>
