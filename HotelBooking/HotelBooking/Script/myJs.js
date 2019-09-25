






function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n >= x.length)
    {
        slideIndex = 1
    }
    if (n < 1)
    {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}



//function currentDiv1(n) {
//    showDivs1(slideIndex = n);
//}

//function showDivs(n) {
//    var i;
//    var x1 = document.getElementsByClassName("mySlides1");
//    var dots1 = document.getElementsByClassName("demo1");
//    if (n > x1.length) { slideIndex = 1 }
//    if (n < 1) { slideIndex = x1.length }
//    for (i = 0; i < x1.length; i++) {
//        x1[i].style.display = "none";
//    }
//    for (i = 0; i < dots1.length; i++) {
//        dots1[i].className = dots[i].className.replace(" w3-opacity-off", "");
//    }
//    x1[slideIndex - 1].style.display = "block";
//    dots1[slideIndex - 1].className += " w3-opacity-off";
//}


//========================== Search =======================================

function myFunction() {
    var str = document.getElementById("location").value.toLowerCase();
    var res = str.match(/coral/gi);

    if (res == "coral" && str != "") {
        window.location.href = "Hotels.html";
    } else if (res != "coral" && str != "") {
        window.location.href = "SearchNotFound.html";
    }
    document.getElementById("location").value = "";
}

function myFunction1() {
    var str = document.getElementById("searchHotel1").value.toLowerCase();
    var res = str.match(/coral/gi);

    if (res == "coral" && str != "") {
        window.location.href = "Pages/Hotels.html";
    }
    else if (res != "coral" && str != "") {
        window.location.href = "Pages/SearchNotFound.html";
    }
    document.getElementById("searchHotel").value = "";
}

function hotelToRoom1() {
    window.location.href = "Pages/Rooms.html";
}

//============================= Hotel to Room Page ========================
function hotelToRoom() {
    window.location.href = "Rooms.html";
}

//============================= Room to Confirm Page =======================

function toConfirmPage() {
    window.location.href = "Confirmation.html";
}

//============================= Date Formating ==========================

$(document).ready(function () {
    $("#checkInDate").datepicker({
        minDate: 0
    });
});


$(document).ready(function () {
    $("#checkOutDate").datepicker({
        minDate: 0
    });
});

//========================= Available Room Search ================================

function roomSearch() {
    var checkIn = document.getElementById('checkInDate').value;
    var checkOut = document.getElementById('checkOutDate').value;

    if (checkIn != "" && checkOut != "") {
        window.location.href = "Pages/Rooms.html";
    }
    else {
        alert('Please Enter The Field Value !!!')
    }
};


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


//================================== Confirm Page =====================

function toThankPage() {
    window.location.href = "ThankPage.html";
}


//================================== Print Thank Page ==================

function printThankPage() {
    window.print();
    window.location.href = "../Default.html";
}

//==================================== Chat ====================================
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//=============================== Image Display =============================


