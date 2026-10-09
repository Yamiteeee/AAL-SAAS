<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="contact" :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.top">
        <div :class="$style.brandBlock">
          <div :class="$style.brandTitle">
            <span :class="$style.dot" />
            <span>AAL OS</span>
          </div>
          <p :class="$style.brandTagline">
            Industrial beverage manufacturing, formulation, and cold-chain
            supply systems.
          </p>
        </div>

        <div :class="$style.linksBlock">
          <div :class="$style.col">
            <span :class="$style.colHead">PLATFORM</span>
            <a href="#showcase">Raw Inventory</a>
            <a href="#showcase">Batch Master</a>
            <a href="#showcase">Logistics Dispatch</a>
          </div>
          <div :class="$style.col">
            <span :class="$style.colHead">NETWORK</span>
            <a href="https://aalgroup.asia" target="_blank" rel="noopener"
              >AAL Group HQ ↗</a
            >
            <a href="mailto:software@aalgroup.asia">Contact Sales</a>
          </div>
        </div>
      </div>

      <div :class="$style.bottom">
        <span>&copy; {{ currentYear }} AAL Group. All rights reserved.</span>
        <span :class="$style.mono">SEC-REG: B2B-ENTERPRISE-STACK</span>
      </div>
    </div>
  </footer>
</template>

<style module>
.footer {
  background: #09090b;
  padding: 4.5rem 1.5rem 2.5rem;
  border-top: 1px solid #1a1a22;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid #191920;
}

@media (min-width: 768px) {
  .top {
    flex-direction: row;
    justify-content: space-between;
  }
}

.brandBlock {
  max-width: 320px;
}

.brandTitle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.65rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #10b981;
}

.brandTagline {
  font-size: 0.84rem;
  line-height: 1.5;
  color: #727280;
  margin: 0;
}

.linksBlock {
  display: flex;
  gap: 3.5rem;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.colHead {
  font-family: monospace;
  font-size: 0.68rem;
  font-weight: 700;
  color: #555562;
  margin-bottom: 0.4rem;
}

.col a {
  font-size: 0.82rem;
  color: #8e8e9e;
  text-decoration: none;
  transition: color 0.15s ease;
}

.col a:hover {
  color: #ffffff;
}

.bottom {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.74rem;
  color: #5c5c68;
}

.mono {
  font-family: monospace;
}
</style>
