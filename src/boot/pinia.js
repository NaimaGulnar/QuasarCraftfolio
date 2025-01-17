// Import the createPinia function from the Pinia library
import { createPinia } from 'pinia'

// Export a default function to integrate Pinia with the application
export default ({ app }) => {
  // Create a new Pinia instance
  const pinia = createPinia()

  // Register Pinia as a plugin in the Vue application
  app.use(pinia)
}
