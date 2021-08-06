<template>
  <div class="default bgChip" :class="gradientBg">
    <nav class="navbar">
      <img src="../assets/img/Logo.jpeg" alt="Logo" />
    </nav>
    <Nuxt class="default__mainContent" />
    <img src="../assets/img/decorator-top.svg" alt="Wave" class="default__decorator--top" />
    <img src="../assets/img/decorator-bottom.svg" alt="Wave" class="default__decorator--bottom" />
  </div>
</template>

<script>
import mixinBackgroundColor from '../mixins/background-color'

export default {
  mixins: [mixinBackgroundColor],
}
</script>

<style lang="scss">
.navbar {
  width: 100%;
  background-color: #000;
  text-align: right;
  padding: 0 2rem;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;

  img {
    height: 6rem;
  }
}

.default {
  margin-top: 5rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  &__mainContent {
    position: relative;
    z-index: 2;
  }

  &__decorator {
    &--top {
      position: absolute;
      top: 0;
      left: 0;
      height: 50vh;
      z-index: 1;
    }

    &--bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 30vh;
      z-index: 1;
    }
  }
}
</style>
