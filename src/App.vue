<template>
  <div class="container">
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-4">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-4">
              <Header />
            </div>
            <div class="col-12 mb-4">
              <router-view ></router-view>
            </div>
            <div class="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

