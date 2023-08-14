<template>
  <div id="about">
    <div id="about-content">
      <div>
        <div>Hello!</div>
        <div>
          My name's <b>Tim Hawkins</b>. I like to make products and tools.
          Usually in the climate space. Sometimes in the design space.
        </div>
      </div>
      <div>
        <div>Find me here:</div>
        <div>
          <a
            href="https://github.com/therealtimhawkins"
            target="_blank"
            class="brutal-button"
          >
            <img src="/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/timothyhaydenhawkins/"
            target="_blank"
            class="brutal-button"
          >
            <img src="/linkedin.svg" />
          </a>
          <a @click="copyEmail" class="brutal-button">
            <img src="/mail.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { alert } from "notie"
import copy from "copy-to-clipboard"

const copyEmail = () => {
  copy("timothyhaydenhawkins@gmail.com")
  alert({
    text: "Email copied to clipboard 😘",
  })
}
</script>
<style>
#about {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
}

#about-content {
  padding: 40px;
  max-width: 700px;
  font-size: large;
}

#about-content > div {
  padding-top: 24px;
}

#about-content > div > div {
  padding-top: 12px;
}

@media only screen and (min-width: 769px) {
  #about-content {
    padding: 40px;
  }
}

@media only screen and (max-width: 768px) {
  #about-content {
    padding: 20px;
  }
}
</style>
