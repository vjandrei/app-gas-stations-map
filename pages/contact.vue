<template>
  <div id="contactScreen">
    <div class="flex flex-wrap justify-between md:px-6 md:pt-6">
      <!-- buttons theme switch  -->
      <div class="w-1/2 lg:w-5/12">
        <nav class="flex flex-wrap mb-4">
          <p
            href="#"
            class="w-auto py-2 pl-3 bg-white rounded-l-lg tab-theme active"
          >
            <span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current"
              >Yhtendenotto
            </span>
          </p>
        </nav>
      </div>
      <!-- buttons size switch  -->
      <div class="w-1/2 lg:w-5/12">
        <nav class="flex flex-wrap md:justify-end mb-4">
          <a
            href="#"
            class="w-auto py-2 pl-3 bg-white rounded-l-lg tab-theme active"
            ><span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current text-white bg-primary_dark"
              >FI
            </span></a
          ><a
            href="#"
            class="w-auto py-2 pl-1 pr-3 bg-white rounded-r-lg tab-theme text-waterloo-900"
            ><span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current"
              >EN</span
            ></a
          >
        </nav>
      </div>
    </div>
    <div class="flex flex-wrap justify-between px-6 pt-6">
      <section class="max-w-screen-md mx-auto">
        <h1
          class="mb-4 text-3xl lg:text-5xl lg:mb-4 font-extrabold my-8 leading-tight"
        >
          Ota yhteyttä
        </h1>
        <h2
          class="text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11"
        >
          Voi kysyä mitä vain palveluun liittyen alla olevalla lomakkeella.
        </h2>
      </section>
      <section class="max-w-screen-md mx-auto">
        <p class="mb-6 text-xl font-light">
          Otamme sinuun mahdollisimman pian yhteyttä.
        </p>
      </section>
      <section class="max-w-screen-md mx-auto mb-16">
        <form
          class="mt-8"
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <label class="block mb-4">
            <span class="font-display font-semibold text-primary">
              Otsikko
            </span>
            <input
              aria-label="Nimesi"
              name="name"
              type="text"
              required
              class="form-input mt-1 block w-full"
              placeholder="Matti Meikäläinen"
            />
          </label>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => {
          this.formData = ''
          this.submitText = this.$i18n.t('text.formThanks')
        })
        .catch((error) => alert(error))
    },
  },
}
</script>

<style lang="postcss" scoped>
#contactScreen {
  @apply bg-local bg-right-bottom bg-no-repeat bg-auto h-full text-white px-8 pt-24 py-4;
  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    @apply absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-right-bottom;
    @screen lg {
      @apply bg-right-bottom;
    }
    //filter: grayscale(60%);
    background-image: url('~assets/img/background_shape.svg');
  }
  @apply container mx-auto mb-20 mt-20;
  @screen lg {
    @apply mt-10 mb-20;
  }
  @apply w-full h-full font-display text-secondary;
  h1 {
    @apply text-xl font-extrabold my-8 leading-tight;
    @screen md {
      @apply text-5xl leading-snug;
    }
  }
  h2 {
    @apply text-xl font-normal my-8 leading-normal;
    @screen md {
      @apply leading-relaxed;
    }
  }
  h3 {
    @apply mb-4 text-3xl font-bold leading-tight;
    @screen md {
      @apply text-4xl mb-8;
    }
  }
  h4 {
    @apply text-lg font-bold;
  }
}
</style>
