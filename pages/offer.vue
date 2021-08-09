<template>
  <div class="offer">
    <div class="offer__heading">
      *Para participar... Recarga preferentemente tu número en la tienda en donde compraste el chip.
    </div>

    <div class="offer__img">
      <img
        :src="require(`~/assets/img/${chipName}.${chipName === 'at&t' ? 'png' : 'jpg'}`)"
        :alt="`${chipName} image`"
      />
    </div>

    <div class="offer__info">
      <div class="offer__benefit">
        <h2 :style="highlightColor">Recarga $200 y obtén:</h2>
        <ul v-if="chipName !== 'movistar'">
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>3GB para navegar</span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>1GB para Netflix o YouTube</span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>1GB para Spotify</span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>
              Redes sociales <span class="highlight" :style="highlightColor">ilimitadas</span>
            </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>
              Minutos y sms <span class="highlight" :style="highlightColor">ilimitados</span>
            </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span class="highlight" :style="highlightColor">Vigencia: 30 días</span>
          </li>
        </ul>
        <ul v-else>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>
              10,500 MB para navegar. <br />
              (300MB diarios)
            </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>
              Minutos, SMS y WhatsApp
              <span :style="highlightColor">ilimitados.</span>
            </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>3500 MB para Facebook</span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span> 500 MB para Vídeo </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span> 500 MB para Juegos </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span class="highlight" :style="highlightColor">Vigencia: 35 días</span>
          </li>
        </ul>
      </div>
      <div class="offer__benefit">
        <h2 :style="highlightColor">Ventajas al recargar $200 mensuales:</h2>
        <ul>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>Conserva tu número con tus familiares y amigos</span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>Mantente comunicado por 30 días</span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>
              Participa dos veces en la
              <span :style="highlightColor">rifa bimestral de un smartphone</span>
            </span>
          </li>
          <li>
            <i class="fas fa-chevron-right"></i>
            <span>
              ¡El quinto mes la recarga
              <span :style="highlightColor">va por nuestra cuenta</span>!
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="offer__button">
      <button class="btn btn--black btn--border-white" @click="$router.push({ name: 'reward' })">
        Premio
      </button>
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

.offer {
  @include containerStyle;

  &__heading {
    @include headingStyle;
  }

  &__img {
    flex: 0 0 50%;

    img {
      width: 100%;
    }
  }

  &__info {
    margin-top: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 50% 1fr;
    grid-template-areas: 'benefit1 benefit2';

    @include respond(sm) {
      grid-template-columns: initial;
      grid-template-areas:
        'benefit1'
        'benefit2';
    }
  }

  &__benefit {
    background-image: var(--black-gradient);
    border-radius: var(--border-radius);
    padding: 1.5rem 2rem;
    text-align: center;

    &:first-child {
      grid-area: benefit1;
    }

    &:last-child {
      grid-area: benefit2;
    }

    h2 {
      font-size: 2.5rem;
      font-family: 'Segoe UI Black', sans-serif;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      font-size: 2rem;

      li .fas {
        font-size: 1.6rem;
        margin-right: 0.8rem;
      }

      li .highlight {
      }

      li:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }
  }

  &__button {
    margin: 3rem 0 1rem 0;
    text-align: center;

    .btn {
      width: 15rem;
    }
  }
}
</style>
