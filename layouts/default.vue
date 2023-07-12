<template>
  <div id="container">
    <div id="menu-container"><Menu /></div>
    <div id="content-container"><slot /></div>
  </div>
</template>
<style scoped>
@media only screen and (min-width: 769px) {
  #menu-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 380px;
    border-right: 2px dashed hsl(0, 0%, 21%);
  }

  #content-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 380px;
    right: 0;
  }
}

@media only screen and (max-width: 768px) {
  #menu-container {
    border-bottom: 2px dashed hsl(0, 0%, 21%);
  }
}
</style>
