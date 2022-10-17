<template>
	<div class="cta d-flex flex-row align-items-center pointer">
		<p class="mb-0">{{ ctaText }}</p>
		<img class="ms-2" src="@/assets/images/icons/arrow-top-right.svg" alt="" />
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';

	const props = defineProps({
		ctaText: {
			type: String,
			require: true,
			default: 'CTA text',
		},
	});
</script>

<style lang="scss" scoped>
	.cta {
		border-radius: 25px;
		margin-right: auto;
		padding: 5px 10px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-size: 22px;
		border: 1px solid #000000;
		color: #000000;
	}
</style>
