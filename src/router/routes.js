const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') },
      { path: 'form', component: () => import('src/pages/PortfolioForm.vue') },
      { path: 'download', component: () => import('src/pages/PortfolioDownload.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
