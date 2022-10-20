<template>
  <section id="howwedo">
     <div class="container-border">
       <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
       <div class="container  hero-collap">
         <div class="d-flex flex-row align-items-center">
           <h2 class="hero-title">Our Services</h2>
           <SectionNumberComponent
             class="ms-auto"
             :number="'05 / 11'"
             :section-name="'Our Services'"
             :color="'#000'"
           />
         </div>
         <div
           class="d-flex flex-row justify-content-start align-items-start w-50"
         >
           <div class="shape-blue"></div>
         </div>
         <div class="row">
             <div class="col-md-6">
                 <div class="title">
   <h1>Hello World</h1>
 </div>
 <div class="par">
 <p>
 Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
 </p>
 </div>
             </div>
             <!--end::Tabs-->
             <!--begin:Tab content-->
             <div class="col-md-6">
                 <div class="container_outer_img">
  <div class="img-inner">
  <img src='https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'  alt="" class="container_img"/>
        </div>
      </div>
   </div>
 <div class="overlay"></div>
 </div>
           </div>
           <div class="container-fluid mt-5 pt-5">
           <div class="row">
             <div
               class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
             >
               <img
                 class="text-center batik-img mt-3"
                 src="@/assets/images/batik-1.svg"
                 style="
                   float: left;
                   justify-content: left;
                   height: 195px;
                   z-index: -2;
                 "
               />
             </div>
           </div>
         </div>
         </div>
       
   
   </section>
   </template>
   <style lang="scss" scoped>
 #howwedo {
   background-color: black;
   height: 100vh;
   margin-top: 0;
   z-index: 1;
   .container-border {
     position: relative;
     width: 100%;
     padding: 0 80px;
     border-left: 1px solid #b8bdc6;
     border-right: 1px solid #b8bdc6;
   }
   .shape-blue {
   width: 68px;
   height: 22px;
   background-color: #0c4aa9;
   margin-right: 20px;
   margin-top: 10px;
 }
   .asset-2 {
     position: absolute;
     left: 5%;
     top: 0;
     height: 711px;
   }
   .container {
     display: flex;
   height: 100vh;
   justify-content: space-around;
   align-items: center;
   color: #fff;
   animation: expand .8s ease forwards;
   background-color: var(--secondary-color);
   position: relative;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   transition: all .8s ease;
     margin-top: -2em;
     padding: 80px;
     h2 {
       font-family: "Montserrat", sans-serif;
       font-weight: 600;
       font-size: 3rem;
       line-height: 57px;
     }
   }
 }
 
 
 .overlay {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   height: 100%;
   z-index: -10;
   background-color: var(--contrast-color);
 }
 
 
 
 .container_content {
  width: 50%;
 }
 
 .container_content_inner {
   width: 80%;
   margin-left: 80px;
 }
 
 .container_outer_img {
   margin: 50px;
   width: 50%;
   overflow: hidden;
 }   
     
 .container_img {
   width: 100%;
   animation: slideIn 1.5s ease-in-out forwards;
 }
 
 .par {
   height: auto;
   overflow: hidden;
 }
 
 p{
   line-height: 28px;
   transform: translateY(300px);
   animation: slideUp .8s ease-in-out forwards .8s;
 }
 
 .btns {
   height: 100%;
   position: relative;
   width: 150px;
   overflow: hidden;
 }
 
 .btns_more {
   background: transparent;
   border: 1px solid var(--contrast-color);
   border-radius: 50px;
   padding: 8px 12px;
   color: #BF307F;
   font-size: 16px;
   text-transform: uppercase;
   position: relative;
   margin-top: 15px;
   outline: none;
   transform: translateY(50px);
   animation: slideUp .8s ease-in-out  forwards 1s;
 }
 
 .title {
   overflow: hidden;
   height: auto;
 }
 
 h1 {
     font-size: 40px;
     color: var(--contrast-color);
     margin-bottom: 20px;
     transform: translateY(100px);
     animation: slideUp .8s ease forwards .5s;
 }
 
 @keyframes slideIn {
   0% {
     transform: translateX(500px) scale(.2);
   }
   100% {
     transform: translateX(0px) scale(1);
   }
 }
 
 @keyframes slideUp {
   0% {
     transform: translateY(300px);
   }
   100% {
     transform: translateY(0px);
   }
 }
 
 @keyframes expand {
   0% {
     transform: translateX(1400px);
   }
   100% {
     transform: translateX(0px);
   }
 }
 
 </style>