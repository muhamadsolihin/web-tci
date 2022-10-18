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
				v-if="theme == 'dark'"
			/>
			<img class="pointer" src="@/assets/images/icons/menu-dark.svg" v-else />
		</transition>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  theme: {
    type: String,
    require: true
  },
  direction: {
    type: String,
    require: true
  },
})
</script>
