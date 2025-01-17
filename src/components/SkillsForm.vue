<template>
  <!-- Form to collect skills -->
  <!-- The form submission is prevented from triggering a page refresh. Instead, the method goToNextStep is executed when the form is submitted. -->
  <q-form @submit.prevent="goToNextStep" :class="formStyles">
    <!-- Title for the skills form -->
    <div class="text-center text-weight-bold" :class="titleStyles">SKILLS</div>

    <!-- Input field for collecting skills from the user, which is required. -->
    <q-input
      outlined
      :dense="$q.screen.lt.sm"
      v-model="localFormData.skills"
      label="Skills (comma-separated) *"
      hint="Example: HTML, CSS, JavaScript"
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
      <q-btn label="Next" type="submit" class="bg-dark text-white" :class="btnStyles" />
    </div>
  </q-form>
</template>

<script setup>
// Everything is same as PersonalDetailsForm page.
import { defineProps, reactive, watch } from "vue";
import { usePortfolioStore } from "src/stores/portfolioStore";

const portfolioStore = usePortfolioStore();

const props = defineProps({
  formData: Object,
  goToNextStep: Function,
  goToPreviousStep: Function,
  formStyles: String,
  titleStyles: String,
  btnStyles: String,
  btnsDiv: String,
});

const localFormData = reactive({ ...props.formData });

watch(localFormData, (newData) => {
  portfolioStore.updateFormData(newData);
});
</script>
