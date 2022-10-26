<template>
  <section id="hero">
    <div class="container-border">
      <img
        class="asset-2"
        src="@/assets/images/who-we-are/asset-2.png"
        alt=""
      />
      <div class="d-flex flex-row align-items-center">
        <h2 class="head">Our Product</h2>
        <SectionNumberComponent
          class="ms-auto section-number"
          :number="'06 / 11'"
          :section-name="'Our Product'"
          :color="'#fff'"
        />
      </div>


      <div class="carousel-slider" id="responsive">
    <div class="carousel-content" data-pagination="true">
        <aside class="slide-item">slide 1</aside>
        <aside class="slide-item">slide 2</aside>
        <aside class="slide-item">slide 3</aside>
        <aside class="slide-item">slide 4</aside>
        <aside class="slide-item">slide 5</aside>
        <aside class="slide-item">slide 6</aside>
        <aside class="slide-item">slide 7</aside>
        <aside class="slide-item">slide 8</aside>
        <aside class="slide-item">slide 9</aside>
        <aside class="slide-item">slide 10</aside>
        <aside class="slide-item">slide 11</aside>
        <aside class="slide-item">slide 12</aside>
    </div>
    <button class="carousel-prev-btn">&larr;</button>
    <button class="carousel-next-btn">&rarr;</button>
    <div class="carousel-pagination"></div>
</div>



    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import Hammer from "hammerjs";
import { onMounted } from "vue";

const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("hero");
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


