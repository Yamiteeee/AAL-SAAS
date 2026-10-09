<script setup lang="ts">
const aboutData = {
  tag: "[ ORIGIN & PURPOSE ]",
  title: "Why Generic ERPs Fail In Beverage Operations",
  desc: "Standard software treats goods as static SKU numbers. Liquid F&B processing requires managing perishable humidity, continuous syrup agitation, scale shrinkage, and dynamic lot expiration.",
  pillars: [
    {
      num: "01",
      title: "Formula & Brix Interlocking",
      text: "Direct integration with RS-232 digital floor scales and refractometers. Prevents the batch vat valve from opening if ingredient density deviates by > 0.05%.",
    },
    {
      num: "02",
      title: "Perishable Auto-Deduction",
      text: "Dynamic Bill-of-Materials consumption. The instant 1,000L of roasted tea base finishes boiling, raw tea leaves, water, and creamer balances reconcile in real time.",
    },
    {
      num: "03",
      title: "Corridor Cold-Chain Sync",
      text: "Pairs pallet barcodes with BLE temperature telemetry. Preserves a non-repudiable thermal audit trail from central processing plants to regional franchise hubs.",
    },
  ],
};
</script>

<template>
  <section id="origin" :class="$style.about">
    <div :class="$style.container">
      <div :class="$style.header">
        <span :class="$style.tag">{{ aboutData.tag }}</span>
        <h2 :class="$style.title">{{ aboutData.title }}</h2>
        <p :class="$style.desc">{{ aboutData.desc }}</p>
      </div>

      <div :class="$style.grid">
        <div
          v-for="item in aboutData.pillars"
          :key="item.num"
          :class="$style.card"
        >
          <span :class="$style.cardNum">{{ item.num }}</span>
          <h3 :class="$style.cardTitle">{{ item.title }}</h3>
          <p :class="$style.cardText">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.about {
  padding: 5rem 1.5rem;
  border-bottom: 1px solid #1a1a22;
  background-color: #0b0b0e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  max-width: 680px;
  margin-bottom: 3.5rem;
}

.tag {
  font-family: monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: #10b981;
  display: block;
  margin-bottom: 0.75rem;
}

.title {
  font-size: 2rem;
  font-weight: 850;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0 0 1rem;
}

.desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8c8c9a;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background: #141418;
  border: 1px solid #22222a;
  border-radius: 8px;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
}

.cardNum {
  font-family: monospace;
  font-size: 0.78rem;
  font-weight: 700;
  color: #585866;
  margin-bottom: 1rem;
}

.cardTitle {
  font-size: 1.15rem;
  font-weight: 750;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.cardText {
  font-size: 0.86rem;
  line-height: 1.55;
  color: #8c8c9a;
  margin: 0;
}
</style>
