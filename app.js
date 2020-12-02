$(document).ready(function () {
    $('#last_name').on('keyup', function() {
        fname = document.getElementById('first_name').value;
        lname = document.getElementById('last_name').value;
        if(fname != '' && lname != ''){
            document.getElementById('phone-area').style.visibility = "visible";
        } 

       
    });
    $('#phone').on('keyup', function() {
        var st = document.getElementById('phone').value[0];
        var len = document.getElementById('phone').value;
        if(st == 0 && (len.length == 10 || len.length == 9) ) {
            document.getElementById('check').style.visibility = "visible";
            document.getElementById('ver-btn').style.visibility = "visible";
        }
    });
    $('#ver-button').on('click', function() {
        document.getElementById('ver-btn').style.visibility = "hidden";
        document.getElementById('ver-code').style.visibility = "visible";
        document.getElementById('ver-code').style.marginTop = "-40px";
        document.getElementById('ver-code-button').style.marginTop = "13px";
        document.getElementById('ver-loader').style.visibility = "visible";
    });

    $('#ver-code-button').on('click', function() {
        var verifyInput = document.getElementById('ver-code-input').value;
        if(verifyInput.length == 4 && (verifyInput > 999 || verifyInput < 10000)) {
            document.getElementById('ver-code-button').innerText = "מאמת";
            document.getElementById('load').style.visibility = "visible";
            window.setTimeout(function() {
                document.getElementById('load').style.visibility = "hidden";
                document.getElementById('ver-code-button').style.visibility = "hidden";
                document.getElementById('teen-adult').style.marginTop = "-24%";
                document.getElementById('ver-code').style.visibility = "hidden";
                document.getElementById('teen-adult').style.visibility = "visible";
                document.getElementById('birth').style.marginTop = "2%";
                document.getElementById('birth').style.visibility = "visible";
                document.getElementById('check').style.visibility = "hidden";
                document.getElementById('success').style.visibility = "visible";
                
            }, 3000);
        }
    });

    $('#ltr-btn').on('click', function(){
        document.getElementById('my-section').style.direction = "ltr";
        document.querySelector('.flag-icon').style.left = "87%";
        document.getElementById('load').style.left = "103px"
        document.getElementById('title').style.marginLeft = "1%";
        document.getElementById('radio').style.textAlign = "left";
        document.getElementById('success').style.lef = "73%";
        document.getElementById('ver-code').style.textAlign = "left";
    });
    $('#rtl-btn').on('click', function(){
        document.getElementById('my-section').style.direction = "rtl";
        document.querySelector('.flag-icon').style.left = "-5%";
        document.getElementById('radio').style.textAlign = "right";
        document.getElementById('ver-code').style.textAlign = "right";

    });


});


