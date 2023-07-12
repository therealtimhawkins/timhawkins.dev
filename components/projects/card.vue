<template>
  <a
    :href="link"
    target="_blank"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="project-card"
  >
    <div class="project-card-img-container brutal-border">
      <img class="project-card-img" :src="imgSrc" />
      <div
        class="project-card-overlay gradient-background-light"
        :class="isActive"
      ></div>
      <div class="project-overlay-icon" :class="isActive">
        <img src="/link.svg" />
      </div>
    </div>
    <div class="project-card-title">
      {{ title }}
    </div>
    <div class="project-card-description">
      {{ subtitle }}
    </div>
  </a>
</template>
<script lang="ts" setup>
const { imgSrc, title, subtitle } = defineProps({
  imgSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
})

const hover = ref(false)

const isActive = computed(() => {
  return hover.value ? "is-active" : ""
})
</script>
<style>
.project-card {
  text-decoration: none;
}

.project-card:hover {
  cursor: pointer;
}

.project-card-img-container {
  position: relative;
}

.project-card-img {
  width: 100%;
  display: block;
}

.project-card-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 0;
  right: 100%;
  overflow: hidden;
  transition: all 0.2s linear;
  display: flex;
  justify-content: left;
  align-items: center;
}

.project-card-overlay.is-active {
  right: 0;
  width: 100%;
}

.project-overlay-icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s linear;
}

.project-overlay-icon > img {
  height: 40px;
  width: 40px;
}

.project-overlay-icon.is-active {
  opacity: 1;
}

.project-card-title {
  font-size: x-large;
  font-weight: 600;
  padding-top: 12px;
}

.project-card-description {
  padding-top: 6px;
}
</style>