let carousel = (el, parameter) => {
    el = el !==undefined ? el : "";
    parameter = parameter !== undefined ? parameter : {};
    let method = {
        transition: parameter.transition !== undefined ? parameter.transition : null,
        responsive: parameter.grid !== undefined ? parameter.grid : null,
        pagination: parameter.pagination !== undefined ? parameter.pagination : false,
        autoplay: parameter.autoplay !== undefined ? parameter.autoplay : null,
        playTimer: parameter.autoplay !== undefined && parameter.autoplay.playTimer !== undefined
            ? parameter.autoplay.playTimer
            : 2000,
    },trigger = document.querySelectorAll(".carousel-slider"+el);
    Array.prototype.forEach.call(trigger, function (el) {
        
    let content = el.querySelector (".carousel-content"),
        count = content.childElementCount,
        responsive = method.responsive || JSON.parse (content.getAttribute ("data-grid")),
        widths,
        d_widths = el.offsetWidth,
        c_widths = d_widths * count,
        autoplay = method.autoplay || el.getAttribute ("data-autoplay"),
        autoplay_timer = method.playTimer || el.getAttribute ("data-timer"),
        is_pagination = method.pagination || content.getAttribute ("data-pagination"),
        config = {
            "lg": 1024,
            "md": 768,
            "sm": 667
        },
        step,
        pagination_content = el.querySelector (".carousel-pagination");

    content.firstElementChild.classList.add ("active");
    content.style.transitionDuration = method.transition || "500ms";
    this.autoplayEffect = null;

    let index_settings = () => {//tabindexleri slide itemlerine aktarıyoruz
        let slides = content.querySelectorAll (".slide-item");
        for (i in slides) {
            slides[ i ].tabIndex = i;
        }
    }, size = (widths) => {
        let item_resize = el.querySelectorAll (".slide-item");
        Array.prototype.forEach.call (item_resize, (item_size) => {
            item_size.style.width = widths + "px";
        });
    }, responsive_grid = () => {
        if (responsive) {
            if (window.innerWidth >= config.lg) {
                if (responsive.xl !== undefined) {
                    gridCount = responsive.xl;
                    widths = Number (d_widths) / Number (gridCount);
                }
            } else if (window.innerWidth >= config.md) {
                if (responsive.lg !== undefined) {
                    gridCount = responsive.lg;
                    widths = Number (d_widths) / Number (gridCount);
                    console.log (d_widths, gridCount, responsive)
                }
            } else if (window.innerWidth >= config.sm) {
                if (responsive.md !== undefined) {
                    gridCount = responsive.md;
                    widths = Number (d_widths) / Number (gridCount);
                }
            } else if (window.innerWidth < config.sm) {
                if (responsive.sm !== undefined) {
                    gridCount = responsive.sm;
                    widths = Number (d_widths) / Number (gridCount);
                }
            }
        } else {
            widths = d_widths;
        }
        size (widths);
        c_widths = widths * content.lastElementChild.tabIndex;
        content.style.minWidth = c_widths;
        return widths;
    };

    let autoplay_ = () => {
        if (autoplay) {
            let i = 0;
            let last_i = content.lastElementChild.tabIndex;
            this.autoplayEffect = setInterval (() => {
                if (last_i > i) {
                    content.style.transform = "translate3d(-" + d_widths * i + "px,0px,0px)";
                    content.children.item (i + 1).classList.add ("active");
                    content.children.item (i).classList.remove ("active");
                } else {
                    content.lastElementChild.classList.remove ("active");
                    content.firstElementChild.classList.add ("active");
                    content.style.transform = "translate3d(" + 0 + "px,0px,0px)";

                    i = 0;
                }
                i++;
            }, Number (autoplay_timer));
        }
    }, pagination = () => {
        if (is_pagination) {
            let pagination_item = el.querySelector (".carousel-pagination");
            for (let i = 0; i < count; i++) {
                let p_item = document.createElement ("a");
                p_item.href = "#!";
                p_item.classList.add ("item");
                p_item.tabIndex = i;
                pagination_item.appendChild (p_item);
            }
        }
    }, slider_next = (el) => {
        let content = el.querySelector (".carousel-content");
        let last_i = content.lastElementChild.tabIndex;
        let i = content.querySelector (".slide-item.active").tabIndex + 1;
        step = d_widths / responsive_grid ();
        widths = d_widths / step;
        if (step > 1) {
            last_i = last_i - step + 1;
        }
        if (i <= last_i) {
            content.children.item (i).classList.add ("active");
            content.children.item (i - 1).classList.remove ("active");
            let ml_ = widths * i;
            content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
            i++;
        } else {
            i = 1;
            content.lastElementChild.classList.remove ("active");
            content.firstElementChild.classList.add ("active");
            content.style.transform = "translate3d(" + 0 + "px,0px,0px)";
        }
    }, slider_prev = () => {
        let content = el.querySelector (".carousel-content");
        let last_i = content.lastElementChild.tabIndex;
        let i = content.querySelector (".slide-item.active").tabIndex;
        step = d_widths / responsive_grid ();
        widths = d_widths / step;
        if (i >= 1) {
            content.children.item (i - 1).classList.add ("active");
            content.children.item (i).classList.remove ("active");
            i--;
            let ml_ = widths * i;
            content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
        } else {
            i = last_i;
            content.lastElementChild.classList.add ("active");
            content.firstElementChild.classList.remove ("active");
            if (step > 1) {
                last_i = last_i - step + 1;
            }
            let ml_ = widths * ( last_i - 1 );
            content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
            i--;
        }

    }, slider_direction = (el) => {
        let prev = el.querySelector (".carousel-prev-btn");
        let next = el.querySelector (".carousel-next-btn");
        if (el.contains (prev) && el.contains (next)) {
            prev.addEventListener ("click", () => {
                window.clearInterval (this.autoplayEffect);
                slider_prev (el);
            }, false);

            next.addEventListener ("click", () => {
                window.clearInterval (this.autoplayEffect);
                slider_next (el);
            }, false);
        }
        if (el.contains (pagination_content)) {
            pagination ();
            let paginate = pagination_content.querySelectorAll (".item");
            Array.prototype.forEach.call (paginate, (el) => {
                el.addEventListener ("click", () => {
                    window.clearInterval (this.autoplayEffect);
                    let last_i = el.parentNode.lastChild.tabIndex,
                        i = el.tabIndex;
                    let ml_ = widths * i;
                    content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
                }, false);
            });
        }
    };
    window.addEventListener ("resize", () => {
        d_widths = el.offsetWidth;
        console.log ("ekran değişti", d_widths);
        responsive_grid ();
    }, true);
    responsive_grid ();
    slider_direction (el);
    autoplay_ ();
    index_settings ();

    });

    return this;
};

