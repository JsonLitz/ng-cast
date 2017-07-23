angular.module('video-player')
  .component('videoList', {
    bindings: {
      videosArr: '<',
      selectVideo: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
