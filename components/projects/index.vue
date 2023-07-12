<template>
  <div id="projects">
    <div id="projects-content">
      <ProjectsCard
        imgSrc="/cercula.png"
        title="cercula.io"
        subtitle="API first carbon metrics for the construction industry"
        link="https://cercula.io"
      />

      <ProjectsCard
        imgSrc="/pattern-kid.png"
        title="patternkid.com"
        subtitle="Instantly design beautful, geometric design assets"
        link="https://patternkid.com"
      />

      <ProjectsCard
        imgSrc="/meatfree-baby.png"
        title="meatfree.baby"
        subtitle="Find the plant based meals near to you"
        link="https://meatfree.baby"
      />
    </div>
  </div>
</template>
<style>
#projects {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 800px;
}

@media only screen and (min-width: 769px) {
  #projects-content {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 60px;
    row-gap: 60px;
    padding: 60px;
  }
}

@media only screen and (max-width: 768px) {
  #projects-content {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    column-gap: 20px;
    row-gap: 20px;
    padding: 20px;
    padding-top: 24px;
  }
}
</style>
