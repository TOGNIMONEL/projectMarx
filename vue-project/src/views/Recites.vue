<script setup>
import { gsap } from "gsap";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

gsap.from(".content", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  stagger: 0.2,
});

gsap.set(".plus-icon", {
  transform: "rotate(5deg)",
});

document.querySelectorAll(".plus-icon").forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    gsap.to(icon, {
      duration: 0.5,
      transform: "rotate(360deg)",
    });
  });

  icon.addEventListener("mouseout", () => {
    gsap.to(icon, {
      duration: 0.5,
      transform: "rotate(0deg)",
    });
  });
});

gsap.from(".image img", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  stagger: 0.2,
});
</script>

<template>
  <NavBar />
  <br />
  <div class="text-center">
    <h1 class="text-6xl font-bold" style="font-family: 'Amsterdam four', cursive">
      Nos Recettes
    </h1>
    <div class="mt-2 border-t-4 mx-auto"></div>
  </div>
  <div class="container">
    <div class="content">
      <div class="text">
        <h1>Salmore Jologo</h1>
        <h2>Subheading</h2>
        <p>
          Body text for your whole article or post. We'll put in some lorem ipsum to show
          how a filled-out page might look.
        </p>
        <p>
          Exerciser efficient emerging, minim veniam aute carefully curated. Grazed cover
          stories exquisite perfect nostrud ad incididunt. Content, elit incididunt
          stories culpa ut. Punctual adipiscing, research many Scandinavian impeccable
          aute quality of life sunt proper pariatur Melbourne occaecat. Researching. Qua
          voluptate aliqua ut. Perfect destination Toso remarkable office Helsinki
          escapeur. Basket found. Zürich sleepy perfect consectetur.
        </p>
        <div class="plus-icon">+</div>
      </div>
      <div class="image">
        <img alt="image1" height="300" src="../assets/images/9.jpg" width="400" />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="content">
      <div class="text">
        <h1>Section 2</h1>
        <h2>Subheading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Exerciser efficient emerging, minim veniam aute carefully curated. Grazed cover
          stories exquisite perfect nostrud ad incididunt. Content, elit incididunt
          stories culpa ut. Punctual adipiscing, research many Scandinavian impeccable
          aute quality of life sunt proper pariatur Melbourne occaecat. Researching. Qua
          voluptate aliqua ut. Perfect destination Toso remarkable office Helsinki
          escapeur. Basket found. Zürich sleepy perfect consectetur.
        </p>
        <div class="plus-icon">+</div>
      </div>
      <div class="image">
        <img alt="Image 2" height="300" src="../assets/images/5.webp" width="400" />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="content">
      <div class="text">
        <h1>Section 3</h1>
        <h2>Subheading 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Exerciser efficient emerging, minim veniam aute carefully curated. Grazed cover
          stories exquisite perfect nostrud ad incididunt. Content, elit incididunt
          stories culpa ut. Punctual adipiscing, research many Scandinavian impeccable
          aute quality of life sunt proper pariatur Melbourne occaecat. Researching. Qua
          voluptate aliqua ut. Perfect destination Toso remarkable office Helsinki
          escapeur. Basket found. Zürich sleepy perfect consectetur.
        </p>
        <div class="plus-icon">+</div>
      </div>
      <div class="image">
        <img alt="Image 3" height="300" src="../assets/images/10.jpg" width="400" />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="content">
      <div class="text">
        <h1>Section 4</h1>
        <h2>Subheading 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Exerciser efficient emerging, minim veniam aute carefully curated. Grazed cover
          stories exquisite perfect nostrud ad incididunt. Content, elit incididunt
          stories culpa ut. Punctual adipiscing, research many Scandinavian impeccable
          aute quality of life sunt proper pariatur Melbourne occaecat. Researching. Qua
          voluptate aliqua ut. Perfect destination Toso remarkable office Helsinki
          escapeur. Basket found. Zürich sleepy perfect consectetur.
        </p>
        <div class="plus-icon">+</div>
      </div>
      <div class="image">
        <img alt="Image 4" height="300" src="../assets/images/4.webp" width="400" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #3a4a5a;
  color: #ffffff;
}
.container {
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
.content {
  background-color: #3a4a5a;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;
}
.text {
  max-width: 50%;
  margin-right: 20px;
}
.text h1 {
  font-size: 24px;
  margin: 0;
}
.text h2 {
  font-size: 16px;
  color: #b0b0b0;
  margin: 5px 0 20px 0;
}
.text p {
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 20px 0;
}
.image {
  max-width: 50%;
}
.image img {
  width: 100%;
  border-radius: 8px;
}
.plus-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}

/* xs */
@media (max-width: 575px) {
  .content {
    padding: 15px;
    border-radius: 4px;
  }
}

/* sm */
@media (min-width: 576px) and (max-width: 767px) {
  .content {
    padding: 18px;
    border-radius: 6px;
  }
}

/* md */
@media (min-width: 768px) and (max-width: 991px) {
  .content {
    padding: 20px;
    border-radius: 8px;
  }
}

/* lg */
@media (min-width: 992px) and (max-width: 1199px) {
  .content {
    padding: 22px;
    border-radius: 10px;
  }
}

/* xl */
@media (min-width: 1200px) {
  .content {
    padding: 25px;
    border-radius: 12px;
  }
}
</style>
