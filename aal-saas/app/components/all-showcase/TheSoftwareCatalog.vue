<!-- app/components/all-showcase/TheSoftwareCatalog.vue -->
<script setup lang="ts">
import { ref, computed } from "vue";

interface Screenshot {
  title: string;
  description: string;
  path: string;
}

interface SpecItem {
  label: string;
  val: string;
}

interface DemoKey {
  role: string;
  user: string;
  pass: string;
}

interface SystemTier {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  specs: SpecItem[];
  screenshots: Screenshot[];
  demoKeys: DemoKey[];
}

const isAnnual = ref(true);
const selectedSoftware = ref<SystemTier | null>(null);
const selectedScreenshotIdx = ref(0);

const fallbackScreenshot: Screenshot = {
  title: "Interface Preview",
  description: "Real-time system telemetry and interface overview.",
  path: "/images/software/dashboard.jpg",
};

const softwareList: SystemTier[] = [
  {
    id: "aal-inventory-core",
    name: "AAL Commissary OS",
    badge: "INVENTORY & COMMISSARY",
    tagline:
      "Precision multi-branch raw materials, 3-tier packaging, and replenishment engine.",
    monthlyPrice: 249,
    annualPrice: 199,
    features: [
      "3-Tier UOM conversion (Unit → Master Box → Bulk Pallet)[cite: 2, 9]",
      "Inbound PO Dock with automated FEFO expiration auditing[cite: 2, 5]",
      "Hub-to-Hub freight transfers with live transit reconciliation[cite: 7, 8]",
      "Consolidated Transport & Audit Ledger with multi-feed filters[cite: 3]",
    ],
    specs: [
      { label: "Sync Latency", val: "< 1.2s" },
      { label: "Packaging Matrix", val: "L1 → L2 → L3" },
      { label: "Audit Standard", val: "FEFO First-Out" },
    ],
    screenshots: [
      {
        title: "Master Catalog & 3-Tier UOM",
        description:
          "Parent families, packaging ratios, and real-time stock balances[cite: 9].",
        path: "/images/software/dashboard.jpg",
      },
      {
        title: "Direct Inbound PO Dock",
        description:
          "FEFO shelf-life capture, bay assignment, and bulk volume calculation[cite: 5].",
        path: "/images/software/po-dock.jpg",
      },
      {
        title: "Hub-to-Hub Freight Transfers",
        description:
          "Commissary dispatch to satellite store branches with transit tracking[cite: 7, 8].",
        path: "/images/software/hub-transfer.jpg",
      },
      {
        title: "Consolidated Transport Ledger",
        description:
          "Complete trace of restocks, shortage transfers, and freight movement[cite: 3].",
        path: "/images/software/ledger.jpg",
      },
    ],
    demoKeys: [
      { role: "Manager", user: "EMP-101", pass: "admin123" },
      { role: "Staff", user: "EMP-102", pass: "staff123" },
    ],
  },
  {
    id: "aal-pos-suite",
    name: "AAL Wholesale & Branch POS",
    badge: "STOREFRONT DISBURSEMENT",
    tagline:
      "Direct sales register tied to real-time warehouse inventory and loyalty tiers.",
    monthlyPrice: 149,
    annualPrice: 119,
    features: [
      "Real-time on-hand stock indicators prior to disbursement[cite: 6]",
      "Held order multi-session registers for busy store checkout lines[cite: 6]",
      "Client Loyalty & Wholesale Contract Pricing auto-deduction[cite: 2, 6]",
      "Automated digital receipt and invoice issuance ledger[cite: 6]",
    ],
    specs: [
      { label: "Checkout Mode", val: "Direct POS" },
      { label: "Stock Sync", val: "Sub-Second" },
      { label: "Receipt Ledger", val: "100% Verified" },
    ],
    screenshots: [
      {
        title: "Point of Sale & Stock Out",
        description:
          "Cart construction, variant selection, and client agreement pricing[cite: 6].",
        path: "/images/software/pos.jpg",
      },
      {
        title: "Employee Access Portal",
        description:
          "Secure badge/role-based authentication for branch operators[cite: 2, 4].",
        path: "/images/software/employee-portal.jpg",
      },
      {
        title: "Store Operations Feed",
        description:
          "Live stream of customer sales and shortage logs[cite: 3].",
        path: "/images/software/ledger.jpg",
      },
    ],
    demoKeys: [
      { role: "Cashier", user: "EMP-102", pass: "staff123" },
      { role: "Store Lead", user: "EMP-101", pass: "admin123" },
    ],
  },
  {
    id: "aal-formulation-bom",
    name: "AAL Batch Formulation BOM",
    badge: "MANUFACTURING & PLC",
    tagline:
      "Deterministic syrup formulation, Brix refractometer locks, and tank automation.",
    monthlyPrice: 399,
    annualPrice: 319,
    features: [
      "Scale Interlock: Halts vat gates if Brix or weight deviates > 0.05%",
      "Automated BOM Deductions for liquid tea vats and syrup batches",
      "HACCP and clean-in-place (CIP) electronic compliance logging",
      "Cross-lot tracking with irreversible batch traceability ID",
    ],
    specs: [
      { label: "Brix Variance", val: "< 0.05%" },
      { label: "Scale Sync", val: "RS-232 / TCP" },
      { label: "Batch Yield", val: "99.94%" },
    ],
    screenshots: [
      {
        title: "BOM Formulation Matrix",
        description:
          "Raw sugar, flavor concentrates, and liquid weight recipes.",
        path: "/images/software/dashboard.jpg",
      },
      {
        title: "Quality Control & Brix Variance",
        description: "Real-time refractometer telemetry and sensor thresholds.",
        path: "/images/software/po-dock.jpg",
      },
    ],
    demoKeys: [
      { role: "Plant Engineer", user: "ENG-001", pass: "batch2026" },
      { role: "QA Inspector", user: "QA-109", pass: "brixSafe" },
    ],
  },
];

