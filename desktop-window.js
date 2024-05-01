/*
ArtWindow: a window on the desktop showing off a piece of art
@param winImg: the path to the image to display
@param winTitle: the title to display on the top
@param expTxt: the explanation text for the image
*/
class ArtWindow {
    constructor(winImg, winTitle) {
        this.divID = document.getElementById("div-desktop-windows"); // find list of windows

        // create window
        this.newDiv = document.createElement("div");
        this.newDiv.className = "desktop-window";
        this.newDiv.style = "top: 25%; left:25%; width:800px;z-index: 5;"
        this.divID.appendChild(this.newDiv);

        // create close button
        this.closeButton = document.createElement("span");
        this.closeButton.className = "material-symbols-outlined";
        this.closeButton.style = "position: absolute; top: 0%; left: 100%; transform: translate(-24px, 0px);";
        this.closeButton.textContent = "close";
        this.closeButton.addEventListener("click", (event) => this.destroy());
        this.newDiv.appendChild(this.closeButton);


        // title window
        this.newH1 = document.createElement("h1");
        this.newH1.textContent = winTitle;
        this.newDiv.appendChild(this.newH1);

        // insert image
        this.newImg = document.createElement("img");
        this.newImg.src = winImg;
        this.newDiv.appendChild(this.newImg);

        // make window draggable
        dragElement(this.newDiv);
    }

    // call this function to close the window
    destroy() {
        this.divID.removeChild(this.newDiv);
    }
    // makes a new paragraph (<p> element)
    // @param pText: the paragraph text
    makeP(pText) {
        const elmt = document.createElement("p");
        elmt.textContent = pText;
        this.newDiv.appendChild(elmt);
    }
}

// the following code is from W3Schools.com to make windows draggable (https://www.w3schools.com/howto/howto_js_draggable.asp):
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

// end of W3Schools segment

// another test window:
//new ArtWindow("assets/wallpaper.jpeg", "Test2").makeP("hello");


// functions to create windows for each icon
function mediaInvestigation1Icon() {
    const elmt = new ArtWindow("assets/media-investigation-1.jpg", "Media Investigation.jpg");
    elmt.makeP("This is one of the first projects I made in Art 100. I felt excited being able to pick up a paintbrush for the first time in probably years!");
    elmt.makeP("This page is pretty boring, but check out Media Investigation 2 for a more exciting piece!");
}
function mediaInvestigation2Icon() {
    const elmt = new ArtWindow("assets/media-investigation-2.jpg", "Media Investigation (2).jpg");
    elmt.makeP("This is also one of the first projects I made in this class.");
    elmt.makeP("I discovered from this piece that I really like working with watercolor paint.");
}
function artBookIcon() {
    const elmt = new ArtWindow("assets/artist-book.jpg", "Artist Book.jpg");
    elmt.makeP("This is my artist's book, America's Dairyland. Being in Wisconsin, I made it look like a wedge of cheese. Every page inside is crafted to look like a specific type of cheese.");
}
function farOutIcon() {
    const elmt = new ArtWindow("assets/far-out.jpg", "Far Out.jpg");
    elmt.makeP("After a lot of brainstorming and creating several mini-sketches, this is the end result, \"Far Out\". The much larger space allows me to be free and incorporate elements from my mini-sketches. I was also able to use watercolor paint as well!");
    elmt.makeP("I discovered that the artistic process starts small and builds up. I feel this work incorporates things that I have seen or experienced on campus in my daily life.");
}
function selfPortraitIcon() {
    const elmt = new ArtWindow("assets/self-portrait.jpg", "Self Portrait.jpg");
}
function pleinAirIcon() {
    const elmt = new ArtWindow("assets/en-plein-air.jpg", "En Plein Air.jpg");
    elmt.makeP("A great way to take advantage of a beautiful day!");
    elmt.makeP("I painted this at Memorial Union on one of the first very nice days this year! There was not a cloud in the sky. The Union was lively and the docks were full of people. I was able to find a nice secluded spot away from the commotion, but they hadn't put out the terrace chairs yet! I had to sit on the ground instead.");
}
function collageIcon() {
    const elmt = new ArtWindow("assets/collage.jpg", "Collage.jpg");
    elmt.makeP("This is my collage, titled \"What a Mess!\"");
    elmt.makeP("I found it relaxing and unstressful to cut up quick drawings that I made in class and put them back together into a jumbled mess.")
}