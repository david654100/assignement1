$(document).ready(function(){

    $("#loginButton").click(function () {

        window.location.replace("signin.html");
    });


    //tests to see if password and password confirmation are the same
    $( '#passwordConformation').on('keyup', function () {
        if ($('#password').val() == $('#passwordConformation').val()) {
            $('#passwordConfirmationMessage').html(' Passwords are matching').css('color', 'green');

        } else

            $('#passwordConfirmationMessage').html('Passwords are not matching').css('color', 'red');

    });
    $('#userNameInput').on('keyup',function () {
        var regex1 = RegExp("[!@#$%^&*(),.?\":{}|<>]");
       var str= String($('#userNameInput').val());
       if ((regex1.test(str))) {
           $('#invalidUsernameMessages').html('invaid username').css('background-color ', 'red');
       }

    });



    $("#submitButton").click(function () {
        if(($('#passwordConformation').val().length>0)&&($('#userNameInput').val().length)>0){
            $('#submitButton').show();
        }
    })
});