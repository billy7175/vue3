<template>
  <header class="w-full text-sm">
    <h1>{{ company }}</h1>
    <ul>
      <li v-for="menu in menuItems" :key="menu" class="ml-9 h-full first:ml-0">
        <a href="" class="flex h-full items-center py-2.5">{{ menu }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      company: "Logo",
      menuItems: ["Home", "About", "Contact", "Services"],
    };
  },
};
</script>
