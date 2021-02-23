<template>
<div>
  <div @click="playMusic()" class="button">
    <h1>1</h1>
  </div>
  <div @click="stopMusic()" class="button2">
    <h1>2</h1>
  </div>
  <audio id="audio" ref="audio">
    <source src="~assets/music/opendoor.mp3" type="audio/mpeg">
  </audio>
</div>

</template>

<script>
export default {
  methods: {
		playMusic() {
		var player = document.getElementById('audio');
    player.currentTime = 0;  
    player.play()
		},
    stopMusic(){
      var player2 = document.getElementById('audio');
      player2.currentTime = 125;
      player2.play()
    }
	},
}
</script>

<style lang="scss" scoped>
.button{
  display: flex;
  background: blue;
  height: 20%;
  width: 30%;
}
.button2{
  display: flex;
  background: gray;
  height: 20%;
  width: 30%;
}

</style>