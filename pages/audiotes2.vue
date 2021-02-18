<template>
<div id="app" @click="play()">
  
  {{ test }}
  
  <audio id="audio" loop autoplay src="../assets/music/areas.wav"></audio>
    
</div>
</template>

<script>

new Vue({
  el: '#app',
  data: {
    test: 'Hello World'
  },
  methods: {
    play() {
      console.log('playing')
      this.audio.play();
      
    }
  }, 
  created() {
    this.audio = document.getElementById('audio');
  }
})

</script>

<style>

</style>