const activeScreenshots = computed<Screenshot[]>(() => {
  return selectedSoftware.value?.screenshots ?? [];
});

const activeSpecs = computed<SpecItem[]>(() => {
  return selectedSoftware.value?.specs ?? [];
});

const activeDemoKeys = computed<DemoKey[]>(() => {
  return selectedSoftware.value?.demoKeys ?? [];
});

const activeScreenshot = computed<Screenshot>(() => {
  const current = activeScreenshots.value[selectedScreenshotIdx.value];
  if (current) return current;

  const first = activeScreenshots.value[0];
  if (first) return first;

  return fallbackScreenshot;
});

const openInspection = (software: SystemTier) => {
  selectedSoftware.value = software;
  selectedScreenshotIdx.value = 0;
};

const closeInspection = () => {
  selectedSoftware.value = null;
};
</script>

<template>
  <section id="software-suite" :class="$style.catalogSection">
    <div :class="$style.container">
      <div :class="$style.header">
        <span :class="$style.eyebrow">[ AVAILABLE SOFTWARE LISTINGS ]</span>
        <h2 :class="$style.title">Dedicated Industrial Solutions</h2>
        <p :class="$style.subtitle">
          Select any standalone enterprise module. Every software includes live
          interactive telemetry, verified audit trails, and instant demo sandbox
          access[cite: 3, 4].
        </p>

        <!-- Billing Toggle -->
        <div :class="$style.billingToggle">
          <button
            type="button"
            :class="[!isAnnual ? $style.toggleActive : $style.toggleInactive]"
            @click="isAnnual = false"
          >
            Monthly
          </button>
          <button
            type="button"
            :class="[isAnnual ? $style.toggleActive : $style.toggleInactive]"
            @click="isAnnual = true"
          >
            Annual <span>(Save 20%)</span>
          </button>
        </div>
      </div>

      <!-- Software Grid -->
      <div :class="$style.grid">
        <div
          v-for="item in softwareList"
          :key="item.id"
          :class="$style.softwareCard"
        >
          <div :class="$style.cardTop">
            <span :class="$style.cardBadge">{{ item.badge }}</span>
            <h3 :class="$style.cardName">{{ item.name }}</h3>
            <p :class="$style.cardTagline">{{ item.tagline }}</p>

            <div :class="$style.priceWrapper">
              <span :class="$style.currency">$</span>
              <span :class="$style.priceNumber">
                {{ isAnnual ? item.annualPrice : item.monthlyPrice }}
              </span>
              <span :class="$style.period">/ mo per facility</span>
            </div>
          </div>

          <ul :class="$style.featureList">
            <li v-for="(feat, fIdx) in item.features" :key="fIdx">
              <span :class="$style.check">&check;</span>
              <span>{{ feat }}</span>
            </li>
          </ul>

          <div :class="$style.cardActions">
            <button
              type="button"
              :class="$style.btnInspect"
              @click="openInspection(item)"
            >
              <span>Inspect System Preview</span>
              <span :class="$style.arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Screen Interactive Showcase Inspection Modal -->
    <Teleport to="body">
      <div
        v-if="selectedSoftware"
        :class="$style.modalBackdrop"
        @click.self="closeInspection"
      >
        <div :class="$style.modalWindow">
          <!-- Modal Top Bar -->
          <div :class="$style.modalBar">
            <div :class="$style.modalBarLeft">
              <span :class="$style.modalBadge">{{
                selectedSoftware.badge
              }}</span>
              <h3 :class="$style.modalTitle">{{ selectedSoftware.name }}</h3>
            </div>
            <button
              type="button"
              :class="$style.btnClose"
              aria-label="Close Preview"
              @click="closeInspection"
            >
              &times;
            </button>
          </div>

          <!-- Modal Body Grid -->
          <div :class="$style.modalBody">
            <!-- Left Column: Image Viewer -->
            <div :class="$style.visualCol">
              <div v-if="activeScreenshot" :class="$style.mainImageHolder">
                <img
                  :src="activeScreenshot.path"
                  :alt="activeScreenshot.title"
                  :class="$style.inspectImg"
                  @error="
                    (e: Event) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }
                  "
                />
                <div :class="$style.imgOverlay">
                  <span :class="$style.overlayTag">INSPECTION TELEMETRY</span>
                  <span :class="$style.overlayPath">
                    {{ activeScreenshot.path }}
                  </span>
                </div>
              </div>

              <!-- Thumbnail Switcher Strip -->
              <div :class="$style.thumbStrip">
                <button
                  v-for="(shot, sIdx) in activeScreenshots"
                  :key="sIdx"
                  type="button"
                  :class="[
                    $style.thumbBtn,
                    selectedScreenshotIdx === sIdx ? $style.thumbActive : '',
                  ]"
                  @click="selectedScreenshotIdx = sIdx"
                >
                  <span :class="$style.thumbNumber">0{{ sIdx + 1 }}</span>
                  <span :class="$style.thumbTitle">{{ shot.title }}</span>
                </button>
              </div>
            </div>

            <!-- Right Column: Specs & Demo Access Keys -->
            <div :class="$style.infoCol">
              <div v-if="activeScreenshot" :class="$style.activeShotInfo">
                <span :class="$style.infoIndex">
                  VIEW [0{{ selectedScreenshotIdx + 1 }} OF 0{{
                    activeScreenshots.length
                  }}]
                </span>
                <h4 :class="$style.infoTitle">
                  {{ activeScreenshot.title }}
                </h4>
                <p :class="$style.infoDesc">
                  {{ activeScreenshot.description }}
                </p>
              </div>

              <!-- Live Specs Matrix -->
              <div :class="$style.specsMatrix">
                <div
                  v-for="spec in activeSpecs"
                  :key="spec.label"
                  :class="$style.specCell"
                >
                  <span :class="$style.specVal">{{ spec.val }}</span>
                  <span :class="$style.specLabel">{{ spec.label }}</span>
                </div>
              </div>

              <!-- Demo Access Keys Reference -->
              <div :class="$style.demoAccessCard">
                <span :class="$style.demoTag"
                  >&check; DEMO CREDENTIALS[cite: 4]</span
                >
                <p :class="$style.demoText">
                  Test this module directly with preloaded test assets[cite: 2,
                  4]:
                </p>
                <div :class="$style.keysRow">
                  <div
                    v-for="k in activeDemoKeys"
                    :key="k.role"
                    :class="$style.keyPill"
                  >
                    <span :class="$style.keyRole">{{ k.role }}:</span>
                    <code>{{ k.user }}</code> / <code>{{ k.pass }}</code>
                  </div>
                </div>
              </div>

              <!-- Subscribe / Pilot CTA -->
              <div :class="$style.modalActionRow">
                <a
                  href="#contact"
                  :class="$style.btnSubscribe"
                  @click="closeInspection"
                >
                  Subscribe (${{
                    isAnnual
                      ? selectedSoftware.annualPrice
                      : selectedSoftware.monthlyPrice
                  }}/mo)
                </a>
                <span :class="$style.slaNote"
                  >Immediate tenant deployment &bull; 99.98% SLA</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style module>
