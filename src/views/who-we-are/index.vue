<template>
	<section class="hero">
		<div class="container-border">
      <img class="asset-2" src="@/assets/images/who-we-are/asset-2.png" alt="">
			<div class="container d-flex flex-column justify-content-center">
				<div class="d-flex flex-column align-items-start justify-content-start">
					<div class="section-number d-flex flex-row align-items-center">
						<p class="mb-0">01 / 07</p>
						<hr class="mx-2" />
						<p class="mb-0">About</p>
					</div>
					<h1 class="hero-title mt-4">
						Digital & IT <br />
						Solution for <br />
						Business Future
					</h1>
					<div class="d-flex flex-row justify-content-start align-items-start w-50">
						<div class="shape-blue"></div>
						<p class="albert-reg-20">
							We design and build solutions by connecting ideas and technology
							to solve problems and get new ideas to business lifecycle
						</p>
					</div>
				</div>
			</div>
		</div>
    <img class="asset-1" src="@/assets/images/who-we-are/asset-1.png" alt="asset">
    <img class="asset-3" src="@/assets/images/who-we-are/asset-3.png" alt="asset">
	</section>
	<section class="two">
		<h1>Second Page</h1>
	</section>
	<section class="three">
		<h1>Third Page</h1>
	</section>
	<section class="four">
		<h1>Fourth Page</h1>
	</section>
</template>

<style lang="scss" scoped>
	.w-50 {
		width: 50%;
	}
	.albert-reg-20 {
		font-family: 'Albert Sans', sans-serif;
		font-size: 20px;
		line-height: 30px;
		font-weight: 400;
		text-align: start;
	}
  .shape-blue {
    width: 68px;
    height: 22px;
    background-color: #0C4AA9;
    margin-right: 20px;
    margin-top: 10px;
  }

	section {
		height: 100vh;
		display: flex;
		color: white;
		scroll-snap-align: start;
		scroll-behavior: smooth;
	}
	.container-border {
    position: relative;
		width: 100%;
		padding: 0 80px;
		border-left: 1px solid #b8bdc6;
		border-right: 1px solid #b8bdc6;
    .asset-2 {
      position: absolute;
      left: -1px;
      top: 30%;
    }
	}
	.hero {
		background-image: url('@/assets/images/who-we-are/bg-hero-we-are.png');
		background-size: cover;
		height: 100vh;
		width: 100%;
		padding: 0 80px;
      position: relative;
		.container {
			height: 100vh;
			padding: 0;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
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
		}
		.hero-title {
			font-family: 'Montserrat', sans-serif;
			font-size: 4.5rem;
			font-weight: 600;
			line-height: 83px;
			text-align: start;
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
	.two {
		background: rgb(36, 164, 138);
	}
	.three {
		background: rgb(67, 91, 175);
	}
	.four {
		background: lightsalmon;
	}
</style>
