<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Carrousel from "../components/Carrousel.vue";
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const fullWidthImage = ref(null);
const fullWidthImageInner = ref(null);
const carousel = ref(null);

onMounted(() => {
  const tl = gsap.timeline();
  tl.from(fullWidthImage.value, {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "power2.inOut",
  });

  tl.from(fullWidthImageInner.value, {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "power2.inOut",
  });

  tl.from(carousel.value, {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.inOut",
  });
});
</script>

<template>
  <div class="full-width-image" ref="fullWidthImage">
    <NavBar />
    <div class="full-width-image" ref="fullWidthImageInner">
      <img src="../assets/images/1.png" alt="image description" />
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="container flex items-center justify-center h-full">
    <div class="flex flex-col items-center space-y-4">
      <div class="flex items-center space-x-4">
        <div class="bg-[#D9C39A] p-2 rounded-l-lg">
          <img
            alt="image"
            class="rounded-lg"
            height="100"
            src="../assets/images/6.jpeg"
            width="150"
          />
        </div>
        <div>
          <p class="text-black text-lg">
            Sentez-vous ce vent qui vous chatouille l'estomac ?
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div>
          <p class="text-black text-lg">
            Sentez-vous ce vent qui vous chatouille l'estomac ?
          </p>
        </div>
        <div class="bg-[#D9C39A] p-2 rounded-l-lg">
          <img
            alt="image"
            class="rounded-lg"
            height="100"
            src="../assets/images/7.webp"
            width="150"
          />
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="bg-[#D9C39A] p-2 rounded-l-lg">
          <img
            alt="image"
            class="rounded-lg"
            height="100"
            src="../assets/images/8.webp"
            width="150"
          />
        </div>
        <div>
          <p class="text-black text-lg">
            Sentez-vous ce vent qui vous chatouille l'estomac ?
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="image-wrapper">
      <img src="../assets/images/2.png" class="img" />
    </div>
    <button
      style="
        background-color: black;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 auto;
      "
    >
      Click me
    </button>
  </div>
  <br />
  <Carrousel />
  <br />
  <Footer />
</template>

<style scoped>
.scroll-container {
  overflow-y: auto;
  height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  width: 94%;
  position: flex;
  border-radius: 80px;
  max-width: 100%;
  overflow: hidden;
  height: 490px;
  object-fit: cover;
  margin: 0 auto;
  cursor: pointer;
}

.full-width-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .full-width-image {
    height: 50vh;
  }
}

@media (max-width: 480px) {
  .full-width-image {
    height: 30vh;
  }
}
</style>
