var char = "abcdefghijklmnopqrtsuvwxyz";
var num = "0123456778";
var sym = "!@#$%^&*=-";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var copy = "";

var charNum = document.getElementById("charNum");
var capLet = document.getElementById("capital")
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("special");
var submit = document.getElementById("gen");
var yourPw = document.getElementById("newpass");
var copyTex = document.getElementById("copy")

copyTex.addEventListener("click", function () { //this allow me to use a copy button
    yourPw.select();
    yourPw.setSelectionRange(0, 99999)
    document.execCommand("copy");
    window.alert(" copied the password " + yourPw.value);

});

submit.addEventListener("click", function () { //makes button work
    var characters = char; //internal varable to combine characters and number,sym and caps
    if (numBox.checked) {
        characters += num; // character is the outside variable and then we add second variable define as num. which is true
    } else {
        "";
    }

    if (symBox.checked) {
        characters += sym;
    } else {
        "";

    }

    if (capLet.checked) {
        characters += cap;
    } else {
        "";

    }



    yourPw.value = password(charNum.value, characters);

})


function password(l, characters) {
    var pwd = '';//internal variable declared as a string ""
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return pwd;
}


