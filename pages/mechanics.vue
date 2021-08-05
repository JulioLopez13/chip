<template>
  <div class="mechanics">
    <!--Escenario 1-->
    <div class="mechanics__scene">
      <div class="text-center">
        <h2>Quinto mes de regalo</h2>
      </div>
      <div class="table">
        <div class="table__title">Escenario 1</div>

        <div class="table__th">Mes 1 (compra) <br />Julio</div>
        <div class="table__th">Mes 2 <br />Agosto</div>
        <div class="table__th">Mes 3 <br />Septiembre</div>
        <div class="table__th">Mes 4 <br />Octubre</div>
        <div class="table__th">Mes 5 <br />Noviembre</div>

        <div class="table__td" data-td="1">
          Beneficios + $150 <br />
          acumulas $200
        </div>
        <div class="table__td" data-td="2">Recarga o acumula $200</div>
        <div class="table__td" data-td="3">Recarga o acumula $200</div>
        <div class="table__td" data-td="4">Recarga o acumula $200</div>
        <div class="table__td" data-td="5" :style="highlightColor">
          Este mes va por nuestra cuenta
        </div>
      </div>
      <div class="mechanics__example">
        <h3>Ejemplo escenario 1</h3>
        <p>
          Si compraste tu chip <span class="highlight">con beneficios incluidos</span> en el mes de
          julio y al vencer estos recargas $150 antes del 31 de julio
          <span class="highlight">ya acumulaste $200</span>, si continuas recargando o acumulando
          <span class="highlight">$200</span> durante los próximos tres meses (agosto, septiembre y
          octubre) <br />
          <span class="highlight">¡¡¡automáticamente Noviembre te lo regalamos!!!</span>
        </p>
      </div>
    </div>

    <!--Escenario 2-->
    <div class="mechanics__scene">
      <div class="table table--plus">
        <div class="table__title">Escenario 2</div>

        <div class="table__th">Mes 1 (compra) <br />Julio</div>
        <div class="table__th">Mes 2 <br />Agosto</div>
        <div class="table__th">Mes 3 <br />Septiembre</div>
        <div class="table__th">Mes 4 <br />Octubre</div>
        <div class="table__th">Mes 5 <br />Noviembre</div>
        <div class="table__th">Mes 6 <br />Diciembre</div>

        <div class="table__td" data-td="1">
          Beneficios + $100 <br />
          No acumulas $200
        </div>
        <div class="table__td" data-td="2">Recarga o acumula $200</div>
        <div class="table__td" data-td="3">Recarga o acumula $200</div>
        <div class="table__td" data-td="4">Recarga o acumula $200</div>
        <div class="table__td" data-td="5">Recarga o acumula $200</div>
        <div class="table__td" data-td="6" :style="highlightColor">
          Este mes va por nuestra cuenta
        </div>
      </div>
      <div class="mechanics__example">
        <h3>Ejemplo escenario 2</h3>
        <p>
          Si compraste tu chip <span class="highlight">con beneficios incluidos</span> en el mes de
          julio y al vencer estos no pudiste recargar $150 antes del 31 de julio
          <span class="highlight">no se cumple el criterio</span>, pero si acumulas
          <span class="highlight">$200</span> durante los próximos cuatro meses (agosto, septiembre,
          octubre y noviembre) <br />
          <span class="highlight">¡¡¡automáticamente Diciembre te lo regalamos!!!</span>
        </p>
        <p class="mechanics__final-note">
          <span class="highlight">* Los meses únicamente son ejemplos</span>, es decir, pudiste
          haber comprado tu chip posterior al mes de julio, así que tanto el mes de compra así como
          el mes de regalo, <span class="highlight">se recorren.</span>
        </p>
      </div>
    </div>

    <div class="mechanics__raffle">
      <div class="text-center"><h2>Rifa</h2></div>

      <!--Raffle table 1-->
      <div class="table table--raffle">
        <div class="table__title">Rifa de Smartphone</div>

        <div class="table__th" data-th="1">Mes 1 (compra)</div>
        <div class="table__th" data-th="2">Mes 2</div>
        <div class="table__th" data-th="3">Mes 3</div>
        <div class="table__th" data-th="4">Mes 4</div>

        <div class="table__td" data-td="1">
          <span>Beneficios + recarga de $150 <span class="highlight">= $200</span></span>
        </div>
        <div class="table__td" data-td="2">
          <span>Recarga o acumula <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="3">
          <span>Recarga o acumula <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="4">
          <span>Recarga o acumula <span class="highlight">$200</span></span>
        </div>

        <div class="table__arrow table__arrow--success" data-arrow="1">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>Participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="2">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>Participas</span>
        </div>
      </div>

      <!--Raffle table 2-->
      <div class="table table--raffle">
        <div class="table__title">Rifa de Smartphone</div>

        <div class="table__th" data-th="1">Mes 1 (compra)</div>
        <div class="table__th" data-th="2">Mes 2</div>
        <div class="table__th" data-th="3">Mes 3</div>
        <div class="table__th" data-th="4">Mes 4</div>

        <div class="table__td" data-td="1">
          <span>Beneficios + recarga de $50 <span class="highlight">= $100</span></span>
        </div>
        <div class="table__td" data-td="2">
          <span>Recarga o acumula <span class="highlight">$150</span></span>
        </div>
        <div class="table__td" data-td="3">
          <span>Recarga o acumula <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="4">
          <span>Recarga o acumula <span class="highlight">$200</span></span>
        </div>

        <div class="table__arrow table__arrow--error" data-arrow="1">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>No participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="2">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>Participas</span>
        </div>
      </div>
    </div>

    <div class="mechanics__resume">
      *
      <span class="highlight">
        La Rifa bimestral del Smartphone y el quinto mes de regalo sólo aplican si se cumple con el
        criterio de las recargas antes estipuladas.
      </span>
      Sólo participan los número que <span class="highlight">acumulen o recarguen $200</span> o más
      en el mes calendario, es decir, no corre el mes a partir de la fecha de compra y sólo
      participan
      <span class="highlight">durante 4 meses a partir del mes en que se adquirió el chip</span>.
    </div>
  </div>
