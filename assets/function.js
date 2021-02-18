var sound = new Howl({
  src: ["./assets/music/areas.wav"],
  preload: true,
  volume: 0.2,
  autoplay :true,
  onplay: function(){
    console.log('Play')
  }
})