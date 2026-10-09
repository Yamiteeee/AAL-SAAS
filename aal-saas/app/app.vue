<!-- app.vue -->
<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import TheHero from "@/components/hero/TheHero.vue";
import TheSoftwareCatalog from "@/components/all-showcase/TheSoftwareCatalog.vue";
import TheAbout from "@/components/about/TheAbout.vue";
import TheShowcase from "@/components/showcase/TheShowcase.vue";
import TheFooter from "@/components/footer/TheFooter.vue";

useHead({
  title: "AAL OS — Industrial F&B Supply & Formulation Engine",
  meta: [
    {
      name: "description",
      content:
        "Industrial inventory ERP, recipe BOM formulation, and logistics dispatch software engineered by AAL Group.",
    },
  ],
});
</script>

<template>
  <div class="app-root">
    <TheHeader />
    <main>
      <TheHero />
      <TheSoftwareCatalog />
      <TheAbout />
      <TheShowcase />
    </main>
    <TheFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

html,
body {
  background-color: #0e0e11;
  color: #ececee;
  margin: 0;
  padding: 0;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  overflow-x: hidden;
}

/* Offset sticky header when jumping to anchors */
#showcase,
#origin,
#software-suite {
  scroll-margin-top: 5rem;
}

.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
