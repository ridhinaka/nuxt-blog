<template>
  <div class="wrapper">
    <div id="green" class="button-wrapper" @click="toggleCarouselModal()">
      <div class="icon-wrapper">
        <img 
          class="icon-sound"
          src="~/static/icon/question.png"
        >
      </div>
      <div class="description">
        <h1 class="sm:text-sm lg:text-tiny xl:text-tiny 2xl:text-tiny">HELPDESK</h1>
      </div>
    </div>
    
    <div v-if="!isSafari" id="orange" class="button-wrapper" @click="toggleFullscreen()">
      <div class="icon-wrapper">
        <img 
          v-if="fullscreen"
          class="icon-sound"
          src="~/static/icon/minimize.png"
        >
        <img 
          v-else
          class="icon-sound"
          src="~/static/icon/fullscreen.png"
        >
      </div>
      <div class="description">
        <h1 class="sm:text-sm lg:text-tiny xl:text-tiny 2xl:text-tiny">{{`${fullscreen ? 'MINIMIZE' : 'FULLSCREEN'}`}}</h1>
      </div>
    </div>
    
    <div class="button-wrapper" id="orange" @click="toggleSound()">
      <div class="icon-wrapper">
        <img 
          v-if="sound === 'ON'"
          class="icon-sound"
          src="~/static/icon/audio-on.png"
        >
        <img 
          v-else
          class="icon-sound"
          src="~/static/icon/audio-off.png"
        >
      </div>
      <div class="description">
        <h1 class="sm:text-sm lg:text-tiny xl:text-tiny 2xl:text-tiny">{{`SOUND: ${sound}`}}</h1>
      </div>

      <audio id="audio" ref="audio" loop="loop" autoplay="autoplay">
        <source src="https://storage.googleapis.com/playfest-bucket/backsound.mp3" type="audio/mpeg">
      </audio>
      
    </div>
  </div>
  
</template>

<script>
// <audio v-else id="audio" ref="audio" loop="loop" autoplay="autoplay">
//       <source src="@/assets/music/background-audio.mp3" type="audio/mpeg">
//     </audio>
export default {
  data() {
    return {
      sound: 'ON',
      fullscreen: false,
      showmode: process.browser ? localStorage.showmode : 'fullscreen',
      device: this.$store.getters['app/getDevice'],
      isSafari: this.$store.getters['app/checkIsSafari']
    }
  },
  props: {
    room: {
			type: String,
			default() {
				return 'home'
			}
    },
    toggleCarouselModal: {
      type: Function
    }
  },
  mounted() {
    if(this.showmode === 'fullscreen') {
      this.fullscreen = true
    } else {
      this.fullscreen = false
    }

    let currentTime =  this.nullValidator(localStorage.currentTime, 0)
    var player = document.getElementById('audio');
    player.currentTime = currentTime;  
    player.play()
    
    this.sound = this.nullValidator(localStorage.sound, 'ON')
    document.getElementById('audio').muted = this.sound === 'ON' ? false : true;
  },
  methods: {
    toggleFullscreen() {
      var doc = window.document;
      var docEl = doc.documentElement;
      var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        this.fullscreen = true
        localStorage.setItem('showmode', 'fullscreen')
        if(requestFullScreen) {
          requestFullScreen.call(docEl);
        }
      }
      else {
        this.fullscreen = false
        localStorage.setItem('showmode', 'minimize')
        if(cancelFullScreen) {
          cancelFullScreen.call(doc);
        }
      }
    },
    nullValidator(data, expectReturn) {
      return data !== null && data !== undefined ? data : expectReturn
    },
    toggleSound() {
      var player = document.getElementById("audio");  
      player.addEventListener("timeupdate", function() {
        if (player.currentTime - player._startTime >= player.value) {    
              player.pause()
        }
      })

      document.getElementById('audio').muted = this.sound === 'ON' ? true : false;
      localStorage.setItem('sound', this.sound === 'ON' ? 'OFF' : 'ON')
      this.sound = this.sound === 'ON' ? 'OFF' : 'ON'
    }
  },
  beforeDestroy() {
    if(window.innerWidth > window.innerHeight) {
      var player = document.getElementById('audio');
      if(player) {
        localStorage.setItem('currentTime', (player?.currentTime || 0) + 0.2)
      }
      
      // if(this.room === 'home') {
      //   localStorage.setItem('homeCurrentTime', player.currentTime + 0.2)
      // } else {
      //   localStorage.setItem('currentTime', player.currentTime + 0.2)
      // }
    }
  }
}
</script>

<style  lang="scss" scoped>
.wrapper {
  width: 15%;
  bottom: 2vh;
  z-index: 15;
  display: flex;
  margin-left: 2vh;
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  left: env(safe-area-inset-left, 20px);
  @media (max-width: 1024px) {
    width: 20%;
  }
  .button-wrapper {
    height: 40px;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    z-index: 15;
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    align-items: flex-start;
    justify-content: flex-start;
    left: env(safe-area-inset-left, 20px);
    @media (max-width: 1024px) {
      height: 25px;
      margin-top: 5px;
    }
    .icon-wrapper {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px 0px  0px 25px;
      background: rgba(0, 0, 0, 0.3);
      .icon-sound {
        width: 15px;
        width: 15px;
        margin: -10px 0px 0px 0px;
        padding: 0px;
        display: flex;
        object-fit: cover;
      }
    }
    .description {
      width: 60%;
      height: 100%;
      display: flex;
      color: #FFF;
      align-items: center;
      justify-content: center;
      font-family: 'Narasi Sans Bold';
    }
  }
}

#orange {
  background: #FF888F;
}

#green {
  background: #96C6CA
}


.button-wrapper:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 4px #FFFFFF);
}
</style>