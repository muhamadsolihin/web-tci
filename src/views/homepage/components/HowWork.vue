<template>

	<section id="core-value">
	  <BorderContainer
		:theme="'light'"
		:sections-length="sectionsLength"
		:current-section="currentSection"
	  />
	  <div class="container-custom">
		<div class="d-flex flex-column h-100 pt-4">
			<SectionNumberComponent
			class="mt-auto me-auto pointer"
			:number="'03 / 07'"
			:section-name="'How We Work'"
			:color="'#fff'"
		  />
		  <h1 class="title-1">How We Work</h1>
		  
  
		  <div class="cores d-flex flex-row align-items-start justify-content-center my-auto">
			<div
			  class="core d-flex flex-column"
			  :style="`
				  transform: translateX(-${posX}px);
				`"
			  v-for="(core, indexCore) in coreValues"
			  :key="indexCore"
			>
			  <!-- <SectionNumberComponent
				class="me-auto"
				:number="''"
				:section-name="`- 0${indexCore + 1} ${core.name}`"
				:color="'#000000'"
			  /> -->
			  <p class="mb-0 title">{{ core.name }}</p>
			  <div class="d-flex flex-row align-items-center mt-4">
				<div class="circle"></div>
				<div class="border-dash"></div>
			  </div>
			  <p class="mb-0 description">{{ core.description }}</p>
			</div>
		  </div>
		  <!-- <div class="d-flex flex-row justify-content-end w-100">
          <button
            type="button"
            class="btn btn-small btn-arrow"
            :class="posX == 0 ? 'disabled' : ''"
            @click="minPos"
          >
            <img src="@/assets/images/icons/caret-left.svg" alt="icon" />
          </button>
          <button
            type="button"
            class="btn btn-small btn-arrow ms-2"
            :class="posX == 2400 ? 'disabled' : ''"
            @click="addPos"
          >
            <img src="@/assets/images/icons/caret-right.svg" alt="icon" />
          </button>
        </div> -->

  

		</div>
	  </div>
	</section>
  </template>
  
  <script setup>
  import { defineProps, onMounted, ref } from "vue";
  import Hammer from "hammerjs";
  
  import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
  import BorderContainer from "@/components/BorderContainer.vue";
  
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
  const emit = defineEmits(["swipeUp", "swipeDown"]);
  
  const posX = ref(0);
  const addPos = () => {
	posX.value += 300;
  };
  const minPos = () => {
	posX.value -= 300;
  };
  const coreValues = ref([
	{
	  name: "Discover, Design & build",
	  description:
		"We delivered tailored Digital and IT Solutions by listening toour user needs, build prototype based on real feedback and apply user feedbacl into scalable MVP. The way our end products  are built to give a great user experience",
	},

	{
	  name: "We grow your business",
	  description:
		"  Our expertise work passionately in each product cycle to make  sure our users gain the benefit of growing their business. Our solution will make it easier for them to engage with customers and improve consistency.",
	},
	{
	  name: "Dedicated for excellence",
	  description:
		"   Our team fully assessed in terms of skills, experience, and personality. Our objective is to deeply analyzed users’ needs to create solution that speaks to your specific demographic and meet your specified requirements.",
	},
	
  ]);
  
  onMounted(() => {
	var stage = document.getElementById("core-value");
	var hammertime = new Hammer.Manager(stage);
	var Swipe = new Hammer.Swipe();
	hammertime.add(Swipe);
	hammertime.on("swipeup", function (ev) {
	  emit("swipeUp");
	});
	hammertime.on("swipedown", function (ev) {
	  emit("swipeDown");
	});
  });
  </script>
  
  <style lang="scss" scoped>
  #core-value {
	height: 100vh;
	width: 100%;
	padding: 0 140px;
	background-color: #263a5f;
  background-image: linear-gradient(#263a5f 35%, #fff 30%);
	// background: linear-gradient(#263a5f 20vh,#263a5f);
	.container-custom {
	  padding: 80px 0;
	  height: 100vh;
	  width: 100%;
	  z-index: 2;
	  .title {
		font-family: "Montserrat", sans-serif;
		font-weight: 600;
		font-size: 30px;
    width:345px;
		line-height: 57px;
	  }
	  .shape {
		width: 38px;
		height: 22px;
		background-color: #0c4aa9;
		margin-top: 10px;
	  }
	  .cores {
		padding: 20px 0;
		width: 100%;
		overflow-x: scroll;
		.core {
			margin-top:3%;
			margin-bottom:4%;
		  width: 550px;
		  padding-right: 10px;
		  transition: 0.5s ease-out;
		  .description {
			font-family: "Albert Sans", sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 30px;
			color: #8d8f9a;
			margin-top: 20px;
			padding-right: 40px;
		  }
		  .circle {
			width: 18px;
			height: 18px;
			background: #e78448;
			border-radius: 30px;
		  }
		  .border-dash {
			width: 300px;
			height: 0px;
			border-top: 2px dashed #e78448;
			margin-left: 10px;
		  }
		}
	  }
	}
  }


  .title-1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  margin-top: 20px;
  letter-spacing: -1.82px;
  color: #fff;
  @media screen and (max-width:768px){
    font-size: 20px;
    width: 239px;
    color: #fff;
    margin-top: -10em;
    line-height: 20px;
  }
}
  
  @media screen and (max-width: 768px) {
	#core-value {
		
	  padding: 0 30px;
    background-color: #263a5f;
  background-image: linear-gradient(#263a5f 20%, #fff 20%);
	  .container-custom {
		height: 100vh;
		padding: 80px 0;
		border: none;
		.title {
		  font-size: 20px;
		  font-weight: 600;
		  line-height: 20px;
		}
    .core{
      width:350px;
    }
		.text-body {
		  font-size: 12px;
		  margin-top: 5px;
		  line-height: 30px;
		}
	  }
	}
  }
  </style>
  