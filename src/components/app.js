angular.module('video-player')
.component('app', {
  controller: function(youTube){
    this.video = window.exampleVideoData[0];
    this.videosArr = window.exampleVideoData;
    this.query = '';
    this.search = (query)=>{
      youTube.search(query, response => {
        this.video = response[0];
        this.videosArr = response;
      })
    };
    this.selectVideo = (video) => {
      console.log("video has been clicked");
      this.video = video;
    };
    this.searchResults = (videos) => {
      this.videosArr=videos;
      this.video = videos[0];
    };

  },
  templateUrl: `src/templates/app.html`,

});
