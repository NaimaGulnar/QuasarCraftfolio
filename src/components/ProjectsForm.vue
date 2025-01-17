<template>
  <!-- Form to collect 2 projects -->
  <!-- The form submission is prevented from triggering a page refresh. Instead, the method goToDownload is executed when the form is submitted. -->
  <q-form @submit.prevent="goToDownload" :class="formStyles">
    <!-- Title for the projects form -->
    <div class="text-center text-weight-bold" :class="titleStyles">PROJECTS</div>

    <!-- Section heading for the first project -->
    <div :class="projectTitle">PROJECT 1:</div>

    <!-- Input fields for collecting first project details from the user, all of which are required, except project image -->
    <q-input
      type="text"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pName1"
      label="Project Name *"
      required
    />
    <q-input
      type="textarea"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pDescription1"
      label="Describe your project (1-2 para) *"
      required
    />
    <q-file
      outlined
      :dense="$q.screen.lt.sm"
      bottom-slots
      v-model="localFormData.pImage1"
      label="Upload Project Image"
      counter
    >
      <template v-slot:prepend>
        <q-icon name="cloud_upload" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon name="close" class="cursor-pointer" />
      </template>
    </q-file>
    <q-input
      type="url"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pGithubLink1"
      label="GitHub Repository Link *"
      hint="Example: https://www.github.com/xyz/project_name"
      required
    />
    <q-input
      type="url"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pDeployedLink1"
      label="Deployed Link *"
      required
    />

    <!-- Section heading for the second project -->
    <div :class="projectTitle">PROJECT 2:</div>

    <!-- Input fields for collecting second project details from the user, all of which are required, except project image -->
    <q-input
      type="text"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pName2"
      label="Project Name *"
      required
    />
    <q-input
      type="textarea"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pDescription2"
      label="Describe your project (1-2 para) *"
      required
    />
    <q-file
      outlined
      :dense="$q.screen.lt.sm"
      bottom-slots
      v-model="localFormData.pImage2"
      label="Upload Project Image"
      counter
    >
      <template v-slot:prepend>
        <q-icon name="cloud_upload" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon name="close" class="cursor-pointer" />
      </template>
    </q-file>
    <q-input
      type="url"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pGithubLink2"
      label="GitHub Repository Link *"
      hint="Example: https://www.github.com/xyz/project_name"
      required
    />
    <q-input
      type="url"
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.pDeployedLink2"
      label="Deployed Link *"
      required
    />

    <!-- Prev and Next buttons -->
    <div :class="btnsDiv">
      <!-- This button navigates to the previous form step. -->
      <q-btn
        label="Previous"
        @click="goToPreviousStep"
        class="text-black"
        :class="btnStyles"
      />

      <!-- This button triggers the form submission. -->
      <q-btn type="submit" label="Submit" class="bg-dark text-white" :class="btnStyles" />
    </div>
  </q-form>
</template>

<script setup>
// Everything is same as PersonalDetailsForm page.
import { defineProps, reactive, watch } from "vue";
import { usePortfolioStore } from "src/stores/portfolioStore";
// Import Vue Router for navigation
import { useRouter } from "vue-router";

const portfolioStore = usePortfolioStore();
// Initialize the router instance
const router = useRouter();

const props = defineProps({
  formData: Object,
  goToNextStep: Function,
  goToPreviousStep: Function,
  formStyles: String,
  titleStyles: String,
  btnStyles: String,
  btnsDiv: String,
  projectTitle: String,
});

const localFormData = reactive({ ...props.formData });

watch(localFormData, (newData) => {
  portfolioStore.updateFormData(newData);
});

// Function to navigate to the download page
const goToDownload = () => {
  router.push({ path: "/download" });
};
</script>
