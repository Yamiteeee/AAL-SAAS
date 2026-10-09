<!-- components/showcase/TheShowcase.vue -->
<script setup lang="ts">
import { ref } from "vue";

type TabKey = "catalog" | "inbound" | "freight" | "ledger" | "pos";
const activeTab = ref<TabKey>("catalog");

interface ModuleItem {
  id: TabKey;
  code: string;
  name: string;
  badge: string;
  headline: string;
  desc: string;
  image: string;
  specs: { label: string; val: string }[];
  features: string[];
}

const modules: Record<TabKey, ModuleItem> = {
  catalog: {
    id: "catalog",
    code: "01",
    name: "Master Catalog & 3-Tier UOM",
    badge: "CORE ENGINE",
    headline: "Parent Families & Multi-Tier Packaging Matrices",
    desc: "Seamlessly converts single units to master cases and bulk freight pallets with automatic CBM volume calculations and per-bottle margin tracking.",
    image: "/images/software/dashboard.jpg",
    specs: [
      { label: "Active Stock SKU", val: "2,847 Units" },
      { label: "Matrix Hierarchy", val: "L1 → L2 → L3" },
      { label: "Volume Calc", val: "Auto CBM/m³" },
    ],
    features: [
      "L1 Bottle (2.5L) → L2 Box (6 L1) → L3 Pallet (25 L2) auto-calculation.",
      "Vendor pairing with direct purchase order unit cost ledger.",
      "Multi-store branch scoping (Main Commissary vs Regional Outlets).",
    ],
  },
  inbound: {
    id: "inbound",
    code: "02",
    name: "Inbound PO Dock",
    badge: "INWARD LOGISTICS",
    headline: "Direct Receiving & FEFO Expiry Auditing",
    desc: "Stage supplier deliveries into warehouse storage bays. Captures FEFO expiration dates, lot numbers, and estimated cubic meters before crediting inventory.",
    image: "/images/software/po-dock.jpg",
    specs: [
      { label: "Audit Standard", val: "FEFO First-Out" },
      { label: "Bay Allocation", val: "Bay/Bin Tagged" },
      { label: "Shrinkage Guard", val: "Unit Verification" },
    ],
    features: [
      "Captures PO References (e.g. PO-MANILA-8821) with vendor linking.",
      "Calculates credited unit yields (e.g., 1 Pallet = +150 bottles, 25 boxes, 0.65 m³).",
      "Perishable 365d shelf-life health flags tagged prior to placement.",
    ],
  },
  freight: {
    id: "freight",
    code: "03",
    name: "Hub-to-Hub Freight",
    badge: "RELOCATION ENGINE",
    headline: "Multi-Branch Stock Allocation & Transfer Orders",
    desc: "Fulfill replenishment requests between the central commissary and satellite store branches without double-counting inventory in transit.",
    image: "/images/software/hub-transfer.jpg",
    specs: [
      { label: "Transfer Mode", val: "Fulfillment Queue" },
      { label: "Transit Monitor", val: "Live Dispatched" },
      { label: "Sync Latency", val: "< 1.5s" },
    ],
    features: [
      "Select fulfilling hubs dynamically to match order queues.",
      "Live 'In Transit' verification prevents discrepancies between commissary and store.",
      "Storefront order request inspection and acceptance verification.",
    ],
  },
  ledger: {
    id: "ledger",
    code: "04",
    name: "Transport & Audit Ledger",
    badge: "RECONCILIATION",
    headline: "Unified Audit Trail for POS, Restocks & Logistics",
    desc: "Consolidated ledger recording all stock movements. Filter by combined feeds, branch restocking events, customer POS checkouts, and active in-transit freight.",
    image: "/images/software/ledger.jpg",
    specs: [
      { label: "Audit Coverage", val: "100% Movement" },
      { label: "Feed Filters", val: "Restock & Sales" },
      { label: "Store Scoping", val: "All Hubs" },
    ],
    features: [
      "Universal search by manifest, invoice, SKU, branch name, or client.",
      "Clear status flags for customer checkouts and logistics transfers.",
      "Direct verification of shortage transfers and inventory discrepancies.",
    ],
  },
  pos: {
    id: "pos",
    code: "05",
    name: "Wholesale POS & Stock Out",
    badge: "POINT OF SALE",
    headline: "Disburse Inventory, Stage Bulk Items & Issue Receipts",
    desc: "Direct register terminal connected directly to live inventory balances. Auto-deducts stocks at checkout and applies recurring client agreements.",
    image: "/images/software/pos.jpg",
    specs: [
      { label: "Order Mode", val: "Direct POS" },
      { label: "Held Orders", val: "Multi-Session" },
      { label: "Receipts", val: "Real-Time Log" },
    ],
    features: [
      "Displays real-time on-hand stock indicators prior to disbursement.",
      "Client Loyalty & Agreement pricing tiers automatically applied.",
      "Held order queue allowing cashiers to park pending bulk transactions.",
    ],
  },
};
</script>

