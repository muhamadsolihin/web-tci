<template>
	<section id="hero">
    <div class="container-border">
      <img
				class="asset-2"
				src="@/assets/images/who-we-are/asset-2.png"
				alt=""
			/>
      <div class="d-flex flex-row align-items-center">
        <h2 class="head">Our Gallery</h2>
        <SectionNumberComponent
          class="ms-auto"
          :number="'08 / 11'"
          :section-name="'Our Gallery'"
          :color="'#fff'"
        />
      </div>
			<div class="container d-flex flex-column justify-content-center">
				<div class="d-flex flex-column align-items-start justify-content-start">
          <div class="row">
        </div>
        <div class="row" style="margin-bottom: 0">
          <div class="col-xl-6">
            <div class="hover hover-2 text-white rounded">
              <img
                src="@/assets/images/galerry/pic1.png"
                style="width: 35em; height: 15em"
              />
              <!-- <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-4">
                <p class="hover-2-description text-uppercase mb-0">
                  Photo Studio
                </p>
              </div> -->
            </div>
  
            <div class="row" style="margin-top: 30px; margin-left: -3em">
              <div class="col-6">
                <img
                  src="@/assets/images/galerry/pic2.png"
                  style="width: 16.8em; height: 15em; float: right"
                />
              </div>
              <div class="col-6">
                <img
                  src="@/assets/images/galerry/pic3.png"
                  style="width: 16.8em; height: 15em; float: left"
                />
              </div>
            </div>
          </div>
  
          <div class="col-xl-6">
            <div class="row" style="margin-bottom: 7.5em">
              <div class="col-6" style="margin-left: -2em">
                <img
                  src="@/assets/images/galerry/pic4.png"
                  style="width: 17em; height: 31.7em"
                />
              </div>
              <div class="col-6" style="margin-left: -1.5em">
                <img
                  src="@/assets/images/galerry/pic5.png"
                  style="width: 17em; height: 15.3em"
                />
                <img
                  src="@/assets/images/galerry/pic6.png"
                  style="width: 17em; height: 15.3em; margin-top: 1em"
                />
              </div>
            </div> -->
          </div>
          </div>
          </div>
			</div>
		</div>

	</section>

</template>

<script setup>
import SectionNumberComponent from '@/components/SectionNumberComponent.vue';



</script>

<style lang="scss" scoped>
	#hero {
		background-color: #263a5f;
		background-size: cover;
		height: 100vh;
		width: 100%;
		padding: 0 80px;
		position: relative;
    z-index: -1;
		.container-border {
			position: relative;
			width: 100%;
			padding: 0 80px;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
			.container {
				height: 100vh;
				padding: 0;

				.hero-title {
					font-family: 'Montserrat', sans-serif;
					font-size: 4.5rem;
					font-weight: 600;
					line-height: 83px;
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
			.asset-2 {
				position: absolute;
				left: -1px;
				top: 30%;
			}
		}
		.asset-1 {
			position: absolute;
			bottom: -90px;
			left: 45%;
		}
		.asset-3 {
			position: absolute;
			bottom: 0;
		}
	}

  .head {
  font-family: "Albert Sans";
  font-size: 3.4em;
  color: #fff;
  font-weight: 600;
  margin-top: 3%;
  margin-left: 0;
}
</style>
