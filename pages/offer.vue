<template>
  <div class="offer">
    <div class="mechanics__heading">
      *Para participar... Recarga preferentemente tu número en la tienda en donde compraste el chip.
    </div>

    <div class="offer__img">
      <img :src="require(`~/assets/img/${chipName}.jpeg`)" :alt="`${chipName} image`" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['chipName']),
  },
}
</script>

<style lang="scss">
@import 'assets/css/utils/mixins';

.offer {
  padding: 4rem;
  min-height: 100vh;
  max-width: 1300px;
  margin: 0 auto;

  @include respond(md) {
    padding: 4rem 2rem;
  }

  &__img {
    flex: 0 0 50%;

    img {
      width: 100%;
    }
  }
}
</style>