<template>
  <section id="showcase" :class="$style.showcase">
    <div :class="$style.container">
      <div :class="$style.header">
        <span :class="$style.tag">[ SYSTEM CAPABILITIES ]</span>
        <h2 :class="$style.title">
          End-to-End Commissary &amp; Retail Operations
        </h2>
      </div>

      <!-- Navigation Tabs -->
      <div :class="$style.tabNav">
        <button
          v-for="item in modules"
          :key="item.id"
          type="button"
          :class="[
            $style.tabBtn,
            activeTab === item.id ? $style.tabBtnActive : '',
          ]"
          @click="activeTab = item.id"
        >
          <span :class="$style.tabCode">{{ item.code }}</span>
          <span>{{ item.name }}</span>
        </button>
      </div>

      <!-- Active Module Details & Screen Capture -->
      <div :class="$style.panel">
        <div :class="$style.specCol">
          <div :class="$style.badge">{{ modules[activeTab].badge }}</div>
          <h3 :class="$style.modHeadline">{{ modules[activeTab].headline }}</h3>
          <p :class="$style.modDesc">{{ modules[activeTab].desc }}</p>

          <div :class="$style.specGrid">
            <div
              v-for="s in modules[activeTab].specs"
              :key="s.label"
              :class="$style.specCard"
            >
              <span :class="$style.specVal">{{ s.val }}</span>
              <span :class="$style.specLabel">{{ s.label }}</span>
            </div>
          </div>

          <ul :class="$style.featureList">
            <li
              v-for="(feat, idx) in modules[activeTab].features"
              :key="idx"
              :class="$style.featureItem"
            >
              <span :class="$style.check">&check;</span>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>

        <div :class="$style.visualCol">
          <div :class="$style.imageHolder">
            <img
              :src="modules[activeTab].image"
              :alt="modules[activeTab].name + ' preview'"
              :class="$style.moduleImg"
              @error="
                (e: Event) => {
                  (e.target as HTMLElement).style.display = 'none';
                }
              "
            />
            <div :class="$style.placeholderOverlay">
              <span :class="$style.placeholderTag">LIVE SYSTEM PREVIEW</span>
              <span :class="$style.placeholderPath">{{
                modules[activeTab].image
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Demo Access Keys Reference Card -->
      <div id="demo-keys" :class="$style.demoAccessCard">
        <div :class="$style.demoAccessInfo">
          <span :class="$style.demoTag">&check; DEMO KEYS READY</span>
          <h4 :class="$style.demoTitle">
            Ready to test the live Commissary &amp; POS workflow?
          </h4>
          <p :class="$style.demoText">
            Access the employee portal using test credentials to inspect master
            stocks, generate POs, and run test receipts[cite: 4, 6].
          </p>
        </div>
        <div :class="$style.keysRow">
          <div :class="$style.keyPill">
            <span :class="$style.keyRole">Manager:</span>
            <code>EMP-101</code> / <code>admin123</code>
          </div>
          <div :class="$style.keyPill">
            <span :class="$style.keyRole">Staff:</span>
            <code>EMP-102</code> / <code>staff123</code>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.showcase {
  padding: 5rem 1.5rem;
  border-bottom: 1px solid #1a1a22;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.tag {
  font-family: monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: #10b981;
  display: block;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 850;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;
}

.tabNav {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #202028;
  margin-bottom: 2.5rem;
  overflow-x: auto;
}

.tabBtn {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #7d7d8e;
  font-size: 0.86rem;
  font-weight: 650;
  padding: 0.75rem 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.tabBtn:hover {
  color: #ffffff;
}

.tabBtnActive {
  color: #ffffff;
  border-bottom-color: #10b981;
}

.tabCode {
  font-family: monospace;
  font-size: 0.7rem;
  color: #10b981;
}

.panel {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .panel {
    grid-template-columns: 1fr 1.3fr;
  }
}

.specCol {
  display: flex;
  flex-direction: column;
}

.badge {
  font-family: monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #10b981;
  background: #14141a;
  border: 1px solid #242430;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 0.75rem;
}

.modHeadline {
  font-size: 1.45rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem;
  line-height: 1.3;
}

.modDesc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: #8e8e9e;
  margin: 0 0 1.5rem;
}

.specGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.specCard {
  background: #141418;
  border: 1px solid #22222a;
  border-radius: 6px;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
}

.specVal {
  font-size: 1.15rem;
  font-weight: 850;
  color: #ffffff;
}

.specLabel {
  font-size: 0.65rem;
  color: #727280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}

.featureList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.featureItem {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.84rem;
  color: #a4a4b2;
}

.check {
  color: #10b981;
  font-weight: 800;
}

.visualCol {
  width: 100%;
}

.imageHolder {
  position: relative;
  min-height: 380px;
  background: #121216;
  border: 1px solid #242430;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.moduleImg {
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

.demoAccessCard {
  margin-top: 3.5rem;
  background: #121217;
  border: 1px solid #23232c;
  border-radius: 10px;
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 800px) {
  .demoAccessCard {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.demoTag {
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: #10b981;
  display: block;
  margin-bottom: 0.35rem;
}

.demoTitle {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.35rem;
}

.demoText {
  font-size: 0.86rem;
  color: #8c8c9a;
  margin: 0;
  max-width: 580px;
}

.keysRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.keyPill {
  background: #181820;
  border: 1px solid #292936;
  padding: 0.6rem 0.9rem;
  border-radius: 6px;
  font-size: 0.82rem;
  color: #cfcfdc;
}

.keyRole {
  font-weight: 700;
  color: #ffffff;
  margin-right: 0.35rem;
}

.keyPill code {
  color: #a5b4fc;
  font-family: monospace;
}
</style>
