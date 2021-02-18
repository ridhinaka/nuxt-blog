<template>
  <div>
    <section class="container">
      <section class="web">
          <section class="background">
          <img
          src= "~/static/visval/index3.webp"
          class="background-index">
          <section class="wrapper">
              <h1>Hi Faliha Ishma!</h1>
              <img
              src="~/static/visval/stiker3.webp"
              class="emoji">
            <section @click="doSomething" v-if="showButton" class="open-bar">
              <h2>Click here!</h2>
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
      object-fit: cover;
      z-index: 999;
    }
    .wrapper{
      display:flex;
      min-height: 400px;
      width: 770px;
      border-radius: 20px;
      justify-content: space-between;
      padding-bottom: 135px;
      padding-top: 50px;
      align-items: center;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.4);
      z-index:999;
      backdrop-filter: blur(50px);
      // -webkit-filter: blur(8px);
      // border: 3px solid black;
        h1{
          font-size : 65px;
          // margin-top: -100px;
          font-family: 'Pumpkin cheese';
          z-index: 10000;
        }
        .emoji{
          display:flex;
          object-fit: contain;
          // background: red;
          width: 300px;
          height: 300px;
          z-index: 10000;
        }      
        .open-bar{
          display:flex;
          height: 50px;
          width:250px;
          margin-top:50px;
          justify-content: center;
          align-items: center;
          // background: #c4c4c4;
          border-radius: 20px;
          margin-bottom: -100px;
          z-index: 10000;
          h2{
            font-size: 35px;
            font-family: 'Pumpkin cheese';
            z-index: 10000;
            color: khaki;
            font-weight: bold;
          }
        }
      }
  }
}

.open-bar:hover {
  cursor: pointer;
  background: darkorange;
  z-index: 1000000;
}

    // setTimeout
    // setInterval
    // clearInterval

    // setTimeout(() => {
    //   this.showButton = true
    // }, 5000)
</style>

