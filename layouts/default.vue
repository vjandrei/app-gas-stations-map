<template>
  <div id="app">
    <nav>
      <div id="menuButton">Valikko <i class="icon-location"></i></div>
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
          <a href="" class="active"><i class="icon-location"></i> Koti</a>
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
        <small>Copyright © 2021 Kaasulle.app. <br />All Rights Reserved.</small>
      </footer>
    </nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="postcss" scoped>
#app {
  @apply min-h-full flex flex-row;
}
#menuButton {
  @apply text-white bg-primary_default font-semibold font-display tracking-wider cursor-pointer z-10 rounded-r-lg;
  position: absolute;
  top: -20px;
  right: 16px;
  height: 48px;
  width: 100px;
  text-align: center;
  line-height: 48px;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%),
    -5px 4px 6px -2px rgb(0 0 0 / 5%);
  @screen lg {
    top: 51px;
    right: -100px;
  }
}
nav {
  @apply relative flex flex-col w-1/6 bg-primary_default;
  transition: transform 100ms cubic-bezier(0.35, 0.69, 0.48, 0.99);
  transform: translate(-100%, 0%);
  #header {
    @apply bg-primary_dark px-8 p-4 text-center;
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
  @apply w-5/6 min-h-full grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>
