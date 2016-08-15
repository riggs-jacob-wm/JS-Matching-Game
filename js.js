/**
 * Created by session1 on 8/15/16.
 */
var numberOfFaces = 5;

var theLeftSide = document.getElementById("leftside");

function generateFaces() {

    for(var i = 0; i < numberOfFaces; i++) {
        var image = document.createElement("img");

        image.src = "http://cliparting.com/wp-content/uploads/2016/05/Smiley-face-clip-art-images-free-clipart-images.jpeg";

        image.style.top = (Math.random() * 400) + "px";
        image.style.left = (Math.random() * 400) + "px";

        theLeftSide.appendChild(image);
    }
}


generateFaces();