<template>
	<section id="hero">
    <video autoplay muted loop id="bg-video">
        <source src="@/assets/images/video.mp4" type="video/mp4" />
      </video>
		<div class="container-custom d-flex flex-column justify-content-center">
			<BorderContainer
				:theme="'dark'"
				:sections-length="sectionsLength"
				:current-section="currentSection"
			/>
			<div class="row">
				<div class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex flex-column">
					<SectionNumberComponent
						class="mt-auto"
						:number="'01 / 17'"
						:section-name="'About'"
						:color="'#ffffff'"
					/>
					<h1 class="hero-title mt-4">
            Generate <br />
              New Business <br />
              Ideas
					</h1>
					<div class="d-flex flex-row justify-content-start align-items-start">
						<div class="shape-blue"></div>
						<p class="albert-reg-20 text-white text-description">
							  We design and build solutions by connecting ideas and technology
                to solve problems and get new ideas to business lifecycle
						</p>
					</div>
				</div>
			</div>
		</div>
    <img
        class="asset-1"
        src="@/assets/images/who-we-are/asset-1.png"
        alt="asset"
      />
		<img
			class="asset-3"
			src="@/assets/images/who-we-are/asset-3.png"
			alt="asset"
		/>
	</section>
</template>

<script setup>
	import { onMounted } from 'vue';
	import Hammer from 'hammerjs';

	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
	import BorderContainer from '@/components/BorderContainer.vue';

	const props = defineProps({
		sectionsLength: {
			type: Number,
			require: true,
		},
		currentSection: {
			type: Number,
			require: true,
		},
	});

	const emit = defineEmits(['swipeUp', 'swipeDown']);

	onMounted(() => {
		var stage = document.getElementById('hero');
		var hammertime = new Hammer.Manager(stage);
		var Swipe = new Hammer.Swipe();
		hammertime.add(Swipe);
		hammertime.on('swipeup', function (ev) {
			emit('swipeUp');
		});
		hammertime.on('swipedown', function (ev) {
			emit('swipeDown');
		});
	});
</script>

<style lang="scss" scoped>
  #bg-video {
    position: fixed;
    background-size: cover;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -4;
    @media (max-width: 768px) {
    }
  }
	#hero {
		height: 100vh;
		width: 100%;
		padding: 0 140px;
		position: relative;
		.container-custom {
			height: 100vh;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
      @media screen and (max-width: 1920px) {
    padding-right: 29em;
      }
			.hero-title {
				font-family: 'Montserrat', sans-serif;
				font-size: 80px;
				font-weight: 600;
				line-height: 83px;
        width: 736px;
				text-align: start;
				color: white;
			}
			.section-number {
				border: 2px solid #b8bdc6;
				border-radius: 25px;
				margin-right: auto;
				padding: 5px 10px;
				font-family: 'IBM Plex Mono', sans-serif;
				hr {
					width: 20px;
					border-top: 2px solid;
				}
			}
			.shape-blue {
				width: 68px;
				height: 22px;
				background-color: #0c4aa9;
				margin-right: 20px;
				margin-top: 10px;
			}
		}
    .asset-1 {
      position: absolute;
      bottom: -90px;
      left: 45%;
      @media (max-width: 768px) {
        display: none;
      }
    }
		.asset-2 {
			position: absolute;
			left: -1px;
			top: 30%;
		}
		.asset-3 {
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}

	@media screen and (max-width: 768px) {
		#hero {
			padding: 0 30px;
			.container-custom {
				height: 100vh;
				padding: 0;
				border: none;
				.hero-title {
					font-size: 40px;
					font-weight: 600;
					line-height: 48px;
				}
				.text-description {
					width: 50%;
				}
			}
		}
	}
</style>