</template>

<script>
import highlightColor from '../mixins/highlight-color'

export default {
  mixins: [highlightColor],
}
</script>

<style lang="scss">
@import 'assets/css/utils/mixins';

$spacing: 2rem;
.mechanics {
  padding: 4rem;
  min-height: 100vh;
  max-width: 1300px;
  margin: 0 auto;

  @include respond(md) {
    padding: 4rem 2rem;
  }

  &__scene {
    &:not(:first-child) {
      margin-top: $spacing + 2rem;
    }

    h2 {
      margin-bottom: 1rem;
      font-size: 3rem;
      font-family: 'Segoe UI Black', sans-serif;
    }
  }

  &__resume {
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;

    .highlight {
      font-family: 'Segoe UI Black', sans-serif;
    }
  }

  &__table {
    width: 100%;
    margin-top: 1rem;

    td {
      text-align: center;
    }
  }

  &__example {
    text-align: center;

    h3 {
      margin-bottom: 0.8rem;
      margin-top: $spacing;
      font-size: 2.5rem;
      font-family: 'Segoe UI Black', sans-serif;
    }

    p {
      font-size: 2rem;

      .highlight {
        font-family: 'Segoe UI Black', sans-serif;
      }
    }
  }

  &__final-note {
    margin-top: $spacing;
    padding: 0.8rem 1.6rem;
    border-radius: var(--border-radius);
    background-image: linear-gradient(to right bottom, #6a3093, #a044ff);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 70%;
      width: 50%;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: top left;
      background-size: contain;
      background-image: url('../assets/img/decorator-top.svg');
    }

    &::before {
      content: '';
      position: absolute;
      height: 50%;
      width: 50%;
      bottom: 0;
      right: 0;
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: contain;
      background-image: url('../assets/img/decorator-bottom.svg');
    }
  }

  &__raffle {
    margin-top: $spacing + 2rem;

    h2 {
      font-size: 3rem;
      font-family: 'Segoe UI Black', sans-serif;
      margin-bottom: 0.8rem;
    }

    .table:last-child {
      margin-top: $spacing;
    }
  }

  &__raffle,
  &__scene {
    .text-center h2 {
      font-size: 4rem !important;
      text-transform: uppercase;
      -webkit-text-stroke: 2px #d98230;
    }
  }
}
</style>
