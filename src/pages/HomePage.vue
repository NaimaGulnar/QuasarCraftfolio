<template>
  <q-page class="homePage column wrap justify-center items-center text-center">
    <div class="main-heading q-mb-lg">CRAFTFOLIO</div>
    <div class="subheading1 q-mb-lg">"Craft a portfolio that speaks for you!"</div>
    <div class="subheading2 q-mb-xl">
      Enter your details, submit the form, and instantly download your Portfolio HTML
      file.
    </div>
    <q-btn
      outline
      class="homePageBtn q-py-md q-px-xl hover-bg-opacity-80"
      icon-right="arrow_right_alt"
      label="Get Started"
      @click="goToFormPage"
    />
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToFormPage = () => {
  router.push({ path: "form" });
};
</script>

<style scoped>
.homePage {
  background: linear-gradient(135deg, #060606, #525252);
  min-height: 100vh;
  padding: 0.5rem;
}
.main-heading {
  letter-spacing: 0.8rem;
  color: #86ffd3;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.9);
  font-size: 6rem;
  font-weight: bold;
}
.subheading1 {
  color: #cccccc;
  letter-spacing: 0.3rem;
  font-style: italic;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.9);
  font-size: 2rem;
}
.subheading2 {
  color: #cccccc;
  letter-spacing: 0.2rem;
  width: 85vw;
  font-size: 1.2rem;
}
.homePageBtn {
  color: #86ffd3;
  border: 2px solid #86ffd3;
  letter-spacing: 0.3rem;
  border-radius: 0.5rem;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.9);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  font-size: 1.2rem;
  font-weight: bold;
}
@media screen and (max-width: 1024px) {
  .main-heading {
    font-size: 4rem;
  }
  .subheading1 {
    font-size: 1.5rem;
  }
  .subheading2 {
    font-size: 1rem;
  }
  .homePageBtn {
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .main-heading {
    font-size: 3rem;
  }
  .subheading1 {
    font-size: 1.2rem;
  }
  .subheading2 {
    font-size: 0.9rem;
  }
  .homePageBtn {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 480px) {
  .main-heading {
    font-size: 1.5rem;
  }
  .subheading1 {
    font-size: 1rem;
  }
  .subheading2 {
    font-size: 0.8rem;
  }
  .homePageBtn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>
