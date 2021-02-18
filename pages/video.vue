<template>
<div>

  <section class= "wrapper">
    <iframe class= "video" width="560" height="315" src="https://www.youtube.com/embed/bNvJA0eWXAA?autoplay=1" frameborder="0" allow="accelerometer; autoplay: 1 ; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <a id="yaya" href="#virtual-birthdaycake" @click="play" v-smooth-scroll v-if="showButton" class="button">
      <h1>To another surprise!</h1>
    </a> 
  </section>
  <section id="virtual-birthdaycake">
    <virtual-birthdaycake />
  </section>
</div>


</template>

<script>

import jQuery from 'jquery'
import useSound from 'vue-use-sound'
import buttonSfx from '../assets/music/ulang-tahun.mp3'
import virtualBirthdaycake from '../components/virtual-birthdaycake.vue'


export default {
  mounted :jQuery(function(){
        jQuery('#yaya');
      }),
  setup() {
    const [play] = useSound(buttonSfx)

    return {
      play,
    }
  },

  components: { virtualBirthdaycake },
  
  data(){
    return{
      showButton :false
    }
  },
  // methods: {
  //   doSomething() {
  //     this.$router.push({path :'/virtual-birthdaycake'})
  //   }
  // },
    mounted() {

    // setTimeout
    // setInterval
    // clearInterval

    setTimeout(() => {
      this.showButton = true
    }, 1000)
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

      }
    }
 .button:hover {
  cursor: pointer;
  background: darkcyan;
}   
</style>