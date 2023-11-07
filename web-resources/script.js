var BDS = angular.module('BDS', []);

BDS.controller('appController', function appController(scope){
scope.items = []
})

BDS.directive('accordion', function (){
return{
scope:{
ngModel: '='
},
restrict: 'A',
link: function(scope, el, attr){
var target = document.querySelectorAll('.panel-collapse')
angular.forEach(el, function(key, val){
key.addEventListener('click', function(){
angular.forEach(target, function(tgt, val){
tgt.classList.remove('in');
})
key.nextElementSibling.classList.add('in');
}, false)
})
}
}
})