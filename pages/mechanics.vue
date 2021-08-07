<template>
  <div class="mechanics">
    <!--Escenario 1-->
    <div class="mechanics__scene">
      <div class="text-center">
        <h2>Quinto mes de regalo</h2>
      </div>
      <div class="table">
        <div class="table__title">Escenario 1</div>

        <div class="table__th">Mes 1 (compra)<br />Agosto</div>
        <div class="table__th">Mes 2 <br />Septiembre</div>
        <div class="table__th">Mes 3 <br />Octubre</div>
        <div class="table__th">Mes 4 <br />Noviembre</div>
        <div class="table__th">Mes 5 <br />Diciembre</div>

        <div class="table__td" data-td="1">
          <span>
            <span class="highlight">Beneficios incluidos</span> + recarga de $150 <br />
            <span :style="highlightColor">Acumulas $200</span>
          </span>
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

        <div class="table__th">Mes 1 (compra) <br />Agosto</div>
        <div class="table__th">Mes 2 <br />Septiembre</div>
        <div class="table__th">Mes 3 <br />Octubre</div>
        <div class="table__th">Mes 4 <br />Noviembre</div>
        <div class="table__th">Mes 5 <br />Diciembre</div>
        <div class="table__th">Mes 6 <br />Enero</div>

        <div class="table__td" data-td="1">
          <span>
            <span class="highlight">Beneficios incluidos</span> + recarga de $100 <br />
            <span class="highlight" style="color: firebrick">No Acumulas $200</span>
          </span>
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
        <div class="table__title">
          <div>
            Rifa de Smartphone <br />
            <span style="font-size: 2.2rem">
              Ejemplo1: <span :style="highlightColor">Participas 2 veces</span>
            </span>
          </div>
        </div>

        <div class="table__th" data-th="1">Mes 1 (compra) <br />Agosto</div>
        <div class="table__th" data-th="2">Mes 2 <br />Septiembre</div>
        <div class="table__th" data-th="3">Mes 3 <br />Octubre</div>
        <div class="table__th" data-th="4">Mes 4 <br />Noviembre</div>

        <div class="table__td" data-td="1">
          <span>
            <span class="bold-text">Beneficios</span> + una Recarga de
            <span class="bold-text">$150</span> <br />
            <span :style="highlightColor">Acumulas $200</span>
          </span>
        </div>
        <div class="table__td" data-td="2">
          <span>Recargas o acumulas <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="3">
          <span>Recargas o acumulas <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="4">
          <span>Recargas o acumulas <span class="highlight">$200</span></span>
        </div>

        <div class="table__arrow table__arrow--success" data-arrow="1">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>Participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="2">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>Participas</span>
        </div>

        <div class="table__note table__note--success" data-note="1">
          La <span class="bold-text">Rifa</span> se celebra
          <span class="bold-text">el primer martes de Octubre</span>
        </div>
        <div class="table__note table__note--success" data-note="2">
          La <span class="bold-text">Rifa</span> se celebra
          <span class="bold-text">el primer martes de Diciembre</span>
        </div>
      </div>

      <!--Raffle table 2-->
      <div class="table table--raffle">
        <div class="table__title">
          <div>
            Rifa de Smartphone <br />
            <span style="font-size: 2.2rem">
              Ejemplo 2: <span style="color: var(--error-color)">Participas una vez</span>
            </span>
          </div>
        </div>

        <div class="table__th" data-th="1">Mes 1 (compra) <br />Agosto</div>
        <div class="table__th" data-th="2">Mes 2 <br />Septiembre</div>
        <div class="table__th" data-th="3">Mes 3 <br />Octubre</div>
        <div class="table__th" data-th="4">Mes 4 <br />Noviembre</div>

        <div class="table__td" data-td="1">
          <span>
            <span class="bold-text">Beneficios</span> + una Recarga de
            <span class="bold-text">$50</span> <br />
            <span class="bold-text" style="color: var(--error-color)">Acumulas $100</span>
          </span>
        </div>
        <div class="table__td" data-td="2">
          <span>Recargas o acumulas <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="3">
          <span>Recargas o acumulas <span class="highlight">$200</span></span>
        </div>
        <div class="table__td" data-td="4">
          <span>Recargas o acumulas <span class="highlight">$200</span></span>
        </div>

        <div class="table__arrow table__arrow--error" data-arrow="1">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>No participas</span>
        </div>
        <div class="table__arrow table__arrow--success" data-arrow="2">
          <img src="../assets/img/curved-arrow.svg" alt="Curved" />
          <span>Participas</span>
        </div>

        <div class="table__note table__note--error" data-note="1">
          No participas en la rifa de Octubre
        </div>
        <div class="table__note table__note--success" data-note="2">
          La <span class="bold-text">Rifa</span> se celebra
          <span class="bold-text">el primer martes de Diciembre</span>
        </div>
      </div>
    </div>

    <!--RESUME-->
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

    <!--FAQ BUTTON-->
    <div class="mechanics__button">
      <button class="btn btn--black btn--border-white" @click="$modal.show('faq')">
        Preguntas frecuentes
      </button>
    </div>

    <!--FAQ MODAL-->
    <modal
      :adaptive="true"
      :maxWidth="380"
      :resizable="true"
      :scrollable="true"
      classes="mechanics__faq"
      height="auto"
      name="faq"
    >
      <h2>Preguntas frecuentes:</h2>
      <div>
        <p class="question">
          ¿Qué pasa <span class="bold-text">si compré mi chip</span> en Septiembre y
          <span class="bold-text">
            acumulo los $200 en este mes y $200 en el mes de Octubre de 2021
          </span>
          ?
        </p>
        <p class="answer bold-text">
          Participas en la Rifa bimestral de un Smartphone el primer martes de Diciembre de 2021
        </p>
      </div>
      <div>
        <p class="question">
          ¿Qué pasa
          <span class="bold-text">
            sí continuo recargando mi número con $200 en Noviembre y $200 en Diciembre de 2021
          </span>
          ?
        </p>
        <p class="answer">
          La recarga del mes de Enero <span class="bold-text">¡va por nuestra cuenta!</span> y
          además
          <span class="bold-text">participas automáticamente en la rifa de Febrero de 2022</span>.
        </p>
      </div>
      <div>
        <p class="question">
          ¿Qué pasa <span class="bold-text">si compré mi chip en Agosto</span> pero
          <span class="bold-text" style="color: var(--error-color)">no pude acumular $200</span> en
          este mes
          <span class="bold-text" style="color: var(--error-color)">ni en el mes de Septiembre</span
          >, pero <span class="bold-text">recargo $200</span> en
          <span class="bold-text">Octubre</span> y <span class="bold-text">recargo $200</span> en
          <span class="bold-text">Noviembre de 2021</span>?
        </p>
        <p class="answer">
          Participas en la
          <span class="bold-text">Rifa Bimestral del primer martes de Diciembre de 2021</span>
        </p>
      </div>
      <div>
        <p class="question bold-text">
          ¿Cuánto tiempo dura la promoción a partir de la fecha en qué compré mi chip?
        </p>
        <p class="answer bold-text">4 meses</p>
      </div>
      <div>
        <p class="question">
          ¿<span class="bold-text">En qué fechas</span> se celebrará
          <span class="bold-text">la Rifa del Smartphone</span>?
        </p>
        <p class="answer bold-text">
          - Martes 5 de Octubre 2021 <br />
          - Martes 7 de Diciembre 2021 <br />
          - Martes 1 de Febrero (Sé confirmará fecha)
        </p>
      </div>
    </modal>
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
    @include finalNote;
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

  &__button {
    text-align: center;
    margin-top: 3rem;
  }

  &__faq {
    @include modalContent;

    h2 {
      font-family: 'Segoe UI Black', sans-serif;
      margin-bottom: 2rem;
    }

    & > div:not(:last-child) {
      margin-bottom: 2.5rem;
    }

    .question {
      margin-bottom: 1rem;
    }

    .answer {
      color: #6a3093;

      &::before {
        content: 'R= ';
      }
    }
  }
}
</style>
