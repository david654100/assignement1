$(document).ready(function(){
    $('#FnameInput').on('keyup',function () {
        var str=(String('#Fnameinput').val).toUpperCase();
    $('#nameCap').html(str);
    });
    var lat= position.coords.latitude;

    var long = position.coords.longitude;

    sessionStorage.setItem('lat', lat);
    sessionStorage.setItem('lon',lon);
    $('#geoloc').html("your lat and long are "+lat+" "+long);

});