var StopWebCam = function () {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    video.srcObject = null;
}

var start = function () {
    var video = document.getElementById("video");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                // Add an event listener to the video element
                video.addEventListener('loadeddata', (event) => {
                    // Call the detect function only when the video is ready
                    detect(); 
                });
            }).catch(function (error) {
                console.log("Something went wrong", error);
            });
    }
}

var detection = function () { 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var title = "Detection";
var message = "Cat has been detected";
var sound = 60;
var vibration = 3;
var icon = 11;
var iconcolor = "#FF000";
var device = "97873";
var url = "https://www.pushsafer.com";
var urltitle = "Open Pushsafer";
var private_key = "OYo5ySod5oi41we9DMC1";
xhttp.open("POST", "https://www.pushsafer.com/api", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("t="+escape(title)+"&m="+escape(message)+"&s="+sound+"&v="+vibration+"&i="+icon+"&c="+iconcolor+"&d="+device+"&u="+escape(url)+"&ut="+escape(urltitle)+"&k="+private_key);
    }