<template>
<div class="container">
    <div class="background">
      <img
      src= "~/static/img/japan.webp"
      class="background-end">
      <transition name="img">
        <div v-if="showButton" class ="text-box">
            <div class="paragraph">
              <p>This is the end of your little gift.
                Hope you like it! </p>
              <p>If you wanna start over press the button below!</p> 
            </div>
                <div @click="doSomething" class="button">
                  <div class="red">
                  </div>
                </div>
        </div>
      </transition>
  </div>
</div>
  
</template>

<script>
export default {
data(){
  return{
    showButton : false,
  }
},
mounted(){
    setTimeout(() => {
      this.showButton = true
    }, 3000)
  },
methods: {
    doSomething() {
      this.$router.push({path :'/'})
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

.img-enter-active, .img-leave-active {
  transition: opacity .5s;
}
.img-enter, .img-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container{
  min-width: 100%;
  height: 100vh;
  display: flex;
  .background{
    display: flex;
    height: 100vh;
    min-width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    .background-end{
      display: flex;
      min-width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
    .text-box{
      display: flex;
      height: 75%;
      width: 75%;
      background: #c4c4c4,0.9;
      z-index: 999;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 20px;
      backdrop-filter: blur(70px);
      border: solid 3px black;
      .paragraph{
        display: flex;
        height: 70%;
        width: 100%;
        // background: red;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        p{
          font-size: 55px;
          font-family: 'Patrick Hand', cursive;
          text-align: center;
          color: black;
        }
      }
      .button{
        display: flex;
        height: 10vh;
        width: 10vh;
        // background: rgba(0,0,0, 0.7);
        justify-content: center;
        align-items: center;
        border-radius: 60px;
        backdrop-filter: blur(10px);
        border: solid 2px black;
        .red{
          display: flex;
          height: 5vh;
          width: 5vh;
          border-radius: 30px;
          background: red;
          border:solid 2px black;
          z-index: 999;
        }
      }
    }
  }
}

.button:hover {
  cursor: pointer;
  background: gray;
  z-index: 1000000;
}
</style>