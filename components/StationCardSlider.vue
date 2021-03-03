<template>
  <div
    id="slider"
    class="slider"
    @mousemove="mouseMoving"
    @mouseleave="stopDrag"
    @touchmove="touchmove"
  >
    <div
      class="slider-cards"
      :style="`transform: translate3d(${cardsX}px,0,0)`"
    >
      <div
        @mousedown="startDrag"
        @mouseup="stopDrag"
        @touchstart="touchstart"
        @touchend="touchend"
        v-for="(station, index) in stations"
        :key="index"
        class="slider-card"
      >
        <h1>{{ station.name }}</h1>
      </div>
    </div>
    <div class="slider-info">
      <h1>{{ showCardDetails.address }}</h1>
      <p>{{ showCardDetails.products }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stations: {
      type: Array,
    },
  },
  data() {
    return {
      selectedIndex: 0,
      dragging: false,
      initialMouseX: 0,
      initialCardsX: 0,
      initialCardWidth: 0,
      cardsX: 0,
      slides: [
        {
          title: 'Ready Player One',
          description:
            'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
          image:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        },
        {
          title: 'Avengers: Infinity War',
          description:
            'As the Avengers and their allies have continued to protect the world from threats too large for any...',
          image:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        },
        {
          title: 'Coco',
          description:
            'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician...',
          image:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
        },
      ],
    }
  },
  emits: ['my-event'],
  computed: {
    showCardDetails() {
      return this.$store.state.stations.data[this.selectedIndex]
    },
    selectedSlide() {
      return this.slides[this.selectedIndex]
    },
  },
  created() {},
  mounted() {},
  methods: {
    startDrag(e) {
      this.dragging = true
      this.initialMouseX = e.pageX
      this.initialCardsX = this.cardsX
      this.initialCardWidth = e.srcElement.clientWidth
    },
    mouseMoving(e) {
      if (this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX
        const targetX = this.initialCardsX + dragAmount
        this.cardsX = targetX
      }
    },
    stopDrag() {
      this.dragging = false
      const cardWidth = this.initialCardWidth
      const nearestSlide = -Math.round(this.cardsX / cardWidth)
      this.selectedIndex = Math.min(
        Math.max(0, nearestSlide),
        this.stations.length - 1
      )
      this.cardsX = -this.selectedIndex * cardWidth
    },
    touchstart(e) {
      this.dragging = true
      e.changedTouches.forEach((touche, index) => {
        this.initialTouchX = touche.pageX
        this.initialCardsX = this.cardsX
      })
      this.initialCardWidth = e.srcElement.clientWidth
    },
    touchmove(e) {
      if (this.dragging) {
        e.changedTouches.forEach((touche, index) => {
          const dragAmount = touche.pageX - this.initialTouchX
          const targetX = this.initialCardsX + dragAmount
          this.cardsX = targetX
        })
      }
    },
    touchend(e) {
      this.dragging = false
      const cardWidth = this.initialCardWidth
      const nearestSlide = -Math.round(this.cardsX / cardWidth)
      this.selectedIndex = Math.min(
        Math.max(0, nearestSlide),
        this.stations.length - 1
      )
      this.cardsX = -this.selectedIndex * cardWidth
    },
    showMarker(station) {
      this.$nuxt.$emit('show-station-marker', station)
    },
  },
}
</script>

<style lang="postcss" scoped>
* {
  box-sizing: border-box;
}
.slider {
  overflow: hidden;
  background-color: #b6b6b6;
  width: 100%;
  height: auto;
}

.slider-cards {
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
}

.slider-card {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  flex-shrink: 0;
}
.slider-info {
  position: relative;
  overflow: hidden;
  background-color: red;
  padding: 10px;
  height: auto;
}
</style>
