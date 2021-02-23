<template>
<div>
  <section class= "wrapper">
    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/gCn5ssMYio0?autoplay=1" frameborder="0" allow="accelerometer; autoplay: 1; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
    <a id="yaya" href="#virtual-birthdaycake" @click="playMusic()" v-if="showButton" class="button">
      <h1>Click for another surprise!</h1>
    </a> 
  </section>
  <section id="virtual-birthdaycake">
    <virtual-birthdaycake />
  </section>
  <audio id="audio" ref="audio" loop="loop">
    <source src="~assets/music/ulang-tahun.mp3" type="audio/mpeg">
  </audio>
</div>


</template>

<script>


import virtualBirthdaycake from '../components/virtual-birthdaycake.vue'


export default {
  methods: {
		playMusic() {
		var player = document.getElementById('audio');
    player.currentTime = 0;  
    player.play()
		},
	},

  components: { virtualBirthdaycake },
  
  data(){
    return{
      showButton :false
    }
  },
    mounted() {

    // setTimeout
    // setInterval
    // clearInterval
    

    setTimeout(() => {
      this.showButton = true
    }, 130000)
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  display :flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items:center ;
}
  .video {
    display: flex;
    min-height: 100vh;
    width: 100%;  
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    z-index: 999;   
  }
  .button{
      display: flex;
      justify-content: center;
      align-items: center;
      height:50px;
      width: 150px;
      bottom: 6%;
      right: 3%;
      z-index: 999;
      position: absolute;
      // background : yellow;
      border-radius: 20px;
      background: rgba(15, 13, 140, 0.2);
      backdrop-filter: blur(50px);
      h1{
        font-size: 12px;
        color:white;
        font-family: 'Kalam', cursive;
        font-family: 'Patrick Hand', cursive;
        font-weight: bold;
      }
    }
.button:hover {
  cursor: pointer;
  background: darkcyan;
}   
</style>