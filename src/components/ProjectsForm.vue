<template>
  <q-form @submit.prevent="goToDownload" :class="formStyles">
    <div class="text-center text-weight-bold" :class="titleStyles">PROJECTS</div>
    <div :class="projectTitle">PROJECT 1:</div>
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
    <div :class="projectTitle">PROJECT 2:</div>
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
    <div :class="btnsDiv">
      <q-btn
        label="Previous"
        @click="goToPreviousStep"
        class="text-black"
        :class="btnStyles"
      />
      <q-btn type="submit" label="Submit" class="bg-dark text-white" :class="btnStyles" />
    </div>
  </q-form>
</template>

<script setup>
import { defineProps, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { usePortfolioStore } from "src/stores/portfolioStore";

const portfolioStore = usePortfolioStore();
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
portfolioStore.updateStyles();

const goToDownload = () => {
  router.push({ path: "/download" });
};
</script>
