<template>
  <win-groupbox title="Navigation Bars">
    <!-- Default Navbar -->
    <div class="navbar-demo">
      <h4>Default Navbar</h4>
      <win-navbar />
    </div>

    <!-- Custom items -->
    <div class="navbar-demo">
      <h4>Custom Items</h4>
      <win-navbar :items="customItems" />
    </div>

    <!-- With slot content -->
    <div class="navbar-demo">
      <h4>Using Slots</h4>
      <win-navbar>
        <win-navbar-item
          href="#home"
          :active="activeItem === 'home'"
          @click="setActive('home')"
        >
          🏠 Home
        </win-navbar-item>
        <win-navbar-item
          href="#about"
          :active="activeItem === 'about'"
          @click="setActive('about')"
        >
          ℹ️ About
        </win-navbar-item>
        <win-navbar-item
          href="#contact"
          :active="activeItem === 'contact'"
          @click="setActive('contact')"
        >
          📧 Contact
        </win-navbar-item>
      </win-navbar>
    </div>

    <!-- Glass morphism disabled -->
    <div class="navbar-demo">
      <h4>Without Glass Effect</h4>
      <win-navbar :glass-morphism="false" />
    </div>
  </win-groupbox>
</template>

<script setup>
import { ref } from 'vue';

const activeItem = ref('home');

const customItems = [
  { text: 'Products', href: '#products' },
  { text: 'Services', href: '#services' },
  { text: 'Support', href: '#support' },
  { text: 'Login', href: '#login' }
];

const setActive = (item) => {
  activeItem.value = item;
};
</script>

<style scoped>
.navbar-demo {
  margin-bottom: 20px;
}

.navbar-demo h4 {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #666;
}

.navbar-demo :deep(.winui-navbar) {
  border-radius: 4px;
  overflow: hidden;
}
</style>
