angular.module('video-player')
.component('app', {
  controller: function(){
    this.video = window.exampleVideoData[0];
    this.videosArr = window.exampleVideoData;
    this.search = ()=>{
      console.log('test button')
    }
    // this.selectVideo = () => {
    // },
    // this.searchResults = () => {
    // }
  },
  templateUrl: `src/templates/app.html`,

});
