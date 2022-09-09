const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },

  {
    path: "/features",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/FeaturesPage.vue") }],
  },

  {
    path: "/pricing",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/PricingPage.vue") }],
  },

  {
    path: "/rewards",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/RewardsPage.vue") }],
  },

  {
    path: "/support",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SupportPage.vue") }],
  },

  {
    path: "/terms-and-conditions",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/TermsAndConditionsPage.vue") },
    ],
  },

  {
    path: "/privacy-policy",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PrivacyPolicyPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
