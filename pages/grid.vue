<template>
<div class="big-box">
  <div class="web">
    <div class="text">
      <h1>갤러리</h1>
      <transition name="img">
        <div  @click="goToSection('grid2')"  v-if="showButton" class="next-page">
          <h3>Next!</h3>
        </div>
      </transition> 
    </div>
      <div class="background">
        <div class="photo-grid1">
          <transition name="img">
            <img
            src="~/static/grid/1.jpg" v-if="grid1"
            class="jpg-5">
          </transition> 
          <transition name="img">        
            <img
            src="~/static/grid/5.jpg" v-if="grid5"
            class="jpg-5">
          </transition> 
        </div>
      <div class="photo-grid2">
        <transition name="img">
          <img
          src='~/static/grid/2.jpg' v-if="grid2"
          class="jpg-2">
        </transition> 
        <transition name="img">
          <img
          src="~/static/grid/6.jpg" v-if="grid6"
          class="jpg-6">
        </transition> 
      </div>
      <div class="photo-grid3">
        <transition name="img">
          <img
          src='~/static/grid/3-5.jpg' v-if="grid3"
          class="jpg-3">
        </transition> 
        <transition name="img">
          <img
          src="~/static/grid/7.jpg" v-if="grid7"
          class="jpg-7">
        </transition> 
      </div>
      <div class="photo-grid4">
        <transition name="img">
          <img
          src='~/static/grid/4.jpg' v-if="grid4"
          class="jpg-4">
        </transition> 
        <transition name="img">
          <img
          src="~/static/grid/8.jpg" v-if="grid8"
          class="jpg-8">
        </transition> 
      </div>
    </div>
  </div>
  <section ref="grid2">
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
  </section>
    <section ref="video2">
      <video2  />
    </section>
    <audio id="audio" ref="audio" loop="loop" autoplay="autoplay">
      <source src="~assets/music/opendoor.mp3" type="audio/mpeg">
    </audio>
</div>  

</template>

<script>
import video2 from '../components/video2.vue'
import grid2 from '../components/grid2.vue'

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
components: { grid2,video2 },

  methods:{
    goToSection(section) {
      // this.initial=true
    
    
    this.$refs[section].scrollIntoView({ behavior: 'smooth' }),
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
    mute() {
      var player2 = document.getElementById('audio');
      player2.muted = true
    },
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
.big-box{
  display: flex;
  height: 100%;
  min-width: 100%;
  background: white;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  .mobile{
    // display: flex;
    width: 100%;
    height: 100vh;
    background: black;
    position: relative;
    h2{
      font-family: 'Patrick Hand', cursive;
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
        font-family: 'Patrick Hand', cursive;
      }
      .next-page{
        display: flex;
        height: 5%;
        width: 4%;
        // background: gray;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        margin-left: 10px;
        border: solid 2px black;
        h3{
          color: black;
          font-family: 'Patrick Hand', cursive; 
          font-size: 15px; 
        }
      }
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
.button:hover {
  cursor: pointer;
  background: darkorange;
  z-index: 1000000;
}
</style>