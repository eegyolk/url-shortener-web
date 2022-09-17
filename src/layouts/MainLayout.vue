<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row no-wrap q-gutter-md q-px-md q-py-md" elevated>
      <q-btn
        flat
        class="text-h6 text-weight-bolder"
        to="/"
        color="white"
        label="LOGO"
      />

      <q-btn flat to="/features" color="white" label="Features" />
      <q-btn flat to="/pricing" color="white" label="Pricing" />
      <q-btn flat to="/rewards" color="white" label="Rewards" />
      <q-btn flat to="/support" color="white" label="Support" />

      <q-space />

      <q-btn
        flat
        :href="`${urlShortenerAppLink}/sign-in`"
        target="_blank"
        color="white"
        label="Sign in"
      />
      <q-btn
        flat
        :href="`${urlShortenerAppLink}/sign-up`"
        target="_blank"
        color="white"
        label="Get Started"
      />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const urlShortenerAppProtocol = process.env.URL_SHORTENER_APP_PROTOCOL;
    const urlShortenerAppDomain = process.env.URL_SHORTENER_APP_DOMAIN;
    const urlShortenerAppPort = process.env.URL_SHORTENER_APP_PORT;

    const urlShortenerAppLink = ref(
      `${urlShortenerAppProtocol}://${urlShortenerAppDomain}${
        urlShortenerAppPort ? `:${urlShortenerAppPort}` : ""
      }`
    );

    return {
      urlShortenerAppLink,
    };
  },
});
</script>
