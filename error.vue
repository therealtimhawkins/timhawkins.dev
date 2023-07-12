<template>
  <div id="error">
    <div id="error-content">
      <img id="error-content-img" src="/error.svg" />
      <div id="error-text">Ooops! Page not found.</div>
      <nuxt-link href="/" id="error-home" class="brutal-button">
        <img src="/home.svg" />
      </nuxt-link>
    </div>
  </div>
</template>
<style>
#error {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#error-content {
  text-align: center;
}

#error-content-img {
  width: 200px;
  height: 200px;
}

#error-text {
  margin-top: 12px;
  font-size: x-large;
  font-weight: 600;
}

#error-home {
  margin-top: 12px;
  margin-left: calc(50% - 20px);
}
</style>
