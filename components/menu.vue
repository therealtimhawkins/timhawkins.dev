<template>
  <div id="menu">
    <div id="menu-content">
      <img
        id="profile-picture"
        class="brutal-border"
        src="/profile.png"
        alt="Tim Hawkins Picture"
      />
      <div id="menu-items">
        <nuxt-link
          href="/"
          class="gradient-background link hoverable"
          :class="checkRoute('/')"
          >About</nuxt-link
        >
        <nuxt-link
          href="/projects"
          class="gradient-background link hoverable"
          :class="checkRoute('/projects')"
          >Projects</nuxt-link
        >
        <a
          href="https://medium.com/@timothyhaydenhawkins"
          target="_blank"
          class="gradient-background link hoverable"
          >Blog</a
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()

const checkRoute = (path: string) => {
  return route.path === path ? "is-active" : ""
}
</script>
<style>
@media only screen and (min-width: 769px) {
  #menu {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  #menu-content {
    padding: 40px;
  }

  #menu-items {
    text-align: right;
    padding-top: 12px;
  }

  #menu-items > a {
    font-size: x-large;
    font-weight: 600;
    margin-top: 18px;
    display: block;
    text-decoration: none;
  }

  #profile-picture {
    width: 120px;
    height: 120px;
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  #menu {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  #menu-content {
    padding: 20px;
  }

  #menu-items {
    text-align: center;
    padding-top: 6px;
  }

  #menu-items > a {
    font-size: large;
    font-weight: 600;
    margin-top: 18px;
    display: block;
    text-decoration: none;
    float: left;
    margin-right: 20px;
  }

  #profile-picture {
    width: 80px;
    height: 80px;
  }
}
</style>
