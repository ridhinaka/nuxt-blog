<template>
  <div>
    <section class="container">
      <section class="web">
          <section class="background">
          <img
          src= "~/static/img/123.jpg"
          class="background-index">
          <section class="wrapper">
            <section class="text">
              <h1>Hello Faliha</h1>
            </section>  
            <section @click="doSomething" v-if="showButton" class="open-bar">
              <h2>Click here to start</h2>
            </section>
          </section>
        </section>
      </section> 
      <section class="mobile">
        <h2>Dibilangin buka dilaptop ngeyel</h2>
      </section>
    </section>
  </div>
  
</template>

<script>
// require('Howler')

export default {
  data() {
    return {
      showButton: true
    }
  },
  methods: {
    doSomething() {
      this.$router.push({path :'/video'})
    }
  },
  
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ribeye&display=swap');

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
  transition: opacity .5s;
}
.img-enter, .img-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container{
  // height: 100vh;
  min-width: 100%;
  display: inline-block;
  .mobile{
    // display: flex;
    width: 100%;
    height: 100vh;
    background: black;
    position: relative;
    h2{
      font-family: 'Ubuntu', sans-serif;
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
  .background{
    height: 100vh;
    position: relative;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    // background:greenyellow;
    .background-index{
      height: 100vh;
      min-width: 100%;
      display: flex;
      position: absolute;
      // overflow: hidden;
      // overflow-y: hidden;
      object-fit: fill;
      z-index: 999;
    }
    .wrapper{
      display:flex;
      min-height: 100%;
      width: 100%;
      // border-radius: 20px;
      justify-content: space-between;
      padding-bottom: 135px;
      padding-top: 50px;
      align-items: center;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.8);
      z-index:999;
      // backdrop-filter: blur(0.5px);
      // -webkit-filter: blur(8px);
      // border: 3px solid black;
      .text{
        display:flex;
        // background: blue;
        align-items: center;
        justify-content: center;
        margin-top : 220px;
          h1{
          font-size : 65px;
          // margin-top: -100px;
          font-family: 'Ribeye', cursive;
          z-index: 10000;
          // font-weight: bold;
        }   
      } 
        .open-bar{
          display:flex;
          height: 60px;
          width:170px;
          // margin-top:50px;
          justify-content: center;
          align-items: center;
          // background: linear-gradient(rgb(35, 126, 161),rgb(12, 84, 198));
          border-radius: 30px;
          margin-bottom: 20px;
          z-index: 10000;
          border: solid 2px gray;
          transition: background-color .5s;
          h2{
            font-size: 13px;
            font-family: 'Ribeye', cursive;
            z-index: 10000;
            color: gray;
            font-weight: bold;
          }
        }
      }
  }
}

.open-bar:hover {
  cursor: pointer;
  // background-color: blue;
  background-color: gold;
  z-index: 1000000;
  
}

    // setTimeout
    // setInterval
    // clearInterval

    // setTimeout(() => {
    //   this.showButton = true
    // }, 5000)
</style>

