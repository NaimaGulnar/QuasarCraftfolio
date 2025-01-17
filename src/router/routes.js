// Define the application's routes
const routes = [
  {
    // The base path of the application (root path)
    path: '/',
    // The layout component for the main application
    component: () => import('src/layouts/MainLayout.vue'),
    // Nested routes for the main layout
    children: [
      {
        // Default child route (homepage)
        path: '',
        component: () => import('src/pages/HomePage.vue'),
      },
      {
        // Route for the portfolio form page
        path: 'form',
        component: () => import('src/pages/PortfolioForm.vue'),
      },
      {
        // Route for the portfolio download page
        path: 'download',
        component: () => import('src/pages/PortfolioDownload.vue'),
      },
    ],
  },

  // Catch-all route (handles any unmatched paths)
  // This should always be the last route
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

// Export the routes so they can be used in the Vue Router instance
export default routes
