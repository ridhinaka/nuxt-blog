<template>
<div class="container">
  <div class="web">
    <div class="text">
      <h1>갤러리</h1>
      <transition name="img">
        <div @click="doSomething" v-if="showButton" class="next-page">
          <h3>Next!</h3>
        </div>
      </transition>     
    </div>
      <div class="background">
        <div class="photo-grid1">
          <transition class="img">
          <img
          src="~/static/grid/1.jpg" v-if="grid1"
          class="jpg-5">
          </transition>         
          <img
          src="~/static/grid/5.jpg" v-if="grid5"
          class="jpg-5">
        </div>
      <div class="photo-grid2">
        <img
        src='~/static/grid/2.jpg' v-if="grid2"
        class="jpg-2">
        <img
        src="~/static/grid/6.jpg" v-if="grid6"
        class="jpg-6">
      </div>
      <div class="photo-grid3">
        <img
        src='~/static/grid/3-5.jpg' v-if="grid3"
        class="jpg-3">
        <img
        src="~/static/grid/7.jpg" v-if="grid7"
        class="jpg-7">
      </div>
      <div class="photo-grid4">
        <img
        src='~/static/grid/4.jpg' v-if="grid4"
        class="jpg-4">
        <img
        src="~/static/grid/8.jpg" v-if="grid8"
        class="jpg-8">
      </div>
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
      this.grid4 = true
    }, 6000)
    setTimeout(() => {
      this.grid5 = true
    }, 7000)
    setTimeout(() => {
      this.grid6 = true
    }, 8000)
    setTimeout(() => {
      this.grid7 = true
    }, 9000)
    setTimeout(() => {
      this.grid7 = true
    }, 10000)
    setTimeout(() => {
      this.grid8 = true
    }, 11000)
    setTimeout(() => {
      this.showButton = true
    }, 12000)
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .web {
    background-color: lightblue;
    display: none !important;
  }
  .mobile{
    display: block !important;
  }
}

.web {
    display: block;
  }
  .mobile{
    display: none;
  }
.img-enter-active, .img-leave-active {
  transition: opacity 3s;
}
.img-enter, .img-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container{
  display: flex;
  height: 100%;
  min-width: 100%;
  background: white;
  // flex-direction: row;
  // overflow: hidden;
  justify-content: center;
  align-items: center;
  .mobile{
    // display: flex;
    width: 100%;
    height: 100vh;
    background: black;
    position: relative;
    h2{
      font-family: "altero regular";
      color: white;
      font-size: 25px;
      margin:0;
      position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    }
  }
  .text{
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      h1{
        color:black;
      }
      .next-page{
        display: flex;
        height: 15%;
        width: 5%;
        background: black;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        h3{
          color: white;
          font-family: "altero regular";
          
        }
      }
    }
  .background{
    display: flex;
    // height: 100vh;
    min-width: 100%;
    // background:black;
    justify-content: center;
    align-items: center;
    // margin-top: 34px;
    overflow: hidden;
    // flex-direction: row;
    .photo-grid1{
      display: flex;
      height: 85vh;
      width: 15%;
      // background: cyan;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // padding: 5px;
      .jpg-1{
        display:flex;
        height: 40%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
        // transform:scale(1.035);
        // margin-top:-25px;
      }
      .jpg-5{
        display:flex;
        height: 60%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
        // margin-top:15px;
        // margin-bottom: -15px;
        // transform:scale(1.01);
      }
    }
    .photo-grid2{
      display: flex;
      height: 85vh;
      width: 40%;
      // background: chartreuse;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .jpg-2{
        display:flex;
        height: 60%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
      }
      .jpg-6{
        display:flex;
        height: 40%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
      }
    }
    .photo-grid3{
      display: flex;
      height: 85vh;
      width: 30%;
      // background: red;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .jpg-3{
        display:flex;
        height: 45%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
        // overflow: visible;
      }
      .jpg-7{
        display:flex;
        height: 55%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
        // overflow: hidden;
      }
    }
    .photo-grid4{
      display: flex;
      height: 85vh;
      width: 15%;
      // background: chocolate;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .jpg-4{
        display:flex;
        height: 45%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
        // overflow: visible;
      }
      .jpg-8{
        display:flex;
        height: 55%;
        width: 100%;
        object-fit: cover;
        // padding:5px;
        border: solid black 3px;
        // overflow: hidden;
      }
    }
  }
}

.next-page:hover {
  cursor: pointer;
  background: darkorange;
  z-index: 1000000;
}
</style>