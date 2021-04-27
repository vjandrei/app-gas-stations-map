<template>
  <div class="flex flex-wrap justify-between">
    <section class="max-w-screen-md mx-auto">
      <h1
        class="mb-4 text-3xl lg:text-5xl lg:mb-4 font-extrabold my-8 leading-tight"
      >
        Kaasulla.app
      </h1>
      <h2 class="text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
        Kaasuautoilun puolesta kehitetty sovellus joka helpottaa
        kaasutankkausasemien löytämistä.
      </h2>
    </section>
    <section class="max-w-screen-md mx-auto">
      <p class="mb-6 text-xl font-light">
        Sovelluksen suunnitteli sekä kehitti Andreas Koutsoukos jonka idea oli
        aluperin tehdä vain prototyyppi omiin tarpeisiin. Hän kuitenkin halusi
        olla edistämässä yleisesti kaasuautoilun helpoutta ja siksi hän kehitti
        sovelluksesta kaikille kaasuautoilijoille soveltuvan apuvälineen.
      </p>
    </section>
    <section class="max-w-screen-md mx-auto mb-16">
      <img
        class="block"
        src="~/assets/img//app-in-devices.svg"
        alt="App View"
        width="100%"
        height="240px"
      />
    </section>
    <section class="max-w-screen-md mx-auto">
      <h3>Kysymyksiä joihin vastauksia.</h3>
      <div>
        <article class="my-10">
          <h4 class="mb-4 text-2xl font-medium">Maksaako sovellus mitään?</h4>
          <p>Ei, sovellus on ilmainen käyttäjille.</p>
        </article>
        <article class="my-10">
          <h4 class="mb-4 text-2xl font-medium">
            Tarviiko sovellusta jotenkin asentaa?
          </h4>
          <p>
            Ei, sovellus ei vaadi asemtamista. Sovellus on niinsanottu
            progressiivinen sovellus joten se toimii moderneilla selaimilla.
            Voit kuitenkin asentaa sovelluksen Android puhelimeesi helposti.
            Katso video jossa näytetään kuinka helposti sovelluksen lisääminen
            tapahtuu älypuhelimeen.
          </p>
        </article>
        <article class="my-10">
          <h4 class="mb-4 text-2xl font-medium">
            Millaista dataa sovellus käyttää?
          </h4>
          <p>
            Palvelu hyödyntää puhelimen sijaintitietoa ja näyttää lähistöllä
            olevat kaasutankkausasemat suoraan tien päällä.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'pages',
  nuxtI18n: {
    paths: {
      fi: '/tietoa',
      en: '/about',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="postcss" scoped></style>
