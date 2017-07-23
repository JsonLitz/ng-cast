angular.module('video-player')
  .component('search', {
    bindings: {
      search: '<',
      searchResults:'<',
      query:'@'
    },
    templateUrl: 'src/templates/search.html'
  });