carousel();
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/bgproduct.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 80px;
  position: relative;

  .container-border {
    width: 100%;
    padding: 0 0 0 120px;

    .container {
      height: 100vh;
      padding: 0;

      .hero-title {
        font-family: "Montserrat", sans-serif;
        font-size: 4.5rem;
        font-weight: 600;
        line-height: 83px;
        text-align: start;
        color: white;
      }
      .section-number {
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
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
  .carousel-slider * {
    touch-action: manipulation;
}

.carousel-slider {
    position: relative;
    background: #fff;
    width: 100%;
    height: auto;
    border: 1px solid #e2e2e2;
    padding: 0;
    overflow: hidden;
}

.carousel-slider > .carousel-content {
    position: relative;
    -webkit-display: inline-flex;
    -moz-display: inline-flex;
    -ms-display: inline-flex;
    -o-display: inline-flex;
    display: inline-flex;
    user-select: none;
}

.carousel-slider > .carousel-content > .slide-item {
    background: white;
  height: 200px; padding-top: 100px;
}

.carousel-slider .carousel-next-btn,
.carousel-slider .carousel-prev-btn {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 14px 8px 14px;
    outline: none;
    border: none;
    transition: all 0.25s ease-in-out;
    text-align: center;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    -ms-transform: translate(0%, -50%);
    min-height: 40px;
    min-width: 40px;
}

.carousel-slider .carousel-next-btn:hover,
.carousel-slider .carousel-prev-btn:hover {
    background-color: black;
    cursor: pointer;
}

.carousel-slider .carousel-next-btn {
    position: absolute;
    right: 0;
}

.carousel-slider .carousel-prev-btn {
    position: absolute;
    left: 0;
}

.carousel-slider .carousel-pagination {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    bottom: 0;
    position: absolute;
    opacity: 0;
    left: 0;
}

.carousel-slider .carousel-pagination.stick .item {
    border-radius: 17px;
    min-width: 30px;
    min-height: 5px !important;
    cursor: pointer;
    position: relative;
    top: -10px;
}

.carousel-slider .carousel-pagination .item {
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.25s ease-in-out;
    color: white;
    min-height: 10px;
    min-width: 10px;
    border-radius: 50%;
    margin: 5px;
}

.carousel-slider .carousel-pagination .item:hover {
    background-color: black;
}

.carousel-slider:hover .carousel-next-btn,
.carousel-slider:hover .carousel-prev-btn,
.carousel-slider:hover .carousel-pagination {
    opacity: 1;
}






@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
  }
}

.section-number {
  @media screen and (max-width: 768px) {
    margin-left: -19em !important;
  }
}
.hide-mobile {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.head {
  font-family: "Albert Sans";
  font-size: 3.4em;
  color: #fff;
  font-weight: 600;
  margin-top: 3%;
  margin-left: 0;

  @media screen and (max-width: 768px) {
    margin-top: 3em;
    margin-left: -2em;
  }
}
.card-ic {
  width: 17em;
  height: 33em;
  background-color: #fff;
  box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  @media (min-width: 992px) {
    margin-top: 0;
  }
}

.ic-image {
  width: 12.5em;
  height: 4em;
  margin-top: 4em;
  margin-left: 10%;
}

.card-title {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  text-align: left;
  margin-top: 10%;
  margin-left: 6%;
}

.card-text {
  font-family: "Albert Sans";
  font-size: 1.125em;
  font-weight: 400;
  color: #8d8f9a;
  text-align: justify;
  margin-left: 6%;
}

.contact {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top: 20%;
  margin-left: 6%;
  text-align: justify;
}

.contactrbi {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top: 10%;
  margin-left: 6%;
  text-align: justify;
}
img {
  text-align: center;
  margin: 5%;
  margin-top: 1%;
}
</style>
