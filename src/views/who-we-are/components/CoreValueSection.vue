<template>
  <section id="core-value">
    <BorderContainer
      :theme="'light'"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="d-flex flex-column h-100 pt-4">
        <h1 class="title">Our Core Values</h1>
        <div class="shape"></div>

        <div class="cores d-flex flex-row align-items-start my-auto">
          <div
            class="core d-flex flex-column"
            :style="`
                transform: translateX(-${posX}px);
              `"
            v-for="(core, indexCore) in coreValues"
            :key="indexCore"
          >
            <SectionNumberComponent
              class="me-auto"
              :number="''"
              :section-name="`- 0${indexCore + 1} ${core.name}`"
              :color="'#000000'"
            />
            <div class="d-flex flex-row align-items-center mt-4">
              <div class="circle"></div>
              <div class="border-dash"></div>
            </div>
            <p class="mb-0 description">{{ core.description }}</p>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-end w-100">
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
        </div>

        <SectionNumberComponent
          class="mt-auto me-auto pointer"
          :number="'03 / 07'"
          :section-name="'Our Core Values'"
          :color="'#000000'"
        />
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
    name: "Innovation",
    description:
      "We question conventional wisdom & challenge the status quo. If  there  is  a  better  way,  we'll  find  it. We're excited by ingenuity and thrilled to try something new.",
  },
  {
    name: "Collaboration",
    description:
      "We work with partners around the world from individual employers & regional start-ups to multinational enterprises in the public & private sectors, goverment and communities.",
  },
  {
    name: "Team Work",
    description:
      "We communicate and co-operate with each others and with our communities.",
  },
  {
    name: "Growth",
    description: "Embrace opportunities to learn and improve.",
  },
  {
    name: "Passion",
    description: "To excel through quality, to delight our clients, to enjoy our work.",
  },
  {
    name: "Loyalty",
    description:
      "Means we stay true to the company and to each other in good and bad times",
  },
  {
    name: "Agility",
    description:
      "Being fast and flexible, dynamic & adaptive, in delivering pragmatic, and value-based solutions to succeeed in our business.",
  },
  {
    name: "Integrity",
    description:
      "Speaking with truth fullnes and sincerity, acting with honesty & fairness, and behaving, professionally and righteously.",
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
  background-color: white;
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    width: 100%;
    z-index: 2;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
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
        width: 350px;
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

@media screen and (max-width: 768px) {
  #core-value {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
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
