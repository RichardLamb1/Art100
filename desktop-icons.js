/*
DesktopIcon: an icon on the desktop
@param imgPath: path to the icon to use
@param imgName: caption underneath
*/
class DesktopIcon {
    constructor(imgPath, imgName) {
        this.divID = document.getElementById("desktop-icons-list");
        this.newDiv = document.createElement("div");
        this.newImg = document.createElement("img");
        this.newP = document.createElement("p");
        this.divID.appendChild(this.newDiv);
        this.newDiv.appendChild(this.newImg);
        this.newDiv.appendChild(this.newP);
        this.newImg.src = imgPath;
        this.newP.textContent = imgName;
        this.newDiv.className = "desktop-icons-individual";
    }
    // returns the element
    getElement() {
        return this.newDiv;
    }
}

const mediaInv1 = new DesktopIcon("assets/media-investigation-1.jpg", "Media Investigation.jpg"); // create icon
mediaInv1.getElement().addEventListener("click", (event) => mediaInvestigation1Icon()); // allow clicking of icon
const mediaInv2 = new DesktopIcon("assets/media-investigation-2.jpg", "Media Investigation (2).jpg");
mediaInv2.getElement().addEventListener("click", (event) => mediaInvestigation2Icon());
const artBook = new DesktopIcon("assets/artist-book.jpg", "Artist Book.jpg");
artBook.getElement().addEventListener("click", (event) => artBookIcon());
const farOut = new DesktopIcon("assets/far-out.jpg", "Far Out.jpg");
farOut.getElement().addEventListener("click", (event) => farOutIcon());
const selfPortrait = new DesktopIcon("assets/self-portrait.jpg", "Self Portrait.jpg");
selfPortrait.getElement().addEventListener("click", (event) => selfPortraitIcon());
const enPleinAir = new DesktopIcon("assets/en-plein-air.jpg", "En Plein Air.jpg");
enPleinAir.getElement().addEventListener("click", (event) => pleinAirIcon());
const collage = new DesktopIcon("assets/collage.jpg", "Collage.jpg");
collage.getElement().addEventListener("click", (event) => collageIcon());
