// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtnOpen");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    btn.style.display = "none";
   
}
span.onclick = function () {
    modal.style.display = "none";
    btn.style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.getElementById("list").style.display = "none";
    console.log("it passed");
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log("it works");
    }
}

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
    });
