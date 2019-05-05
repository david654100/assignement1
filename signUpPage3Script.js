$(document).ready(function(){
 var x = sessionStorage.getItem("fname");
 x.toUpperCase();
 $('#outputName').html('welcome '+x);
});

