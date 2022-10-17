<template>
	<section id="vision">
		<div class="container">
			<div class="d-flex flex-row align-items-center">
				<h2>Our Vision & Mission</h2>
				<SectionNumberComponent
					class="ms-auto"
					:number="'04 / 07'"
					:section-name="'Our Vision & Mission'"
					:color="'#000000'"
				/>
			</div>
      <div class="d-flex flex-row align-items-start justify-content-between mt-4">
        <div class="d-flex flex-column mt-3">
          <h3 class="monts-sem-35">Vision</h3>
          <ul>
            <li class="open-reg-24">Connecting human & technology as art</li>
            <li class="open-reg-24">Create opportunity for everyone</li>
          </ul>
        </div>
        <img src="@/assets/images/who-we-are/photo-4.png" alt="photo">
      </div>
      <div class="d-flex flex-row align-items-end justify-content-between" style="margin-top: -40px">
        <img src="@/assets/images/who-we-are/photo-5.png" alt="photo">
        <div class="d-flex flex-column mt-3 ms-5">
          <h3 class="monts-sem-35">Mission</h3>
          <ul>
            <li class="open-reg-24">To be the professional IT company that inspires creativity, enables innovation, and realize success for our customers.</li>
          </ul>
        </div>
      </div>
		</div>
	</section>
</template>

<script setup>
	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
</script>

<style lang="scss" scoped>
	#vision {
		background-color: white;
		.container {
			padding: 80px;
			h2 {
				font-family: 'Montserrat', sans-serif;
				font-weight: 600;
				font-size: 3rem;
				line-height: 57px;
			}
		}
	}
</style>
