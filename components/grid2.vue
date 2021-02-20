<template>
  <div class ="container">
    <div class="text">
      <transition name ="img">
        <h1>우리!</h1>
      </transition>
      <transition name="img">
        <div @click="doSomething" v-if="showButton" class="button">
          <h2>NEXT</h2>
        </div> 
      </transition>  
    </div>
    <div class="image">
      <div class="box-1">
        <transition name ="img">
          <img
          v-if="grid1"
          src="~/static/grid 2/2-1.jpg"
          class="img-1">
        </transition>
        <transition name ="img">
          <img
          v-if="grid2"
          src="~/static/grid 2/2-2.jpg"
          class="img-2">
        </transition>
      </div>
      <div class="box-2">
        <transition name="img">
          <img
          v-if="grid3"
          src="~/static/grid 2/2-3.jpg"
          class="img-3">
        </transition>
        <transition name ="img">
          <img
          v-if="grid4"
          src="~/static/grid 2/2-4.jpg"
          class="img-4">
        </transition>
      </div>
      <div class="box-3">
        <transition name ="img">
          <img
          v-if="grid5"
          src="~/static/grid 2/2-5.jpg"
          class="img-5">
        </transition>
        <transition name ="img">
          <img
          v-if="grid6"
          src="~/static/grid 2/2-6-1.jpg"
          class="img-6">
        </transition>
      </div>
      <div class="box-4">
        <transition name ="img">
          <img
          v-if="grid7"
          src="~/static/grid 2/2-7.jpg"
          class="img-7">
        </transition>
        <transition name="img">
          <img
          v-if="grid8"
          src="~/static/grid 2/2-8-2.jpg"
          class="img-8">
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      grid1:false,
      grid2:false,
      grid3:false,
      grid4:false,
      grid5:false,
      grid6:false,
      grid7:false,
      grid8:false,
      showButton:false
    }
  },

  methods: {
    doSomething() {
      this.$router.push({path :'/end'})
    }
  },
  mounted() {

    // setTimeout
    // setInterval
    // clearInterval

    setTimeout(() => {
      this.grid1 = true
    }, 2000)
    setTimeout(() => {
      this.grid2 = true
    }, 3000)
    setTimeout(() => {
      this.grid3 = true
    }, 4000)
    setTimeout(() => {
      this.grid4 = true
    }, 5000)
    setTimeout(() => {
      this.grid5 = true
    }, 6000)
    setTimeout(() => {
      this.grid6 = true
    }, 7000)
    setTimeout(() => {
      this.grid7 = true
    }, 8000)
    setTimeout(() => {
      this.grid8 = true
    }, 9000)
    setTimeout(() => {
      this.showButton = true
    }, 11000)
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
  margin-top: 20px;
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
    // height: 100vh;
    min-width: 100%;
    // background:black;
    justify-content: center;
    align-items: center;
    // margin-top: 34px;
    overflow: hidden;
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