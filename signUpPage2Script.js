$(document).ready(function(){
    $('#sumbit3').click(function () {
        sessionStorage.setItem("fname",$('#FirstName'));
        window.location.replace('signUpPage3.html');

    });

    $('#resume').change(function () {
        var audio = new Audio('tolling_bell_daniel-simon.mp3');
        audio.play();

    });

    $('#teleNumb').keyup(function(e){
        var ph = this.value.replace(/\D/g,'').substring(0,10);
        // Backspace and Delete keys
        var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
        var len = ph.length;
        if(len==0){
            ph=ph;
        }else if(len<3){
            ph='('+ph;
        }else if(len==3){
            ph = '('+ph + (deleteKey ? '' : ') ');
        }else if(len<6){
            ph='('+ph.substring(0,3)+') '+ph.substring(3,6);
        }else if(len==6){
            ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+ (deleteKey ? '' : '-');
        }else{
            ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+'-'+ph.substring(6,10);
        }
        this.value = ph;
    });




});