<template>
  <div class="index">
    <img src="../assets/img/decorator-top.svg" alt="Wave" class="index__decorator--top" />
    <img src="../assets/img/decorator-bottom.svg" alt="Wave" class="index__decorator--bottom" />

    <div class="index__heading">
      <span>Compra tu chip,</span>
      <span>recárgalo y...</span>
      <span>¡GANA!</span>
    </div>

    <p class="index__thanks">🎊 ¡Gracias por comprar tu chip AT&T aquí! 🎉</p>

    <div class="index__content">
      <p>
        Recarga o acumula <span class="highlight">$200</span> al mes durante
        <span class="highlight">4 meses</span> continuos y...
      </p>
      <p>¡El quinto mes va por nuestra cuenta! 🥳</p>
      <p>
        Además, al <span class="highlight">recargar</span> o
        <span class="highlight">acumular</span> $200 durante dos meses continuos participas
        automáticamente en la <span class="highlight">Rifa bimestral</span> de un
        <span class="highlight">Smartphone</span>
      </p>
      <p>"los últimos 5 dígitos de <span class="highlight">tu número participan</span>"</p>
      <button class="btn btn--primary btn--border-white">Mecánica >></button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.index {
  overflow: hidden;
  min-height: 100vh;
  color: var(--light-color);
  background-image: linear-gradient(to bottom, var(--secondary-color), var(--primary-color));
  position: relative;
  text-align: center;
  padding: 4rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__decorator {
    &--top {
      position: absolute;
      top: 0;
      left: 0;
      height: 50%;
    }

    &--bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 20%;
    }
  }

  &__heading {
    font-size: 1.6rem;
    padding-bottom: 3rem;
    font-family: 'Raleway Medium', sans-serif;
    display: flex;
    flex-direction: column;

    span {
      &:nth-child(1),
      &:nth-child(2) {
        font-size: 3.5rem;
      }

      &:nth-child(3) {
        margin-top: 1rem;
        font-size: 8rem;
        font-family: 'Raleway Bold', sans-serif;
      }
    }
  }

  &__thanks {
    font-size: 2.5rem;
    font-family: 'Raleway SemiBold', sans-serif;
  }

  &__content {
    margin-top: 4rem;
    font-size: 1.8rem;

    .highlight {
      font-size: 2.5rem;
      font-family: 'Raleway SemiBold', sans-serif;
    }

    p {
      &:nth-child(2) {
        font-family: 'Raleway Bold', sans-serif;
        margin: 1.5rem 0;
        font-size: 3rem;
      }
    }

    .btn {
      margin-top: 3rem;
    }
  }
}
</style>
