/* lab9parta.js - javascript for lab9parta.html */

function reg() {

    var a = document.getElementById('fullname').value;
    var b = document.getElementById('address').value;
    var c = document.getElementById('phone').value;
    var d = " ";
    var extra = "Extra: "
    var e = "";
    var f = "";
    var g = "";
    var h = "";
    var i = "";
    var j = " ";
    var k = " ";
    var pizzaTotal = 0;
    var sandwichTotal = 0;
    var drinkTotal = 0;
    var extraCost = 0;
    var totalCost = 0;

    if (document.querySelector('input[name=pizzatype]:checked')) {
        d += String(document.querySelector('input[name=pizzaquantity]').value);
        d += " ";
        d += String(document.querySelector('input[name=pizzasize]:checked').id);
        d += " ";
        d += String(document.querySelector('input[name=pizzatype]:checked').value);
        d += " pizza $";
        pizzaTotal = document.querySelector('input[name=pizzasize]:checked').value * document.querySelector('input[name=pizzaquantity]').value;
        d += pizzaTotal;
    }
    //Extra
    if (document.querySelector('input[name=Extracheese]:checked')) {
        e += String(document.querySelector('input[name=Extracheese]').id);
        e += " $";
        e += String(document.querySelector('input[name=Extracheese]').value);
        extraCost += parseFloat((document.querySelector('input[name=Extracheese]').value));
    }

    if (document.querySelector('input[name=Pepperoni]:checked')) {
        f += String(document.querySelector('input[name=Pepperoni]').name);
        f += " $";
        f += String(document.querySelector('input[name=Pepperoni]').value);
        extraCost += parseFloat((document.querySelector('input[name=Pepperoni]').value));
    }

    if (document.querySelector('input[name=Mushrooms]:checked')) {
        g += String(document.querySelector('input[name=Mushrooms]').name);
        g += " $";
        g += String(document.querySelector('input[name=Mushrooms]').value);
        extraCost += parseFloat((document.querySelector('input[name=Mushrooms]').value));
    }

    if (document.querySelector('input[name=Bacon]:checked')) {
        h += String(document.querySelector('input[name=Bacon]').name);
        h += " $";
        h += String(document.querySelector('input[name=Bacon]').value);
        extraCost += parseFloat((document.querySelector('input[name=Bacon]').value));
    }

    if (document.querySelector('input[name=Olives]:checked')) {
        i += String(document.querySelector('input[name=Olives]').name);
        i += " $";
        i += String(document.querySelector('input[name=Olives]').value);
        extraCost += parseFloat((document.querySelector('input[name=Olives]').value));
    }

    if (document.querySelector('input[name=sandwich]:checked')) {
        j += String(document.querySelector('input[name=sandwichquantity]').value);
        j += " ";
        j += String(document.querySelector('input[name=sandwich]:checked').id);
        j += " sandwich $";
        sandwichTotal = document.querySelector('input[name=sandwich]:checked').value * document.querySelector('input[name=sandwichquantity]').value;
        j += sandwichTotal;
    }

    if (document.querySelector('input[name=drink]:checked')) {
        k += String(document.querySelector('input[name=drinkquantity]').value);
        k += " ";
        k += String(document.querySelector('input[name=drinksize]:checked').id);
        k += " ";
        k += String(document.querySelector('input[name=drink]:checked').value);
        k += " $";
        drinkTotal = document.querySelector('input[name=drinksize]:checked').value * document.querySelector('input[name=drinkquantity]').value;
        k += drinkTotal;
    }

    totalCost = extraCost + pizzaTotal + sandwichTotal + drinkTotal;

    var s = (a + "<div>" + b + "<div>" + c + "<br><br>" + d + "<div>" + extra + e + "<div>" + f + "<div>" +
        g + "<div>" + h + "<div>" + i + "<div>" + j + "<div>" + k + "<div>" + "<br><br>" + "Total Cost: $" + totalCost);
    document.getElementById('data').innerHTML = s;

    var alertPrint = (a + "\n" + b + "\n" + c + "\n\n" + d + "\n" + extra + e + "\n" + f + "\n" + g + "\n" + h + "\n" + i + "\n" + j + "\n" + k + "\n" +
        "\n\n" + "Total Cost: $" + totalCost);

    window.alert(alertPrint);
}

window.onload = getDate;
// date function
function getDate() {
    var today = new Date();
    document.getElementById("date").innerHTML = today;
     
}

function setCookie(cookie_name, cookie_value, expiration_days) {
    var date = new Date();
    date.setTime(date.getTime() + (expiration_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
}

function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
onload = checkCookie;
function checkCookie() {
    var customername = document.getElementById("fullname").value;
    getCookie(customername);
    var lastvisit = new Date();
    if (customername != "") {
        document.getElementById("welcome").innerHTML = "Welcome again, " + customername + "<br>" +
                                                        "Your last visit was " + lastvisit;
    } else {
        welcome_message = "Welcome New Customer!"
        document.getElementById("welcome").innerHTML = welcome_message;
        if (customername != "" && customername != null) {
            setCookie("fullname", customername, 365)
            var lastvisit = new Date();
        }
    }
}