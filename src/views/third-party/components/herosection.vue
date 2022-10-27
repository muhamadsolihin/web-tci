<template>
  <section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row" style="margin-top: ">
        <div
          class="col-xl-12 col-lg-12 col-md-12 justify-content-center align-items-center text-center"
        >
          <p
            class="hero-title justify-content-center align-items-center text-center"
          >
            TCI Third-Party Code of Conduct
          </p>
          <p class="hero-sub-title">
            Business is all about trust. Trust is built on integrity. Your
            decision matters.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex flex-column justify-content-center"
        >
          <!-- <SectionNumberComponent
            class="mt-auto"
            :section-name="'Table of Content'"
            style="width:200px; padding:1em;"
            :color="'#ffffff'"
          /> -->
        </div>
      </div>
      <div class="row list-table g-5">
        <div class="col-md-6">
          <dl class="list-content">
            <dd>- Introduction</dd>
            <!-- <dt>Milk</dt> -->
            <dd>- TCI Values</dd>
            <dd>- Applicability of this code</dd>
            <dd>- 1. Legal and regulatory compliance</dd>
            <dd>- 1.1. Anti-corruption</dd>
            <dd>- 1.2. Trade compliance</dd>
            <dd>- 1.3 Insider Trading</dd>
            <dd>- 1.4. Fair competition / Antitrust</dd>
            <dd>- 1.5. Anti-money laundering and anti-facilitation of tax evasion</dd>
            <dd>- 1.6 Data privacy</dd>
            <dd>- 1.7. Intellectual property and confidential information</dd>            
          </dl>
        </div>
        <div class="col-md-6">
          <dl class="list-content">
            <dd>- 2. Ethical business prcatices</dd>
            <dd>- 2.1. Conflict of interest</dd>
            <dd>- 2.2. Record keeping</dd>
            <dd>- 2.3. Concern reporting</dd>
            <dd>- 3. Environmental and social regulations</dd>
            <dd>- 3.1. Fair employment</dd>
            <dd>- 3.2. Environment</dd>
            <dd>- 3.3. Health and safety</dd>
            <dd>- 3.4. Human rights</dd>
            <dd>- 4. Your responsibility under this code of conduct as a TCI <br/>Third Party</dd>
          </dl>
        </div>
      </div>
      
    </div>
    <img
      class="asset-3"
      src="@/assets/images/who-we-are/asset-3.png"
      alt="asset"
    />
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/third-party/BG.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px 0px 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;  
    .hero-title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      margin-left: 278px;
      margin-right: 225px;
      width: 748px;
      font-size: 50px;
      line-height: 61px;
      /* identical to box height */

      text-align: center;
      letter-spacing: -2.81895px;
      margin-top: 1em;
      color: #ffffff;

      @media screen and (min-width: 1920px) {
        font-size: 80px;
        line-height: 83px;
        width: 1133px;
      }
    }
    .hero-sub-title {
      font-family: "Albert Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height */
      margin-left: 3em;
      text-align: center;
      letter-spacing: -0.5px;

      color: #ffffff;
    }
    .section-number {
      border: 2px solid #b8bdc6;
      border-radius: 25px;
      margin-right: auto;
      padding: 5px 10px;
      font-family: "IBM Plex Mono", sans-serif;
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
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.list-table {
  padding-left: 119px;
  margin-top: 0;
}
.list-content {

  font-family: "Albert Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* or 170% */
  letter-spacing: -0.5px;

  color: #ffffff;
}

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    background-image: url("@/assets/images/our-work/bg-mobile.png");
    background-size: contain;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
      .hero-title {
        font-size: 40px;
        font-weight: 600;
        line-height: 48px;
      }
    }
  }
}
</style>
