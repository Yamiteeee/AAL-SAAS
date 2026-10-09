<!-- components/header/TheHeader.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const headerData = {
  brand: {
    name: "AAL OS",
    badge: "ERP",
    href: "/",
    logoSrc: "/logo/logo.png",
  },
  navLinks: [
    { label: "Origin", href: "#origin" },
    { label: "Software Suite", href: "#software-suite" },
    { label: "Architecture", href: "#showcase" },
  ],
  action: {
    label: "Request Sandbox",
    href: "#contact",
  },
};

const isScrolled = ref(false);

const onScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header :class="[$style.header, isScrolled ? $style.scrolled : '']">
    <div :class="$style.inner">
      <NuxtLink :to="headerData.brand.href" :class="$style.brand">
        <img
          :src="headerData.brand.logoSrc"
          :alt="headerData.brand.name + ' Logo'"
          :class="$style.brandLogo"
        />
        <span :class="$style.brandName">{{ headerData.brand.name }}</span>
        <span :class="$style.brandBadge">{{ headerData.brand.badge }}</span>
      </NuxtLink>

      <nav aria-label="Main Navigation" :class="$style.nav">
        <a
          v-for="item in headerData.navLinks"
          :key="item.label"
          :href="item.href"
          :class="$style.navLink"
        >
          {{ item.label }}
        </a>
      </nav>

      <div :class="$style.actions">
        <a :href="headerData.action.href" :class="$style.btnPrimary">
          {{ headerData.action.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<style module>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(14, 14, 17, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #1f1f26;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.scrolled {
  background-color: rgba(14, 14, 17, 0.95);
  border-bottom-color: #272732;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem; /* Increased gap to support larger logo footprint */
  text-decoration: none;
}

.brandLogo {
  width: 36px; /* 🌟 Enlarged from 24px */
  height: 36px; /* 🌟 Enlarged from 24px */
  object-fit: contain;
  display: block;
}

.brandName {
  font-size: 1.1rem; /* 🌟 Enlarged from 0.95rem */
  font-weight: 850;
  letter-spacing: -0.03em;
  color: #ffffff;
}

.brandBadge {
  font-size: 0.65rem;
  font-family: monospace;
  font-weight: 700;
  color: #8c8c9a;
  background: #18181f;
  border: 1px solid #272733;
  padding: 2px 6px;
  border-radius: 4px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

@media (max-width: 640px) {
  .nav {
    display: none;
  }
}

.navLink {
  font-size: 0.8rem;
  font-weight: 600;
  color: #9292a0;
  text-decoration: none;
  transition: color 0.15s ease;
}

.navLink:hover {
  color: #ffffff;
}

.actions {
  display: flex;
  align-items: center;
}

.btnPrimary {
  font-size: 0.78rem;
  font-weight: 700;
  color: #0e0e11;
  background: #ffffff;
  border: 1px solid #ffffff;
  padding: 0.45rem 0.95rem;
  border-radius: 6px;
  text-decoration: none;
  transition:
    transform 0.15s ease,
    background-color 0.15s ease;
}

.btnPrimary:hover {
  background: #e2e2e6;
  transform: translateY(-1px);
}
</style>
