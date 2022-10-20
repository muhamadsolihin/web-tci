<template>
	<div
		class="d-flex flex-row align-items-center section-number"
		:style="`border: 1px solid ${color}; color: ${color};`"
	>
		<p class="mb-0">{{ number }}</p>
		<hr class="mx-2" v-if="number != ''" />
		<p class="mb-0">{{ sectionName }}</p>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';

	const props = defineProps({
		number: {
			type: String,
			require: true,
			default: '',
		},
		sectionName: {
			type: String,
			require: true,
			default: '',
		},
		color: {
			type: String,
			require: true,
			default: '',
		},
	});
</script>

<style scoped lang="scss">
	.section-number {
		border-radius: 25px;
		padding: 5px 10px;
		font-family: 'IBM Plex Mono', sans-serif;
		hr {
			width: 20px;
			border-top: 2px solid;
		}
	}
</style>
