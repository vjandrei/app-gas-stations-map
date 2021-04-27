<template>
  <nav>
    <button id="openMenu" class="menuButton" @click="navigationToggle()">
      Valikko
    </button>
    <transition name="nav">
      <div id="navContent" v-if="show">
        <header id="header">
          <img
            id="logo"
            src="~/assets/img/kaasulla-logo-small-white.svg"
            width="50%"
            height="24px"
            alt=""
          />
        </header>
        <ul id="primaryLinks">
          <li>
            <NuxtLink to="/"
              ><i class="icon-home"></i> {{ $t('pages.home') }}</NuxtLink
            >
          </li>
          <li>
            <nuxt-link :to="localePath('about')"
              ><i class="icon-info"></i> {{ $t('pages.about') }}</nuxt-link
            >
          </li>
        </ul>
        <ul id="secondaryLinks">
          <li>
            <NuxtLink to="/contact"> Yhteydenotto</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Tietosuoja</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Käyttöehdot</NuxtLink>
          </li>
        </ul>
        <footer>
          <small>2021 Kaasulle.app</small>
        </footer>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    navigationToggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="postcss" scoped>
#openMenu {
  top: 56px;
  left: 0;
  //left: 256px;
}
#closeMenu {
  @apply z-20;
  top: 56px;
  right: -80px;
}

.menuButton {
  @apply h-10 px-4 align-middle rounded-r-lg fill-current bg-primary_dark text-white;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  //box-shadow: 10px 10px 15px -3px rgb(0 0 0 / 10%), 0px 4px 6px -2px rgb(0 0 0 / 5%);
}

.nav-enter-active,
.nav-leave-active {
  transform: translate(-100%, 0%);
}

.nav-leave,
.nav-enter {
}

#navContent {
  @apply fixed w-3/5 min-h-full flex flex-col bg-primary_default z-10;
  @screen lg {
    @apply w-64;
  }
  transition: transform 100ms cubic-bezier(0.35, 0.69, 0.48, 0.99);
  #header {
    @apply flex bg-primary_dark px-8 h-12 text-center;
    img {
      @apply w-24 m-auto;
    }
  }
  #primaryLinks,
  #secondaryLinks {
    @apply m-4 mb-0 text-white font-medium border-b border-primary_dark pb-4;
    li {
      @apply p-2;
      a {
        @apply rounded block p-2;
        &.active {
          @apply w-full bg-primary_light;
        }
        &:hover {
          @apply bg-primary_light;
        }
        i {
          @apply mr-1;
        }
      }
    }
  }
  #secondaryLinks {
    @apply font-normal;
    li {
      a {
        @apply rounded block p-2;
      }
    }
  }
  footer {
    @apply text-white bg-primary_dark p-2 leading-tight text-sm text-center;
    margin-top: auto;
  }
}
</style>
