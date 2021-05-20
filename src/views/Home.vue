<template>
  <div class="container">
    <HeadBar></HeadBar>
    <NavBar></NavBar>
    <MainContent></MainContent>
  </div>
</template>


<script>
import mock from "@/mock/index.js";
import HeadBar from "./HeadBar/HeadBar";
import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent/MainContent";

export default {
  name: "Home",
  components: {
    HeadBar,
    NavBar,
    MainContent
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>
<style scoped lang="scss">
.container {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #4b5f6e;
}
</style>

