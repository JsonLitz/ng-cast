angular.module('video-player')
  .component('videoList', {
    bindings: {
      videosArr: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
