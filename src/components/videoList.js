angular.module('video-player')
  .component('videoList', {
    bindings: {
      videosArr: '<'
    },
    // controller:function() {
    //   checkShit = () => {
    //     console.log(this)
    //   }
    // },
    templateUrl: 'src/templates/videoList.html'
  });
