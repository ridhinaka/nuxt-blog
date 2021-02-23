<template>
<div>
  <div class ="container">
    <div class="text">
      <transition name ="img">
        <h1>우리!</h1>
      </transition>
      <transition name="img">
        <div @click="goToSection('video2')" v-if="showButton" class="button">
          <h2>NEXT</h2>
        </div> 
      </transition>  
    </div>
    <div class="image">
      <div class="box-1">
        <transition name ="img">
          <img
          v-if="grid9"
          src="~/static/grid 2/2-1.jpg"
          class="img-1">
        </transition>
        <transition name ="img">
          <img
          v-if="grid10"
          src="~/static/grid 2/2-2.jpg"
          class="img-2">
        </transition>
      </div>
      <div class="box-2">
        <transition name="img">
          <img
          v-if="grid11"
          src="~/static/grid 2/2-3.jpg"
          class="img-3">
        </transition>
        <transition name ="img">
          <img
          v-if="grid12"
          src="~/static/grid 2/2-4.jpg"
          class="img-4">
        </transition>
      </div>
      <div class="box-3">
        <transition name ="img">
          <img
          v-if="grid13"
          src="~/static/grid 2/2-5.jpg"
          class="img-5">
        </transition>
        <transition name ="img">
          <img
          v-if="grid14"
          src="~/static/grid 2/2-6-1.jpg"
          class="img-6">
        </transition>
      </div>
      <div class="box-4">
        <transition name ="img">
          <img
          v-if="grid15"
          src="~/static/grid 2/2-7.jpg"
          class="img-7">
        </transition>
        <transition name="img">
          <img
          v-if="grid16"
          src="~/static/grid 2/2-8-2.jpg"
          class="img-8">
        </transition>
      </div>
    </div>
  </div>
    <section ref="video2">
      <video2  />
    </section>
</div>
  
</template>

<script>


import video2 from '../components/video2.vue'

export default {
  data(){
    return{
      grid9:false,
      grid10:false,
      grid11:false,
      grid12:false,
      grid13:false,
      grid14:false,
      grid15:false,
      grid16:false,
      showButton:false
    }
  },
  components: { video2 },

  mounted() {

    // setTimeout
    // setInterval
    // clearInterval

    setTimeout(() => {
      this.grid9 = true
    }, 2000)
    setTimeout(() => {
      this.grid10 = true
    }, 3000)
    setTimeout(() => {
      this.grid11 = true
    }, 4000)
    setTimeout(() => {
      this.grid12 = true
    }, 5000)
    setTimeout(() => {
      this.grid13 = true
    }, 6000)
    setTimeout(() => {
      this.grid14 = true
    }, 7000)
    setTimeout(() => {
      this.grid15 = true
    }, 8000)
    setTimeout(() => {
      this.grid16 = true
    }, 9000)
    setTimeout(() => {
      this.showButton = true
    }, 11000)
  },
  methods:{
    goToSection(section) {
    // this.initial=true
    this.$refs[section].scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>

.img-enter-active, .img-leave-active {
  transition: opacity 3s;
}
.img-enter, .img-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container{
  margin-top: 5px;
  display: flex;
  height: 100%;
  min-width: 100%;
  background: white;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  .text{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1{
      color:black;
      font-family: 'Patrick Hand', cursive;
    }
    .button{
      display: flex;
      height: 5%;
      width: 4%;
      // background: gray;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      margin-left: 10px;
      border: solid 2px black;
      h2{
        color: black;
        font-family: 'Patrick Hand', cursive; 
        font-size: 15px;
      }
    }
  }
  .image{
    display: flex;
    // min-height: 100vh;
    // min-width: 100%;
    // background:black;
    justify-content: center;
    // margin-top: 34px;
    // overflow: hidden;
    .box-1{
      display: flex;
      height: 85vh;
      width: 25%;
      // background: cyan;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // padding: 5px;
      .img-1{
        display:flex;
        height: 40%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
        // transform:scale(1.035);
        // margin-top:-25px;
      }
      .img-2{
        display:flex;
        height: 60%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
        // margin-top:15px;
        // margin-bottom: -15px;
        // transform:scale(1.01);
      }
    }
    .box-2{
      display: flex;
      height: 85vh;
      width: 25%;
      // background: chartreuse;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-3{
        display:flex;
        height: 50%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
      }
      .img-4{
        display:flex;
        height: 50%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
      }
    }
    .box-3{
      display: flex;
      height: 85vh;
      width: 25%;
      // background: red;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-5{
        display:flex;
        height: 65%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
        // overflow: visible;
      }
      .img-6{
        display:flex;
        height: 35%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
        // overflow: hidden;
      }
    }
    .box-4{
      display: flex;
      height: 85vh;
      width: 25%;
      // background: chocolate;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-7{
        display:flex;
        height: 50%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
        // overflow: visible;
      }
      .img-8{
        display:flex;
        height: 50%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid rgb(58,59,60) 3px;
        // overflow: hidden;
      }
    }
  }
}
.button:hover {
  cursor: pointer;
  background: darkorange;
  z-index: 1000000;
}
</style>