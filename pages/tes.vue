<template>
  <div class="background">
    <div class="ridhi">
      <transition name="img">
        <img
        v-if ='show1'
        src=~/static/grid/1.jpg
        class="fade">
      </transition>
      <transition name= "img">
        <img
        v-if='show2'    
        src=~/static/grid/2.jpg
        class="naka">
      </transition>  
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      show1 : false,
      show2 : false
    }
  },
    mounted(){
      setTimeout(() => {
        this.show1 = true
      }, 2000)
      setTimeout(() => {
        this.show2 = true
      }, 4000)
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
.background{
  display: flex;
  height: 100%;
  width: 100%;
  background: fuchsia;
  .ridhi{
    display: flex;
    height: 100%;
    width: 100% ;
    flex-direction: row;
  // background: fuchsia;
  .fade{
    object-fit: contain;
    height: 50%;
    width: 50%;
  }
  .naka{
    object-fit: contain;
    height: 50%;
    width: 50%;
    z-index: 99;
  }
}
}

</style>