<template>
  <div class>
    <h1>Hello SSR</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      url: [
        {
          name: "Blog",
          url: "https://blog.jaedsada.com",
          detail: ["Blog"]
        },
        {
          name: "Documents",
          url: "https://blog.thnovice.me",
          detail: ["Devops Tool", "Linux"]
        },
        {
          name: "Covid19",
          url: "/covid",
          detail: ["Case Global", "Case in Thailand", "News"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-black {
  background: black;
  color: white !important;
  padding: 13rem 0;
}
</style>

