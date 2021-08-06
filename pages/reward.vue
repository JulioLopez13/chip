<template>
  <div class="reward">
    <!--REWARD-->
    <h1 class="reward__heading">Premio participante en la rifa</h1>
    <div class="reward__img">
      <img src="../assets/img/giftboxPhone.png" alt="Xiaomi M3" />
    </div>

    <!--FEATURES-->
    <div class="reward__features reward__features--black">
      <div class="reward__feature"><span>Marca: </span> <span>Xiaomi</span></div>
      <div class="reward__feature"><span>Modelo: </span> <span>Poco M3</span></div>
    </div>
    <div class="reward__features">
      <h3>Características</h3>
      <div>Pantalla: <span>6.53''</span></div>
      <div>Procesador: <span>Snapdragon</span></div>
      <div>Memoria: <span>4GB</span></div>
      <div>Capacidad: <span>128GB</span></div>
      <div>Cámara frontal: <span>8MP</span></div>
      <div>Cámara principal: <span>Triple de 48MP</span></div>
    </div>

    <div class="text-center">
      <button class="btn btn--border-white btn--black" @click="$modal.show('terms')">
        Condiciones
      </button>
    </div>

    <!--TERMS MODAL-->
    <modal
      :adaptive="true"
      :maxWidth="380"
      :resizable="true"
      :scrollable="true"
      classes="reward__terms"
      height="auto"
      name="terms"
    >
      <p>
        <span class="bold-text">La Rifa</span> se celebrará
        <span class="bold-text">el Martes 5 de Octubre y el Martes 7 de Diciembre de 2021</span> en
        combinación con el
        <span class="bold-text">Sorteo del Premio Mayor de la Lotería Nacional</span>. <br />
        <span class="bold-text">"Los últimos 5 dígitos de tu número participan"</span>
      </p>
      <p>
        *La rifa bimestral del smartphone así como el quinto mes de regalo, aplican únicamente en
        líneas que recarguen $200 de manera continua según la mecánica estipulada.**Los números
        participantes en la promoción serán los que estén registrados en nuestra base de datos y se
        hayan comprado en los puntos de venta participantes.
      </p>
      <p>
        El quinto mes de regalo se abonará automáticamente en el número participante, una vez que se
        cumpla el criterio de los $200 recargados de manera continua durante 4 meses.
      </p>
      <p>
        La entrega del Smartphone será en el Punto de Venta en donde se adquirió el Chip y se
        notificará al ganador a través del número que resulte ganador.
      </p>
      <p>¡Gracias por participar!</p>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'reward',
}
</script>

<style lang="scss">
@import 'assets/css/utils/mixins';

.reward {
  @include containerStyle;

  &__heading {
    @include headingStyle;
    text-transform: uppercase;
  }

  &__img {
    width: 100%;
    text-align: center;

    img {
      @include respond(sm) {
        width: 100%;
      }
    }
  }

  &__features &__feature {
    text-align: center;
    text-transform: capitalize;
    font-family: 'Segoe UI Black', sans-serif;
  }

  &__features {
    @include finalNote;
    padding: 2rem;
    margin-top: 1.5rem;
    text-align: center;

    h3 {
      font-family: 'Segoe UI Black', sans-serif;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    div {
      font-size: 2rem;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      span {
        font-family: 'Segoe UI Black', sans-serif;
      }
    }

    &--black {
      background-image: linear-gradient(to right bottom, #232526, #414345);
    }
  }

  .btn--black {
    margin-top: 2rem;
  }

  &__terms {
    max-height: 60vh;
    overflow-y: scroll;
    color: #222222;
    text-align: center;
    font-size: 2rem;
    padding: 3rem 2rem;

    p:not(:last-child) {
      margin-bottom: 2rem;
    }

    p:last-child {
      font-size: 2.5rem;
      font-family: 'Segoe UI Black', sans-serif;
      text-transform: uppercase;
    }
  }
}
</style>
