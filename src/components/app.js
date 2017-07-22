angular.module('video-player')
.component('app', {
  controller: function(){
    this.video = window.exampleVideoData[0];
    this.videosArr = window.exampleVideoData;

    this.selectVideo = () => {

    },
    this.searchResults = () => {

    }

  },
  templateUrl: `src/templates/app.html`,

});
