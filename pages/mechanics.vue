<template>
  <div class="mechanics">
    <div class="mechanics__resume">
      * La Rifa bimestral del Smartphone y el quinto mes de regalo sólo aplican si se cumple con el
      criterio de las recargas antes estipuladas. Sólo participan los número que acumulen o
      recarguen $200 o más en el mes calendario, es decir, no corre el mes a partir de la fecha de
      compra y sólo participan durante 5 meses a partir del mes en que se adquirió el chip.
    </div>

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

        <div class="table__td" data-td="1">Beneficios + $150, acumulas $200</div>
        <div class="table__td" data-td="2">Recarga o acumula $200</div>
        <div class="table__td" data-td="3">Recarga o acumula $200</div>
        <div class="table__td" data-td="4">Recarga o acumula $200</div>
        <div class="table__td" data-td="5">Este mes va por nuestra cuenta</div>
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

    <div class="mechanics__scene">
      <div class="table table--plus">
        <div class="table__title">Escenario 2</div>

        <div class="table__th">Mes 1 (compra) <br />Julio</div>
        <div class="table__th">Mes 2 <br />Agosto</div>
        <div class="table__th">Mes 3 <br />Septiembre</div>
        <div class="table__th">Mes 4 <br />Octubre</div>
        <div class="table__th">Mes 5 <br />Noviembre</div>
        <div class="table__th">Mes 6 <br />Diciembre</div>

        <div class="table__td" data-td="1">Beneficios + $100, acumulas $200</div>
        <div class="table__td" data-td="2">Recarga o acumula $200</div>
        <div class="table__td" data-td="3">Recarga o acumula $200</div>
        <div class="table__td" data-td="4">Recarga o acumula $200</div>
        <div class="table__td" data-td="5">Recarga o acumula $200</div>
        <div class="table__td" data-td="6">Este mes va por nuestra cuenta</div>
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
      <div class="text-center">
        <h2>Rifa</h2>
      </div>
      <div class="table table--raffle">
        <div class="table__title"></div>

        <div class="table__th" data-th="1">Mes 1 (compra)</div>
        <div class="table__th" data-th="2">Mes 2</div>
        <div class="table__th" data-th="3">Mes 3</div>
        <div class="table__th" data-th="4">Mes 4</div>
        <div class="table__th" data-th="5">Mes 5</div>

        <div class="table__td" data-td="1">Beneficios + recarga de $150 = $200</div>
        <div class="table__td" data-td="2">Recarga o acumula $200</div>
        <div class="table__td" data-td="3">Recarga o acumula $200</div>
        <div class="table__td" data-td="4">Recarga o acumula $200</div>
        <div class="table__td" data-td="5">Recarga o acumula $200</div>

        <div class="table__arrow table__arrow--success" data-arrow="1">
          <i class="fas fa-level-up-alt"></i>
          <span>Participas</span>
        </div>
        <div class="table__arrow table__arrow--error" data-arrow="2">
          <i class="fas fa-level-up-alt"></i>
          <span>No participas</span>
        </div>
        <div class="table__arrow table__arrow--error" data-arrow="3">
          <i class="fas fa-level-up-alt"></i>
          <span>No participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="4">
          <i class="fas fa-level-up-alt"></i>
          <span>Participas</span>
        </div>
      </div>
      <div class="table table--raffle">
        <div class="table__title"></div>

        <div class="table__th" data-th="1">Mes 1 (compra)</div>
        <div class="table__th" data-th="2">Mes 2</div>
        <div class="table__th" data-th="3">Mes 3</div>
        <div class="table__th" data-th="4">Mes 4</div>
        <div class="table__th" data-th="5">Mes 5</div>

        <div class="table__td" data-td="1">Beneficios = No pudiste recargar</div>
        <div class="table__td" data-td="2">Recarga o acumula $100</div>
        <div class="table__td" data-td="3">Recarga o acumula $200</div>
        <div class="table__td" data-td="4">Recarga o acumula $200</div>
        <div class="table__td" data-td="5">Recarga o acumula $200</div>

        <div class="table__arrow table__arrow--error" data-arrow="1">
          <i class="fas fa-level-up-alt"></i>
          <span>No participas</span>
        </div>
        <div class="table__arrow table__arrow--error" data-arrow="2">
          <i class="fas fa-level-up-alt"></i>
          <span>No participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="3">
          <i class="fas fa-level-up-alt"></i>
          <span>Participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="4">
          <i class="fas fa-level-up-alt"></i>
          <span>Participas</span>
        </div>
      </div>
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

$spacing: 2rem;
.mechanics {
  padding: 4rem;
  min-height: 100vh;
  max-width: 1300px;
  margin: 0 auto;

  @include respond(md) {
    padding: 4rem 2rem;
  }

  &__resume {
    font-size: 2rem;
    text-align: center;
  }

  &__scene {
    margin-top: $spacing + 2rem;

    h2 {
      margin-bottom: 1rem;
      font-size: 3rem;
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
}
</style>
