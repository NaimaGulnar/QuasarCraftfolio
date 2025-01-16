<template>
    <q-form @submit.prevent="goToNextStep" :class="formStyles">
      <div :class="titleStyles">PERSONAL DETAILS</div>
      <q-input
        type="text"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.name"
        label="Your name *"
        required
      />
      <q-input
        type="text"
        outlined
        v-model="localFormData.role"
        label="Your role *"
        hint="Example: Frontend Developer"
        required
      />
      <q-input
        type="text"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.shortBio"
        label="Briefly describe yourself (1-2 line) *"
        hint="Example: A passioante frontend developer who is.."
        required
      />
      <q-input
        type="textarea"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.about"
        label="Write about yourself (1-2 para) *"
        required
      />
      <q-input
        type="text"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.resume"
        label="Your Resume Link *"
        hint="Make sure your drive link is accessible to everyone (not private)"
        required
      />
      <q-input
        type="email"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.email"
        label="Your Email Address *"
        hint="Example: xyz@gmail.com"
        required
      />
      <q-input
        type="url"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.linkedinURL"
        label="Your Linkedin Profile URL *"
        hint="Example: https://www.linkedin.com/in/xyz"
        required
      />
      <q-input
        type="url"
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.githubURL"
        label="Your GitHub Profile URL *"
        hint="Example: https://www.github.com/xyz"
        required
      />
      <q-btn
        label="Next"
        type="submit"
        :class="btnStyles"
        class="bg-dark text-white self-end"
      />
    </q-form>
  </template>
  
  <script setup>
  import { defineProps, reactive, watch } from "vue";
  import { usePortfolioStore } from "src/stores/portfolioStore";
  
  const portfolioStore = usePortfolioStore();
  
  const props = defineProps({
    formData: Object,
    goToNextStep: Function,
    formStyles: String,
    titleStyles: String,
    btnStyles: String,
  });
  
  const localFormData = reactive({ ...props.formData });
  
  watch(localFormData, (newData) => {
    portfolioStore.updateFormData(newData);
  });
  </script>
  