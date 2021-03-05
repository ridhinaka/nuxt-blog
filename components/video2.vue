<template>
<div>
  <section class= "wrapper">
    <section class="text">
      <h1>당신을위한 특별한 비디오</h1>
      <section  @click="doSomething" class="button">
        <h2>Next</h2>
      </section>
      <section  @click="mute()" class="button">
        <h2>Stop</h2>
      </section>
      <h2>&#8592;Before you play this video, press me first</h2>
    </section>
    <div class="wrapper2">
      <iframe  class="video2"  src="https://www.youtube.com/embed/yW7f4kJyvXI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe> 
      <div class="text-full">
        <h1>&#8592;Fullscreen ME :)</h1>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  methods: {
    doSomething() {
      this.$router.push({path :'/end'})
    },
    mute() {
      var player2 = document.getElementById('audio');
      player2.muted = true
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper{
  // margin-top: 20px;
  display: flex;
  height: 100%;
  min-width: 100%;
  background: white;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom:10px;
  // position: relative;
  .text{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    margin-left: 100px;
    h1{
      color:black;
      font-family: 'Patrick Hand', cursive;
      font-size: 40px;
    }
    h2{
      color: black;
      font-family: 'Patrick Hand', cursive; 
      font-size: 15px;
    }
  }
  .button{
    display: flex;
    height: 1%;
    width: 2%;
    margin-right: 5px;
    // background: gray;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-left: 10px;
    border: solid 2px black;
    h2{
      color: black;
      font-family: 'Patrick Hand', cursive; 
      font-size: 10px;
      
    }
  }
}
.wrapper2{
  display: flex;
  flex-direction: row;
  // background: blue;
  justify-content: center;
}
.video2 {
    display: flex;
    // min-height: 90vh;
    height: 650px !important;
    width: 1100px;
    margin-top:15px;  
    z-index: 999; 
    border: solid 4px black;
    position: static;
    margin-left: 140px;
  }
  .text-full{
    display: flex;
    flex-direction: row;
    // background: yellow;
    align-items: flex-end;
    justify-content: center;
    margin-left: 10px;
    margin-bottom: 12px;
  }
  h1{
  color:black;
  font-family: 'Patrick Hand', cursive;
  font-size: 15px;
  }
.button:hover {
  cursor: pointer;
  background: darkcyan;
}   

</style>