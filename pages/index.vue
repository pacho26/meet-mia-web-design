<template>
  <div>
    <Navigation />
    <main>
      <div class="cover-container">
        <img src="../assets/img/christmas-cover.jpg" style="100%" />
        <div class="cover-text">
          <h1>Božićna ponuda</h1>
          <p>
            Kušajte naše božićne delicije i upotpunite svoj blagdanski ugođaj.
          </p>
          <!-- komponenta BaseButtona ovdje -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 140px;
}

.cover-container {
  position: relative;

  img {
    width: 100%;
  }
}

.cover-text {
  position: absolute;
  bottom: 0px;
  background-color: hsl(0, 0%, 93%, 0.6);
  width: 100%;
  padding-top: 10px;
}
</style>
