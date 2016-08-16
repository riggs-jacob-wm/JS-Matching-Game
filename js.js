/**
 * Created by session1 on 8/15/16.
 */
var numberOfFaces = 5;

var theLeftSide = document.getElementById("leftside");

var theRightSide = document.getElementById("rightside");

var theBody = document.getElementsByTagName("body")[0];

// The variables that will be used.

function generateFaces() {

    for(var i = 0; i < numberOfFaces; i++) {
        var image = document.createElement("img");

        image.src = "http://vignette2.wikia.nocookie.net/pkmnshuffle/images/f/f6/Icon_Eevee.png/revision/latest?cb=20150225004826";
        image.style.top = (Math.random() * 400) + "px";
        image.style.left = (Math.random() * 400) + "px";


        theLeftSide.appendChild(image);

// Makes the left side images
    }

    var leftSideImages = theLeftSide.cloneNode(true);

// Clones the left side

    leftSideImages.removeChild(leftSideImages.childNodes[leftSideImages.childNodes.length-1]);

// Removes one of the pictures from th right

    theRightSide.appendChild(leftSideImages);

    // Makes the right side images

    theLeftSide.lastChild.onclick=
        function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();
        };

// Makes the game continues if right

    theBody.onclick = function gameOver() {
        alert("Game Over!");

        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };

// Ends the game if wrong

}


generateFaces();