<template>
  <div class="reward">
    <!--REWARD-->
    <h1 class="reward__heading">Premio participante en la rifa</h1>
    <div class="reward__img">
      <img src="../assets/img/XiaomiPocoM3.png" alt="Xiaomi M3" />
    </div>

    <!--FEATURES-->
    <div class="reward__feature"><span>Marca: </span> <span>Xiaomi</span></div>
    <div class="reward__feature"><span>Modelo: </span> <span>Poco M3</span></div>
    <div class="reward__features">
      <h3>Características</h3>
      <div>Pantalla: <span>Snapdragon</span></div>
      <div>Memoria: <span>4GB</span></div>
      <div>Capacidad: <span>128GB</span></div>
      <div>Cámara frontal: <span>8MP</span></div>
      <div>Cámara principal: <span>Triple de 48MP</span></div>
    </div>

    <!--TERMS-->
    <div class="reward__terms">
      <p>
        <span class="bold-text">La Rifa</span> se celebrará
        <span class="bold-text">el primer martes de cada mes</span> en combinación con el
        <span class="bold-text">premio mayor del sorteo de La Lotería Nacional</span>. <br />
        <span class="bold-text"> "los últimos 5 números de tu numero participan" </span>
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
    </div>
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
    margin-bottom: 3.5rem;

    img {
      max-width: 800px;
    }
  }

  &__feature {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Segoe UI Black', sans-serif;
    font-size: 3rem;
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
  }

  &__terms {
    text-align: center;
    font-size: 2rem;
    margin-top: 3rem;

    p:not(:last-child) {
      margin-bottom: 2rem;
    }

    p:last-child {
      font-size: 2.5rem;
      font-family: 'Segoe UI Black', sans-serif;
      text-transform: uppercase;
    }
  }

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      -webkit-transform: rotateY(0deg);
      -o-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    to {
      -ms-transform: rotateY(360deg);
      -moz-transform: rotateY(360deg);
      -webkit-transform: rotateY(360deg);
      -o-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
  .rotating {
    -webkit-animation: rotating 2s linear;
    -moz-animation: rotating 2s linear;
    -ms-animation: rotating 2s linear;
    -o-animation: rotating 2s linear;
    animation: rotating 2s linear;
  }
}
</style>
