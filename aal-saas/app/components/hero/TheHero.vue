<!-- components/hero/TheHero.vue -->
<script setup lang="ts">
const heroData = {
  badge: "ENTERPRISE PLATFORM",
  tag: "COMMISSARY & MULTI-BRANCH F&B ERP",
  titlePrimary: "Precision Inventory Control",
  titleAccent: "Made Simple.",
  lead: "Manage multi-branch boba supplies, track 3-tier packaging conversions (Unit → Master Box → Pallet), and automate retail POS disbursements from a unified interface.",
  ctaPrimary: {
    label: "Access Employee Portal",
    href: "https://all-inventory-mvp.vercel.app",
  },
  ctaSecondary: { label: "View Architecture", href: "#showcase" },
  imagePath: "/images/software/dashboard.jpg",
};
</script>

<template>
  <section :class="$style.hero">
    <div :class="$style.container">
      <div :class="$style.eyebrow">
        <span :class="$style.code">[{{ heroData.badge }}]</span>
        <span>{{ heroData.tag }}</span>
      </div>

      <h1 :class="$style.title">
        {{ heroData.titlePrimary }} <br />
        <span :class="$style.titleMuted">{{ heroData.titleAccent }}</span>
      </h1>

      <div :class="$style.actions">
        <a
          href="https://all-inventory-mvp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          :class="$style.btnPrimary"
        >
          Access Employee Portal &rarr;
        </a>
        <a href="#showcase" :class="$style.btnSecondary"> View Architecture </a>
      </div>

      <!-- Hero Master Catalog Viewport -->
      <div :class="$style.mockFrame">
        <div :class="$style.frameBar">
          <div :class="$style.frameDots">
            <span :class="$style.dot" />
            <span :class="$style.dot" />
            <span :class="$style.dot" />
          </div>
          <span :class="$style.frameAddress"
            >aal-os://commissary-main/master-catalog</span
          >
        </div>

        <div :class="$style.imageHolder">
          <img
            :src="heroData.imagePath"
            alt="AAL Master Catalog Interface"
            :class="$style.mockImage"
            loading="eager"
            @error="
              (e: Event) => {
                (e.target as HTMLElement).style.display = 'none';
              }
            "
          />
          <div :class="$style.placeholderOverlay">
            <span :class="$style.placeholderTag">ACTIVE SCREENSHOT MOCK</span>
            <span :class="$style.placeholderPath">{{
              heroData.imagePath
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.hero {
  padding: 4.5rem 1.5rem 3.5rem;
  border-bottom: 1px solid #1a1a22;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #10b981;
  background: #14141a;
  border: 1px solid #242430;
  padding: 0.35rem 0.85rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.code {
  font-family: monospace;
  color: #787888;
}

.title {
  font-size: 2.4rem;
  line-height: 1.1;
  font-weight: 850;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0 0 1.25rem;
  max-width: 900px;
}

@media (min-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
}

.titleMuted {
  color: #7d7d8e;
}

.lead {
  font-size: 1rem;
  line-height: 1.6;
  color: #9e9eb0;
  max-width: 700px;
  margin: 0 0 2rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
}

.btnPrimary {
  background: #ffffff;
  color: #0e0e11;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
}

.btnPrimary:hover {
  background: #e2e2e6;
  transform: translateY(-1px);
}

.btnSecondary {
  background: #18181f;
  color: #c0c0cd;
  border: 1px solid #282834;
  font-size: 0.82rem;
  font-weight: 650;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
}

.btnSecondary:hover {
  background: #202029;
  color: #ffffff;
}

.mockFrame {
  width: 100%;
  max-width: 1140px;
  background: #141418;
  border: 1px solid #262630;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.7);
}

.frameBar {
  background: #1a1a20;
  padding: 0.65rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #24242e;
}

.frameDots {
  display: flex;
  gap: 0.35rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #343440;
}

.frameAddress {
  font-family: monospace;
  font-size: 0.68rem;
  color: #727282;
}

.imageHolder {
  position: relative;
  min-height: 400px;
  background: #101014;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mockImage {
  width: 100%;
  height: auto;
  display: block;
}

.placeholderOverlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  pointer-events: none;
}

.placeholderTag {
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #10b981;
}

.placeholderPath {
  font-family: monospace;
  font-size: 0.76rem;
  color: #555562;
}
</style>
