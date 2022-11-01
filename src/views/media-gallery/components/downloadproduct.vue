<template>
  <div class="container">
   <div class="row">
     <div class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex flex-column">
       <h1 class="hero-title mt-4 ml-5">Product Information</h1>
     </div>
   </div>
 </div>
 <section id="gallery">
   <div
     id="carouselExampleIndicators"
     class="carousel slide"
     data-bs-ride="carousel"
   >
     <div class="carousel-indicators">
       <button
         type="button"
         data-bs-target="#carouselExampleIndicators"
         data-bs-slide-to="0"
         class="active"
         aria-current="true"
         aria-label="Slide 1"
       ></button>
       <button
         type="button"
         data-bs-target="#carouselExampleIndicators"
         data-bs-slide-to="1"
         aria-label="Slide 2"
       ></button>
       <button
         type="button"
         data-bs-target="#carouselExampleIndicators"
         data-bs-slide-to="2"
         aria-label="Slide 3"
       ></button>
     </div>
     <div class="carousel-inner">
       <div class="carousel-item active">
         <div class="cards-wrapper">
           <div class="card bg-transparent">
             <div class="image-wrapper">
               <img src="@/assets/images/media-gallery/rbi.png" alt="..." />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/1-cimaHXYo2700VkPi4Wh0zU_5KpvejBO/view?usp=sharing"
                 class="btn btn1 btn-primary"
                 style="float: center; "
                 >E-Brochure IT Solutions &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>
           <div class="card">
             <div class="image-wrapper">
               <img
                 src="@/assets/images/media-gallery/arthology.png"
                 alt="..."
               />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/1-Fp54e1jl3H0htiEU-Tj1vnZbNMbVZQQ/view?usp=sharing"
                 class="btn btn2 btn-primary"
                 style="float: center; "
               >
                 E-Brochure Arthology &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> 
               </a>
             </div>
           </div>

           <div class="card">
             <div class="image-wrapper">
               <img
                 src="@/assets/images/media-gallery/ic-data.png"
                 alt="..."
               />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/13ebsJ7KbNneArsbDnqjOScc4BIryXtXQ/view?usp=sharing"
                 class="btn btn-primary"
                 style="float: center; margin-left: 25%"
                 >E-Brochure ICDATA &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>
         </div>
       </div>

       <div class="carousel-item">
         <div class="cards-wrapper">
           <div class="card">
             <div class="image-wrapper">
               <img src="@/assets/images/media-gallery/makasi.png" alt="..." />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/1WcGEzn_bjFn2oEjWhaCdiKmzLRvrv_HG/view?usp=sharing"
                 class="btn btn1 btn-primary"
                 style="float: center;"
                 >E-Brochure MAKASI &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>
           <div class="card">
             <div class="image-wrapper">
               <img
                 src="@/assets/images/media-gallery/ic-datacompany.png"
                 alt="..."
               />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/17eDsHPF8uCc5uZmfIkmZXH7hjGxcIgDe/view?usp=sharing"
                 class="btn btn-primary"
                 style="float: center; margin-left: 18%"
                 >ICDATA Company &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>

           <div class="card">
             <div class="image-wrapper">
               <img
                 src="@/assets/images/media-gallery/ic-datacompany.png"
                 alt="..."
               />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/1rgk934RtJG0Ui23-NmZec4Do0vp0hIsU/view?usp=sharing"
                 class="btn btn-primary"
                 style="float: center; margin-left: 18%"
                 >ICDATA Investor &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="cards-wrapper">
           <div class="card">
             <div class="image-wrapper">
               <img src="@/assets/images/media-gallery/ic-datacompany.png" alt="..." />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/1NnuEL3bUGJ17xaeHplZ30tpnZY0KYYu4/view?usp=sharing"
                 class="btn btn-primary"
                 style="float: center; margin-left: 18%"
                 >ICDATA Profesional &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>
           <div class="card">
             <div class="image-wrapper">
               <img src="@/assets/images/media-gallery/ic-datacompany.png" alt="..." />
             </div>
             <div class="card-body">
               <a
                 href="https://drive.google.com/file/d/1AIOiGuoYy7Z57NlU_YsHs3ggPV-QnQnJ/view?usp=sharing"
                 class="btn btn-primary"
                 style="float: center; margin-left: 18%"
                 >ICDATA Startup &nbsp;<img src="@/assets/images/media-gallery/icon-download.svg"> </a
               >
             </div>
           </div>
     </div>
         </div>
       </div>



      

     <button
       class="carousel-control-prev"
       type="button"
       data-bs-target="#carouselExampleIndicators"
       data-bs-slide="prev"
     >
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button
       class="carousel-control-next"
       type="button"
       data-bs-target="#carouselExampleIndicators"
       data-bs-slide="next"
     >
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>
 </section>
</template>

<script setup>
import { ref } from "vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#gallery {
 width: 100%;
 padding: 50px 140px;
 .container-custom {
   margin-top: -170px;
   z-index: 1;
 }
 @media screen and (max-width:768px){
   display: none;
 }
}
.card {
 border: none;
 border-radius: 0;
}
.carousel-inner {
 padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
 background-color: #000;
 width: 6vh;
 height: 6vh;
 border-radius: 50%;
 top: 50%;
 transform: translateY(-50%);
}
.carousel-control-prev span,
.carousel-control-next span {
 width: 1.5rem;
 height: 1.5rem;
}
.btn {
  width: 231px;
height: 45px;
border: none;
border-radius: 0 !important;
padding: 10px;

background: linear-gradient(93.03deg, #E28D41 3.11%, #E0983E 97.13%);
box-shadow: 0px 4px 18px rgba(224, 149, 62, 0.25);

}
.btn1{
  margin-left: 18%;

  @media screen and (min-width:1920px){
  margin-left: 26% ;
}
}
.btn2{
  margin-left: 18%;

  @media screen and (min-width:1920px){
  margin-left: 26% ;
}
}
.hero-title {
 font-family: "IBM Plex Mono";
 font-style: normal;
 font-weight: 400;
 font-size: 22px;
 line-height: 29px;
 /* identical to box height */
 width: 288px;
 border: 1px solid #000000;
 border-radius: 30px;
 padding: 10px;
 color: #000000;
  @media screen and (max-width:768px){
   display: none;
 }
}

.carousel-inner {
 width: 1144px;
 @media screen and (max-width:1920px){
    width: 100%;

  }
}
@media screen and (min-width: 577px) {
 .cards-wrapper {
   display: flex;
 }
 .card {
   margin: 0 0.5em;
   width: calc(100% / 2);
 }
 .image-wrapper {
   height: 20vw;
   margin: 0 auto;
 }
}
@media screen and (max-width: 576px) {
 .card:not(:first-child) {
   display: none;
 }
}

.image-wrapper img {
 max-width: 100%;
 max-height: 100%;
}
</style>
