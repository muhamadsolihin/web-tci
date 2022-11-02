<template>
  <section id="deliver">
    <div class="container-custom">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="row h-100">
        <div class="col-12 col-md-5 col-lg-5 col-xl-5 d-flex flex-row align-items-start">
          <img
            class="mx-auto pic-cto"
            :class="imageHover ? 'image-hover' : 'image-unhover'"
            src="@/assets/images/pkarief.png"
            alt="photo"
            @mouseenter="imageHover = true"
            @mouseleave="imageHover = false"
          />
        </div>
        <div class="col-12 col-md-7 col-lg-7 col-xl-7">
          <div class="d-flex flex-column justify-content-center h-100">
            <SectionNumberComponent
              class="me-auto mt-3"
              :number="'02 / 11'"
              :section-name="'Mission'"
              :color="'#000000'"
              style="margin-top: 0"
            />
            <h2 class="mt-2 title" :class="imageHover ? 'title-smaller' : 'title-bigger'">
              We Deliver <br />
              Consistent Solutions
            </h2>
            <p class="text-body" :class="imageHover ? 'text-smaller' : 'text-bigger'">
              Using a combination of technology, process and talents we focus on our users
              needs and help to accelerate their business at any scale. We deliver
              consistent solutions and that is why we are all about the details and the
              end-users.
            </p>
            <p class="text-body" :class="imageHover ? 'text-smaller' : 'text-bigger'">
              We constantly listen to our user feedback through our development cycle to
              ensure a foundational setup for success. Whether it is to grow your
              business, get greater connection with customers.
            </p>
            <img
              class="mx-auto pic-cto-1"
              :class="imageHover ? 'image-hover' : 'image-unhover'"
              src="@/assets/images/imgGroup.png"
              alt="photo"
              @mouseenter="imageHover = true"
              @mouseleave="imageHover = false"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hammer from "hammerjs";
import { onMounted, ref } from "vue";

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

const imageHover = ref(false);

onMounted(() => {
  var stage = document.getElementById("deliver");
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
#deliver {
  background-color: #eeeaea;
  height: 100vh;
  width: 100%;
  padding: 0 140px 340px ;
  z-index: 1;
  
  .container-custom {
    height: 100vh;
    padding: 80px 0;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 55px;
    }
    .pic-cto {
      width: 90%;
      object-fit: contain;
      
    }
    .pic-cto-1 {
      width: 90%;
      object-fit: contain;
    }
    .text-body {
      font-family: "Open Sans", sans-serif;
      line-height: 30px;
      font-weight: 400;
      width: 585px;
      color: #8D8F9A !important;
    }
  }
  .asset-2 {
    position: absolute;
    left: 5%;
    top: 0;
    height: 711px;
    @media (max-width: 768px) {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  #deliver {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        line-height: 20px;
        width: 385px;
      }
      .pic-cto {
        width: 90%;
        margin-left: 1em !important;
        object-fit: contain;
      }
    }

    .image-hover,
    .image-unhover,
    .title-smaller,
    .title-bigger,
    .text-smaller,
    .text-bigger {
      animation: 0s;
    }
  }
}

.image-hover {
  animation: popup 1s ease-out;
  transform: scale(1.1);
}
.image-unhover {
  animation: popdown 1s ease-out;
  transform: scale(1);
}
@keyframes popup {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes popdown {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

.title-smaller {
  animation: smaller 1s;
  font-size: 40px;
}
@keyframes smaller {
  from {
    font-size: 46px;
  }
  to {
    font-size: 40px;
  }
}
.title-bigger {
  animation: bigger 1s;
  font-size: 46px;
}
@keyframes bigger {
  from {
    font-size: 40px;
  }
  to {
    font-size: 46px;
  }
}

.text-smaller {
  animation: textsmaller 1s;
  font-size: 16px;
}
@keyframes textsmaller {
  from {
    font-size: 18px;
  }
  to {
    font-size: 16px;
  }
}
.text-bigger {
  animation: textbigger 1s;
  font-size: 18px;
}
@keyframes textbigger {
  from {
    font-size: 16px;
  }
  to {
    font-size: 18px;
  }
}
</style>
