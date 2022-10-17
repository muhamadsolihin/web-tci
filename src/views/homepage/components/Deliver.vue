<template>
  <section id="accelerated">
    <div class="container-border">
			<img
				class="asset-2"
				src="@/assets/images/animate/asset-2.png"
				alt=""
			/>
    <div class="container">
      <div class="row h-100" style="margin-top: 68px">
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <img
            class="mx-auto pic-cto"
            src="@/assets/images/pkarief.png"
            alt="photo"
            style="width: 85%; object-fit: contain"
          />
        </div>

        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
        >
          <div class="d-flex flex-column justify-content-center h-100">
            <SectionNumberComponent
              class="me-auto"
              :number="'02 / 11'"
              :section-name="'Mission'"
              :color="'#000000'"
              style="margin-top: 0"
            />
            <h2 class="mt-4">
              We Deliver <br />
              Consistent Solutions
            </h2>
            <p class="open-reg-25 mt-3">
              Using a combination of technology, process and talents we focus on
              our users needs and help to accelerate their business at any
              scale. We deliver consistent solutions and that is why we are all
              about the details and the end-users. <br />
              <br />
              We constantly listen to our user feedback through our development
              cycle to ensure a foundational setup for success. Whether it is to
              grow your business, get greater connection with customers.
            </p>
            <img
              class="mx-auto pic-cto"
              src="@/assets/images/imgGroup.png"
              alt="photo"
              style="width: 90%; object-fit: contain"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <HowWeDo/>
  <!-- <Sample/> -->
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import HowWeDo from "@/views/homepage/components/howWeDo.vue";
import Sample from "@/views/homepage/components/sample.vue";

</script>

<style lang="scss" scoped>
#accelerated {
  background-color: #eeeaea;
  height: 87.4vh;
  z-index: 1;
  .container-border {
			position: relative;
			width: 100%;
			padding: 0 80px;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
  }
  .asset-2 {
				position: absolute;
				left: 5%;
				top: 0;
        height: 711px;
			}
  .container {
    padding: 80px;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 3rem;
      line-height: 57px;
    }
  }
}
</style>
