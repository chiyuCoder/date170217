/*<login>*/
angular
    .module('login')
    .component(
        'login',{
            templateUrl:"../tpls/login.html"
        }
    );
/*</login>*/

/*<index>*/
angular
    .module('index')
    .component(
        'index',{
            templateUrl:"../tpls/indexTpls.html",
            controller: ['$http',function getbookdata($http) {
                
                var self = this; 
                $http.get("data/bookclass.json").then(function (response) {
                    self.bookclasses = response.data;
                });
                
                
            }]
        });
/*</index>*/
/*<book>*/
angular.module('book')
    .component('book', {
        templateUrl:'../tpls/book.html',
        controller: ['$routeParams','$http', function ($routeParams,$http) {
            
            this.bookurl = $routeParams.bookurl;
            var self = this;
            $http.get("data/bookclass.json").then(function (response) {
                self.bookclasses = response.data;
                var bkclasses = self.bookclasses;
                for (var i = 0; i< bkclasses.length; i ++) {
                    var bks = [];
                    bks[i] = bkclasses[i].books;
                    for (var x = 0; x < bks[i].length; x ++) {
                        var bkurl = bks[i][x].bookurl;
                        if (bkurl == self.bookurl) {
                            self.book = bks[i][x];
                            self.class = bkclasses[i].classname;
                        }
                    }
                    
                }
            })
        }]
    })
/*</book>*/