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
            controller: function getbookdata($http) {
                
                var self = this; 
                $http.get("data/bookclass.json").then(function (response) {
                    self.bookclasses = response.data;
                });
            }
        });
/*</index>*/