<template>
  <div id="app">
    <button id="openMenu" class="menuButton" @click="navigationToggle()">
      Valikko
    </button>
    <transition name="nav">
      <nav v-if="show">
        <button id="closeMenu" class="menuButton" @click="navigationToggle()">
          Sulje
        </button>
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
            <NuxtLink to="/"><i class="icon-location"></i> Koti</NuxtLink>
          </li>
          <li>
            <a href=""><i class="icon-location"></i> Tietoa sivusta</a>
          </li>
          <li>
            <a href=""><i class="icon-location"></i> Kaasuautoilu blogi</a>
          </li>
        </ul>
        <ul id="secondaryLinks">
          <li>
            <a href="">Yhteydenotto</a>
          </li>
          <li>
            <a href="">Tietosuoja</a>
          </li>
          <li>
            <a href="">Käyttöehdot</a>
          </li>
        </ul>
        <footer>
          <small
            >Copyright © 2021 Kaasulle.app. <br />All Rights Reserved.</small
          >
        </footer>
      </nav>
    </transition>
    <main>
      <nuxt />
    </main>
  </div>
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
#app {
  @apply relative min-h-full;
}

#openMenu {
  top: 48px;
  left: 0px;
}
#closeMenu {
  @apply z-20;
  top: 48px;
  right: -80px;
}

.menuButton {
  @apply text-white bg-primary_default font-semibold font-display tracking-wider cursor-pointer z-10 rounded-r-lg;
  position: absolute;
  height: 48px;
  width: 80px;
  text-align: center;
  line-height: 48px;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 10px 10px 15px -3px rgb(0 0 0 / 10%),
    0px 4px 6px -2px rgb(0 0 0 / 5%);
}

.nav-enter-active,
.nav-leave-active {
  transform: translate(-100%, 0%);
}

.nav-leave,
.nav-enter {
}

nav {
  @apply fixed w-3/5 min-h-full flex flex-col bg-primary_default z-10;
  @screen lg {
    @apply w-64;
  }
  transition: transform 100ms cubic-bezier(0.35, 0.69, 0.48, 0.99);
  #header {
    @apply flex bg-primary_dark px-8 h-12 text-center;
  }
  #primaryLinks,
  #secondaryLinks {
    @apply m-4 mb-0 text-white border-b border-primary_dark pb-4;
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
main {
  @apply min-h-full grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>
