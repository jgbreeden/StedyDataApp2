function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}

var onSuccess = function (position) {
    document.getElementById("lat").value = position.coords.latitude;
    document.getElementById("long").value = position.coords.longitude;

};

function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}