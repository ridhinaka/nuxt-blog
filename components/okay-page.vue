<template>
<div class="container">
    <div class="background">
      <img
      src= "~/static/img/okay-page.webp"
      class="background-index">
      <div class="wrapper">
          <h1>OKAY, AS YOU WISH</h1>
          <div @click="doSomething" v-if="showButton" class="open-bar">
            <div class="button">
              <h2>Next!!!</h2>
            </div>   
          </div>
      </div>
    </div>
  </div>
  
</template>

<script>


export default {
  data() {
    return {
      showButton: true
    }
  },
  methods: {
    doSomething() {
      this.$router.push({path :'/grid'})
    }
  },
}
</script>

<style lang="scss" scoped>

.container{
  height: 100vh;
  min-width: 100%;
  display: flex;
  .background{
    height: 100vh;
    position: relative;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .background-index{
      height: 100vh;
      min-width: 100%;
      display: flex;
      position: absolute;
      // object-fit: cover;
    }
    .wrapper{
      display: flex;
      background: black;
      height: 45vh;
      z-index: 9999;
      width: 70%;
      border-radius: 20px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // margin-top: 80px;
      h1{
        margin-top: 120px;
        font-family: 'Kalam', cursive;
        font-family: 'Patrick Hand', cursive;
      }
      .open-bar{
        display: flex;
        // background: chartreuse;
        width: 100%;
        height: 20vh;
        align-items: flex-end;
        justify-content: flex-end;
        // margin-top: 130px;
        .button{
          display: flex;
          // background: gray;
          width: 10%;
          backdrop-filter: blur(50px);
          height: 20%;
          margin-right: 25px;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          h2{
            font-size: 17px;
            font-family: 'Patrick Hand', cursive;
            color: black;
            // background: blue;
          }
        }
      }
    }
  }
}
.button:hover {
    cursor: pointer;
    background: rgba(60, 61, 52, 0.9);
    z-index: 1000000;
  }

</style>