import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    formData: {
      name: '',
      role: '',
      shortBio: '',
      about: '',
      resume: '',
      email: '',
      linkedinURL: '',
      githubURL: '',
      skills: '',
      pName1: '',
      pDescription1: '',
      pImage1: null,
      pGithubLink1: '',
      pDeployedLink1: '',
      pName2: '',
      pDescription2: '',
      pImage2: null,
      pGithubLink2: '',
      pDeployedLink2: '',
    },
    currentStep: 'personalDetails',
  }),
  actions: {
    updateStyles() {
      //
    },
    updateFormData(newData) {
      this.formData = { ...this.formData, ...newData }
    },
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
    isStep2Complete() {
      return !!this.formData.skills
    },
    goToNextStep() {
      const steps = ['personalDetails', 'skills', 'projects']
      const currentIndex = steps.indexOf(this.currentStep)
      if (currentIndex < steps.length - 1) {
        this.currentStep = steps[currentIndex + 1]
      }
    },
    goToPreviousStep() {
      const steps = ['personalDetails', 'skills', 'projects']
      const currentIndex = steps.indexOf(this.currentStep)
      if (currentIndex > 0) {
        this.currentStep = steps[currentIndex - 1]
      }
    },
  },
})
