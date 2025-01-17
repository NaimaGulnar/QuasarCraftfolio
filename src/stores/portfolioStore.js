// Import the defineStore function from Pinia
import { defineStore } from 'pinia'

// Define a store named 'portfolioStore'
export const usePortfolioStore = defineStore('portfolioStore', {
  // Reactive state of the store
  state: () => ({
    // Data for the portfolio form
    formData: {
      // Personal Details
      name: '',
      role: '',
      shortBio: '',
      about: '',
      resume: '',
      email: '',
      linkedinURL: '',
      githubURL: '',

      // Skills
      skills: '',

      // Project 1
      pName1: '',
      pDescription1: '',
      pImage1: null,
      pGithubLink1: '',
      pDeployedLink1: '',

      // Project 2
      pName2: '',
      pDescription2: '',
      pImage2: null,
      pGithubLink2: '',
      pDeployedLink2: '',
    },
    // Tracks the current step in the form flow
    currentStep: 'personalDetails',
  }),

  // Methods to perform actions and logic
  actions: {
    // Updates the form data with new values
    /* 
    - Accepts an object (newData) containing the new form data.
    - Combines newData with the current formData to preserve the existing values while updating specific fields.
    */
    updateFormData(newData) {
      this.formData = { ...this.formData, ...newData }
    },

    // Checks if all fields in step 1 are completed
    /* 
    - Uses the double NOT operator (!!) to check if each required field in formData is truthy (not empty, null, or undefined).
    - Returns true if all required fields are filled, otherwise false. 
    */
    isStep1Complete() {
      return (
        !!this.formData.name &&
        !!this.formData.role &&
        !!this.formData.about &&
        !!this.formData.resume &&
        !!this.formData.email &&
        !!this.formData.linkedinURL &&
        !!this.formData.githubURL
      )
    },

    // Checks if the skills section in step 2 is completed
    /* Returns true if formData.skills is truthy (not empty), otherwise false. */
    isStep2Complete() {
      return !!this.formData.skills
    },

    // Moves to the next step in the form flow
    /* 
    - Defines an array steps that contains the sequence of steps.
    - Finds the index of the current step (currentStep) in the steps array.
    - If the currentStep is not the last step, it updates currentStep to the next step in the sequence. 
    */
    goToNextStep() {
      const steps = ['personalDetails', 'skills', 'projects']
      const currentIndex = steps.indexOf(this.currentStep)
      if (currentIndex < steps.length - 1) {
        this.currentStep = steps[currentIndex + 1]
      }
    },

    // Moves to the previous step in the form flow
    /* 
    - Uses the same steps array as goToNextStep.
    - Finds the index of the current step (currentStep) in the steps array.
    - If the currentStep is not the first step, it updates currentStep to the previous step in the sequence. 
    */
    goToPreviousStep() {
      const steps = ['personalDetails', 'skills', 'projects']
      const currentIndex = steps.indexOf(this.currentStep)
      if (currentIndex > 0) {
        this.currentStep = steps[currentIndex - 1]
      }
    },
  },
})