.catalogSection {
  padding: 5.5rem 1.5rem;
  border-bottom: 1px solid #1a1a22;
  background-color: #0b0b0e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3.5rem;
}

.eyebrow {
  font-family: monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #10b981;
  display: block;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 2.2rem;
  font-weight: 850;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0 0 1rem;
}

.subtitle {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8c8c9a;
  margin: 0 0 1.75rem;
}

.billingToggle {
  display: inline-flex;
  background: #141418;
  border: 1px solid #242430;
  padding: 3px;
  border-radius: 6px;
}

.toggleActive {
  background: #242432;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleActive span {
  color: #10b981;
}

.toggleInactive {
  background: transparent;
  color: #727282;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.45rem 1rem;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;
}

.toggleInactive:hover {
  color: #ffffff;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.softwareCard {
  background: #121216;
  border: 1px solid #22222a;
  border-radius: 10px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.softwareCard:hover {
  border-color: #2e2e3a;
  transform: translateY(-2px);
}

.cardBadge {
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: 700;
  color: #10b981;
  background: #181822;
  border: 1px solid #262634;
  padding: 2px 7px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.cardName {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.5rem;
}

.cardTagline {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #8c8c9a;
  margin: 0 0 1.5rem;
  min-height: 40px;
}

.priceWrapper {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #1c1c24;
}

.currency {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
}

.priceNumber {
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #ffffff;
}

.period {
  font-size: 0.75rem;
  color: #6a6a78;
}

.featureList {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex-grow: 1;
}

.featureList li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #a0a0ae;
}

.check {
  color: #10b981;
  font-weight: 800;
}

.btnInspect {
  width: 100%;
  background: #181820;
  color: #ffffff;
  border: 1px solid #282834;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btnInspect:hover {
  background: #ffffff;
  color: #0e0e11;
  border-color: #ffffff;
}

.arrow {
  transition: transform 0.15s ease;
}

.btnInspect:hover .arrow {
  transform: translateX(3px);
}

/* Modal Backdrops & Window */
.modalBackdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(6, 6, 8, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modalWindow {
  background: #0f0f13;
  border: 1px solid #292936;
  border-radius: 12px;
  width: 100%;
  max-width: 1140px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.85);
}

.modalBar {
  padding: 1rem 1.5rem;
  background: #14141a;
  border-bottom: 1px solid #22222c;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modalBarLeft {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.modalBadge {
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: 700;
  color: #10b981;
  background: #1a1a24;
  border: 1px solid #282836;
  padding: 2px 6px;
  border-radius: 4px;
}

.modalTitle {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.btnClose {
  background: transparent;
  border: none;
  color: #7d7d8e;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.15s ease;
}

.btnClose:hover {
  color: #ffffff;
}

.modalBody {
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: auto;
}

@media (min-width: 900px) {
  .modalBody {
    grid-template-columns: 1.35fr 1fr;
  }
}

.visualCol {
  background: #09090c;
  padding: 1.5rem;
  border-right: 1px solid #202028;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mainImageHolder {
  position: relative;
  min-height: 360px;
  background: #121216;
  border: 1px solid #242430;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inspectImg {
  width: 100%;
  height: auto;
  display: block;
}

.imgOverlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  pointer-events: none;
}

.overlayTag {
  font-family: monospace;
  font-size: 0.68rem;
  font-weight: 700;
  color: #10b981;
}

.overlayPath {
  font-family: monospace;
  font-size: 0.72rem;
  color: #555562;
}

.thumbStrip {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
}

.thumbBtn {
  flex: 1;
  background: #121218;
  border: 1px solid #22222c;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  transition: all 0.15s ease;
}

.thumbBtn:hover {
  border-color: #323242;
}

.thumbActive {
  background: #1a1a24;
  border-color: #10b981;
}

.thumbNumber {
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: 700;
  color: #10b981;
}

.thumbTitle {
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.infoCol {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
}

.infoIndex {
  font-family: monospace;
  font-size: 0.68rem;
  color: #727282;
  display: block;
  margin-bottom: 0.35rem;
}

.infoTitle {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.5rem;
}

.infoDesc {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #8c8c9a;
  margin: 0;
}

.specsMatrix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
}

.specCell {
  background: #14141a;
  border: 1px solid #22222a;
  border-radius: 6px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
}

.specVal {
  font-size: 1.1rem;
  font-weight: 850;
  color: #ffffff;
}

.specLabel {
  font-size: 0.62rem;
  color: #727280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}

.demoAccessCard {
  background: #14141a;
  border: 1px solid #23232e;
  border-radius: 8px;
  padding: 1rem 1.15rem;
}

.demoTag {
  font-family: monospace;
  font-size: 0.68rem;
  font-weight: 700;
  color: #10b981;
  display: block;
  margin-bottom: 0.25rem;
}

.demoText {
  font-size: 0.8rem;
  color: #8c8c9a;
  margin: 0 0 0.65rem;
}

.keysRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.keyPill {
  background: #191922;
  border: 1px solid #2a2a38;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
  font-size: 0.74rem;
  color: #cfcfdc;
}

.keyRole {
  font-weight: 700;
  color: #ffffff;
  margin-right: 0.3rem;
}

.keyPill code {
  color: #a5b4fc;
  font-family: monospace;
}

.modalActionRow {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btnSubscribe {
  width: 100%;
  background: #ffffff;
  color: #0e0e11;
  font-size: 0.85rem;
  font-weight: 750;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease;
}

.btnSubscribe:hover {
  background: #e2e2e6;
  transform: translateY(-1px);
}

.slaNote {
  font-size: 0.7rem;
  color: #656574;
  text-align: center;
}
</style>
