<template>
    <q-form @submit.prevent="goToNextStep" :class="formStyles">
      <div class="text-center text-weight-bold" :class="titleStyles">SKILLS</div>
      <q-input
        outlined
        :dense="$q.screen.lt.sm"
        v-model="localFormData.skills"
        label="Skills (comma-separated) *"
        hint="Example: HTML, CSS, JavaScript"
        required
      />
      <div :class="btnsDiv">
        <q-btn
          label="Previous"
          @click="goToPreviousStep"
          class="text-black"
          :class="btnStyles"
        />
        <q-btn label="Next" type="submit" class="bg-dark text-white" :class="btnStyles" />
      </div>
    </q-form>
  </template>
  
  <script setup>
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
  portfolioStore.updateStyles();
  </script>
  