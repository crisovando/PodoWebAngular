import angular from 'angular';

class DashboardController {
  constructor($http) {
    this.http = $http;
  }
  
  unClick() {
    this.http({
      url: '/api/exportar',
      method: 'GET'
    }).then((res) => {
      var anchor = angular.element('<a/>');
      angular.element(document.body).append(anchor);
      anchor.attr({
        href: 'data:attachment/csv;charset=utf-8,' + encodeURI(res.data),
        target: '_blank'
      })[0].click();
    })
    .catch((err) => {
      console.log(err);
    });

  }
}

DashboardController.$inject = ['$http'];

export default DashboardController;