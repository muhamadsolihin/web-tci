<template>
  <section id="gallery">
   <div class="container">
    <div class="container">
    <h1>Play YouTube or Vimeo Videos in Bootstrap 5 Modal</h1>
  

 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary video-btn" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-bs-target="#myModal">
  Play Video 1 - autoplay
</button>
  
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary video-btn" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/IP7uGKgJL8U" data-bs-target="#myModal">
  Play Video 2
</button>
  
  
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary video-btn" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/A-twOC3W558" data-bs-target="#myModal">
  Play Video 3
</button>
  
  
     <!-- Button trigger modal -->
<button type="button" class="btn btn-primary video-btn" data-bs-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-bs-target="#myModal">
  Play Vimeo Video
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      
      <div class="modal-body">
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>        
        <!-- 16:9 aspect ratio -->
<div class="ratio ratio-16x9">
  <iframe class="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
</div>
        
        
      </div>

    </div>
  </div>
</div> 
  
  
  
</div>

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
}

body {margin:2rem;}

.modal-dialog {
      max-width: 800px;
      margin: 30px auto;
  }

.modal-body {
  position:relative;
  padding:0px;
}
.btn-close {
  position:absolute;
  right:-30px;
  top:0;
}

</style>
