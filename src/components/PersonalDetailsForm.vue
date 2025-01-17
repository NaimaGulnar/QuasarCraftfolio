<template>
  <!-- Form to collect personal details -->
  <!-- The form submission is prevented from triggering a page refresh. Instead, the method goToNextStep is executed when the form is submitted. -->
  <!-- Dynamically binds CSS class styles passed from the parent component. -->
  <q-form @submit.prevent="goToNextStep" :class="formStyles">
    <!-- Title for the personal details form -->
    <div :class="titleStyles">PERSONAL DETAILS</div>

    <!-- Input fields for collecting personal information from the user, all of which are required. -->
    <!-- All input fields are bound to properties within localFormData using v-model. This ensures that the form is reactive and updates in real-time as the user types. -->
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
      :dense="$q.screen.lt.sm"
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

    <!-- This button triggers the form submission. -->
    <q-btn
      label="Next"
      type="submit"
      :class="btnStyles"
      class="bg-dark text-white self-end"
    />
  </q-form>
</template>

<script setup>
// Import necessary Vue functions
import { defineProps, reactive, watch } from "vue";
// Import the defined Pinia store
import { usePortfolioStore } from "src/stores/portfolioStore";

// Initialize Pinia store to manage form data
const portfolioStore = usePortfolioStore();

// Defines the props that are passed from the parent component to this child component.
const props = defineProps({
  formData: Object,
  goToNextStep: Function,
  formStyles: String,
  titleStyles: String,
  btnStyles: String,
});

// Creates a reactive object (localFormData) to store form data that is local to this component.
const localFormData = reactive({ ...props.formData });

// Watches changes on the localFormData and updates the global store whenever the form data changes.
watch(localFormData, (newData) => {
  portfolioStore.updateFormData(newData);
});
</script>
