<template>
  <header class="w-full text-sm">
    <h1>{{ company }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      company: "Logo",
    };
  },
};
</script>
