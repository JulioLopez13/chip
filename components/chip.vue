<template>
  <div class="index">
    <div class="index__heading">
      <span>Compra tu chip,</span>
      <span>recárgalo y...</span>
      <span>¡GANA!</span>
    </div>

    <p class="index__thanks">
      ¡Gracias por comprar
      <span class="highlight"> tu chip {{ chipName.toUpperCase() }} <span>aquí</span> </span>
      <img src="../assets/img/loudspeaker.png" alt="Megaphone" />
      !
    </p>

    <div class="index__content">
      <p>
        Recarga o acumula <span class="highlight">$200</span> al mes durante
        <span class="highlight">4 meses</span> consecutivos y...
      </p>
      <p>¡El quinto mes va por nuestra cuenta!</p>
      <p>
        Además, al <span class="highlight">recargar</span> o
        <span class="highlight">acumular</span> $200 durante dos meses continuos participas
        automáticamente en la <span class="highlight">Rifa bimestral</span> de un
        <span class="highlight">Smartphone</span>
      </p>
      <p>"los últimos 5 dígitos de <span class="highlight">tu número participan</span>"</p>
    </div>

    <div class="index__buttons">
      <button class="btn btn--primary btn--border-white" @click="$router.push({ name: 'offer' })">
        Oferta comercial
      </button>
      <button
        class="btn btn--primary btn--border-white"
        @click="$router.push({ name: 'mechanics' })"
      >
        Mecánica >>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['changeChip']),
  },
  computed: {
    ...mapGetters(['chipName']),
  },
  mounted() {
    const { name } = this.$route
    if (name === 'index') this.changeChip('at&t')
    else this.changeChip(name)
  },
}
</script>

<style lang="scss">
.index {
  min-height: 100vh;
  position: relative;
  text-align: center;
  padding: 4rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__heading {
    font-size: 1.6rem;
    padding-bottom: 3rem;
    font-family: 'Arial Black', sans-serif;
    display: flex;
    flex-direction: column;

    span {
      &:nth-child(1),
      &:nth-child(2) {
        font-size: 3.5rem;
      }

      &:nth-child(3) {
        font-size: 8rem;
      }
    }
  }

  &__thanks {
    font-size: 2.8rem;

    .highlight span {
      font-size: 3.5rem;
    }

    img {
      width: 5.5rem;
      height: auto;
      vertical-align: bottom;
    }
  }

  &__content {
    margin-top: 4rem;
    font-size: 2.5rem;

    p {
      &:nth-child(2) {
        font-family: 'Segoe UI Black', sans-serif;
        margin: 1.5rem 0;
        font-size: 3rem;
      }
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .btn {
      margin-top: 3rem;
      font-size: 2rem;

      &:last-child {
        margin-left: 2rem;
      }
    }
  }

  .highlight {
    font-size: 2.5rem;
    font-family: 'Segoe UI Black', sans-serif;
  }
}
</style>
