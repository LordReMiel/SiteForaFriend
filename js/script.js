 $(function(){ // Same as document.addEventListener("DOMContentLoaded....")
// $ είναι το όνομα της jQuery function

    //Same as document.querySelector("#navbarToggle").addEventListener("blur", function(event){...})
    $("#navbarToggle").blur(function(event){ // Το blur είναι οτι το ποντίκι φεύγει απο το εν λόγω στοιχείο και πατάει κάπου αλλού.
    //το $ επίσης λειτουργεί και σαν querySelector

        var screenWidth = window.innerWidth; // window.innerWidth : Είναι το μέγεθος του browser


        if (screenWidth < 768) {

            $("#collapsable-nav").collapse('hide');
        }

    });

});
