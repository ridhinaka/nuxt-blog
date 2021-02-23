<template>
<div>
  <div class="container">
    <div class="background">
      <img
      src="~static/img/page4.webp"
      class="background-present">
      <div class= "main-page">
        <h1>Choose your present!</h1>
        <div class="body">
          <transition name="img">
              <a id="#yaya" @click="goToSection('okay-page')" target="_blank" href ="https://wa.me/6282110781073?text=Please buy me this shoes :)" v-if="showButton" class="left-body">
                <h2 class="text">Shirt</h2>
                <img
                src="~/static/img/t-shirt.png"
                class="watch">
                <img
                src="~/static/visval/stiker1.webp"
                class="sticker">
              </a>    
            </transition>
          <transition name="img">
            <a id="#yaya1" @click="goToSection('okay-page')" target="_blank" href ="https://wa.me/6282110781073?text=Please buy me this watch :)" v-if="showButton2"  class="center">
              <h2 class="text">Shoes</h2>
              <img
              src="~static/img/shoes.png"
              class="shoes">
              <img
              src="~/static/visval/stiker2.webp"
              class="sticker">
            </a>
          </transition> 
              <transition name="img">
                <a id="#yaya2" @click="goToSection('okay-page')" target="_blank" href="https://wa.me/6282110781073?text=Please buy me this HnM :)"  v-if="showButton3"  class="right-body">
                  <h2 class="text">Wallet</h2>
                  <img
                  src="~/static/img/wallet.png"
                  class="HM">
                  <img
                  src="~static/visval/stiker3.webp"
                  class="sticker">
                </a>
              </transition>  
        </div>
      </div>
    </div>
  </div>
  <section ref="okay-page">
    <okay-page  />
  </section>
  <!-- <section ref="watch">
    <okay-page  />
  </section> -->
</div>
  
</template>

<script>
import okayPage from '../components/okay-page.vue'

export default {
  data(){
    return{
      showButton : false,
      showButton2 :false,
      showButton3 :false,
      // initial : false
    }
  },
  methods:{
    goToSection(section) {
      // this.initial=true
      this.$refs[section].scrollIntoView({ behavior: 'smooth' })
    }
  },
  components: { okayPage},
    mounted(){
      setTimeout(() => {
        this.showButton = true
      }, 1000)
      setTimeout(() => {
        this.showButton2 = true
      }, 2000)
      setTimeout(()=> {
        this.showButton3 = true
      })
    }

}
</script>

<style lang="scss" scoped>


.img-enter-active, .img-leave-active {
  transition: opacity .5s;
}
.img-enter, .img-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container{
  display: flex;
  height: 100vh;
  min-width: 100%;
  .background{
    display: flex;
    height: 100vh;
    min-width: 100%;
    position: relative;
    .background-present{
      display: flex;
      min-width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
    .main-page{
      display: flex;
      height: 80vh;
      width: 100%;
      // background: red;
      z-index: 9999;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-top: 80px;
      h1{
        font-family: "beauty";
        color: black;
        margin-top: -600px;
        font-size: 60px;
      }
      .body{
        display: flex;
        flex-direction: row;
        // background: blue;
        height: 65vh;
        width: 100%;
        position: absolute;
        align-items: center;
        justify-content: center;
        margin-top: 95px;
        // margin: 3px;
        .left-body{
          display:flex;
          height: 65vh;
          width: 20%;
          // background: rgba(#FFFFFF,0.2);
          margin: 20px;
          border-radius: 20px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          backdrop-filter: blur(50px);
          border: solid 1.5px black;
          .text{
            font-family: 'beauty';
            color: black;
            font-size: 40px;
            margin-top:-30px;
            // background: blue;
          }
          .watch{
            display: flex;
            object-fit: contain;
            height: 60%;
            width: 80% ;
          }
          .sticker{
            display: flex;
            height: 80px;
            width: 80px;
            object-fit: contain;
          }
        }
        .center{
          display:flex;
          height: 65vh;
          width: 20%;
          // background: rgba(#FFFFFF,0.2);
          margin: 20px;
          border-radius: 20px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          backdrop-filter: blur(30px);
          border: solid 1.5px black;
          .text{
            font-family: 'beauty';
            color: black;
            font-size: 40px;
            margin-top:-25px;
            // background: blue;
          }
          .shoes{
            display: flex;
            height: 50%;
            width: 75%;
            // padding-top: 20px;
            // margin-top: 60px;
            object-fit: contain;
            margin-top: 35px;
          }
          .sticker{
            display: flex;
            height: 80px;
            width: 80px;
            object-fit: contain;
            margin-top: 30px;
          }
        }
        .right-body{
          display:flex;
          height: 65vh;
          width: 20%;
          // background: rgba(#FFFFFF,0.2);
          margin: 20px;
          border-radius: 20px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          backdrop-filter: blur(30px);
          border: solid 1.5px black;
          .text{
            font-family: 'beauty';
            color: black;
            font-size: 40px;
            margin-top:-30px;
            // background: blue;
          }
          .HM{
            display: flex;
            width: 70%;
            height: 40%;
            border-radius: 37px;
            // margin-top: 60px;
            object-fit: contain;
            margin-top: 40px;
          }
          .sticker{
            display: flex;
            height: 80px;
            width: 80px;
            object-fit: contain;
            margin-top: 70px;
          }
        }      
      }
    }
  }
}
.left-body:hover {
    cursor: pointer;
    background: rgba(200, 221, 4, 0.9);
    // z-index: 1000000;
  }

.right-body:hover {
    cursor: pointer;
    background: rgba(73, 209, 4, 0.9);
    // z-index: 1000000;
  }

.center:hover {
    cursor: pointer;
    background: rgba(4, 96, 216, 0.9);
    // z-index: 1000000;
  }


</style>