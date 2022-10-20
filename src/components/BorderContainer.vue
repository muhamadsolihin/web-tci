<template>
	<div class="container-border">
		<div
			class="section-bar"
			:style="`background-color: ${theme == 'dark' ? 'white' : '#B8BDC6'}`"
		>
			<div
				v-for="sec in sectionsLength - 1"
				:key="sec"
				class="bar"
				:style="`background-color: ${
					sec == currentSection
						? '#E78448'
						: theme == 'dark'
						? 'white'
						: '#B8BDC6'
				}; height: ${100 / (sectionsLength - 1)}%`"
			></div>
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';

	const props = defineProps({
		sectionsLength: {
			type: Number,
			require: true,
		},
		currentSection: {
			type: Number,
			require: true,
		},
		theme: {
			type: String,
			require: false,
			default: 'light',
		},
	});
</script>

<style lang="scss" scoped>
	.container-border {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 91vw;
		height: 100vh;
		padding: 0 70px;
		border-left: 1px solid #b8bdc6;
		border-right: 1px solid #b8bdc6;
		.section-bar {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(-50%, -50%);
			height: 384px;
			width: 3px;
			.bar {
				width: 3px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.container-border {
			display: none;
		}
	}
</style>
