<template>
  <div class="container">
    <div class="background">
      <img
      src="~static/img/background_home.jpg"
      class="background-index3">
      <div class= "wrapper">
        <h1>Virtual Birthday Cake</h1>
        <h2>Make a wish!</h2>
        <img
        src="~static/img/unnamed.png"
        class="birthday-cake">
        <div @click="doSomething"  v-if="showButton" class="button">
          <h3>Click me if you already make a wish!</h3>
        </div>
      </div>
    </div>
    <audio id="audio" ref="audio" loop="loop">
    <source src="~assets/music/ulang-tahun.mp3" type="audio/mpeg">
  </audio>
  </div>
</template>

<script>


export default {

  data (){
    return{
      showButton : true
    }
  },
methods: {
    doSomething() {
      this.$router.push({path :'/present-page'})
    }
  },
  
}
</script>

<style lang="scss" scoped>

.container{
  display: flex;
  min-width: 100%;
  height: 100vh;
  .background{
    display: flex;
    min-width: 100%;
    height: 100vh;
    position:relative;
    justify-content: center;
    align-items: center ;
    .background-index3{
      display: flex;
      min-width: 100%;
      height: 100%;
      position: absolute;
    }
    .wrapper{
      display: flex;
      min-width: 50%;
      height: 50%;
      // background: darkorange;
      justify-content: center;
      align-items: center ;
      flex-direction: column;
      z-index: 9999;
      margin-top: -80px;
      h1{
        font-family: "beauty";
        letter-spacing: 4px;
      }
      h2{
        font-family: "beauty";
        font-size: 40px;
        letter-spacing: 3px;
      }
      .birthday-cake{
        display: flex;
        height: 40vh;
        margin-top: 30px;
        margin-bottom: 40px;
        // widows: ;
      }
      .button{
        display: flex;
        // background: black;
        border-radius: 20px;
        min-height: 5vh;
        width: 34vh ;
        justify-content: center;
        align-items:center ;
        z-index: -99999;
        // background: darkcyan;
        h3{
          font-size: 15px;
          // font-weight: bold;
          font-family: 'Patrick Hand', cursive;
          // color: white;
        }
      }
    }
  }
}
  .button:hover {
    cursor: pointer;
    background: rgba(200, 221, 4, 0.9);
    // z-index: 1000000;
  }

  
</style>