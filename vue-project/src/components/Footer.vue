<template>
  <footer class="bg-blue-900 text-white py-5">
    <div class="container mx-auto flex justify-center">
      <div class="flex flex-wrap space-x-4">
        <div class="flex space-x-4">
          <a class="text-white" href="#">
            <i class="fab fa-times"></i>
          </a>
          <a class="text-white" href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="text-white" href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="text-white" href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <div class="flex flex-wrap space-x-20">
          <div>
            <h3 class="font-bold mb-2">Use cases</h3>
            <ul>
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">Explore</h3>
            <ul>
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </div>

        <div class="text-right">
          <img src="../assets/images/3.png" alt="img" class="footer-image" />
        </div>
      </div>
    </div>
  </footer>
  <br />
</template>

<style scoped>
footer {
  border-radius: 80px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 200px;
}

.footer-image {
  width: 150%;
  max-width: 200px;
  height: 100 px;
}

.container {
  max-width: 120%;
  padding: 0 20px;
}

.flex {
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  footer {
    height: auto;
    flex-direction: column;
  }
  .footer-image {
    width: 50%;
    margin: 20px auto;
  }
  .flex {
    flex-direction: column;
    ul {
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  footer {
    height: 250px;
  }
  .footer-image {
    width: 30%;
  }
}

@media (min-width: 1025px) {
  footer {
    height: 200px;
    .footer-image {
      width: 20%;
    }
  }
}
</style>
