<template>
  <!-- Main container for the form page -->
  <q-page>
    <!-- A Quasar component used for creating a multi-step process -->
    <!-- Collapse stepper for small screens -->
    <!-- Bind current step to store's currentStep -->
    <q-stepper
      :contracted="$q.screen.lt.sm"
      v-model="portfolioStore.currentStep"
      class="stepper"
    >
      <!-- Step 1: Personal Details -->
      <q-step
        name="personalDetails"
        title="Personal Details"
        :done="portfolioStore.isStep1Complete()"
        icon="account_circle"
        :color="portfolioStore.currentStep === 'personalDetails' ? 'dark' : 'grey'"
      >
        <!-- Custom form component for step 1 -->
        <!-- Data, methods and styles are passed down as props -->
        <!-- Event is to update the store's form data when the user makes changes -->
        <PersonalDetailsForm
          :formData="portfolioStore.formData"
          :goToNextStep="portfolioStore.goToNextStep"
          :titleStyles="titleStyles"
          :formStyles="formStyles"
          :btnStyles="btnStyles"
          @updateFormData="updateFormData"
        />
      </q-step>

      <!-- Step 2: Skills -->
      <q-step
        name="skills"
        title="Skills"
        :done="portfolioStore.isStep2Complete()"
        icon="star"
        :color="portfolioStore.currentStep === 'skills' ? 'dark' : 'grey'"
      >
        <!-- Custom form component for step 2 -->
        <SkillsForm
          :formData="portfolioStore.formData"
          :goToNextStep="portfolioStore.goToNextStep"
          :goToPreviousStep="portfolioStore.goToPreviousStep"
          :titleStyles="titleStyles"
          :formStyles="formStyles"
          :btnStyles="btnStyles"
          :btnsDiv="btnsDiv"
          @updateFormData="updateFormData"
        />
      </q-step>

      <!-- Step 3: Projects -->
      <q-step
        name="projects"
        title="Projects"
        icon="folder"
        :color="portfolioStore.currentStep === 'projects' ? 'dark' : 'grey'"
      >
        <!-- Custom form component for step 3 -->
        <ProjectsForm
          :formData="portfolioStore.formData"
          :goToNextStep="portfolioStore.goToNextStep"
          :goToPreviousStep="portfolioStore.goToPreviousStep"
          :titleStyles="titleStyles"
          :formStyles="formStyles"
          :btnStyles="btnStyles"
          :btnsDiv="btnsDiv"
          :projectTitle="projectTitle"
          @updateFormData="updateFormData"
        />
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script setup>
// Import form components
import PersonalDetailsForm from "src/components/PersonalDetailsForm.vue";
import ProjectsForm from "src/components/ProjectsForm.vue";
import SkillsForm from "src/components/SkillsForm.vue";
// Import the defined Pinia store
import { usePortfolioStore } from "src/stores/portfolioStore";
// Import Vue's reactivity system
import { ref } from "vue";

// Pinia store for managing form data and step navigation
const portfolioStore = usePortfolioStore();

// Define reactive variables for styles
const titleStyles = ref("titleStyles");
const formStyles = ref("formStyles");
const btnStyles = ref("btnStyles");
const btnsDiv = ref("btnsDiv");
const projectTitle = ref("projectTitle");

// Method to update form data in the store
const updateFormData = (newData) => {
  portfolioStore.updateFormData(newData);
};
</script>

<style scoped>
/* Stepper styling */
.stepper {
  background-color: #cccccc;
  width: 70vw;
  min-height: 100vh;
  margin: auto;
  padding: 0.1rem;
}
/* Form components styling */
.formStyles {
  background: #cccccc;
  width: 60vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 6rem;
  border-radius: 0.2rem;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.5);
}
::v-deep(.titleStyles) {
  letter-spacing: 0.3rem;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 6px;
  margin-bottom: 1rem;
  text-align: center;
}
::v-deep(.btnStyles) {
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  width: fit-content;
  padding: 0.5rem 2rem;
}
::v-deep(.btnsDiv) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
::v-deep(.projectTitle) {
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
}
/* Media Queries */
@media screen and (max-width: 1024px) {
  .stepper {
    width: 100vw;
  }
  ::v-deep(.q-stepper__step-inner) {
    padding: 0px;
  }
  .formStyles {
    width: 100vw;
    padding: 3rem;
  }
}
@media screen and (max-width: 600px) {
  .formStyles {
    padding: 1rem;
  }
  ::v-deep(.titleStyles) {
    font-size: 1.3rem;
  }
  ::v-deep(.btnStyles) {
    font-size: 0.9rem;
    padding: 0.2rem 1rem;
  }
  ::v-deep(.projectTitle) {
    font-size: 1rem;
  }
}
</style>
