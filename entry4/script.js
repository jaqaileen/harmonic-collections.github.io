let myScreenOrientation = window.screen.orientation;
myScreenOrientation.lock("landscape");

console.log("screen locked")

const imagesToFind = [
    { src: "../assets/images/bluegem.png", top: '418px', left: '668px' },
    { src: "../assets/images/browngem.png", top: '480px', left: '605px' },
    { src: "../assets/images/lightgreengem.png", top: '310px', left: '626px' },
    { src: "../assets/images/lightpinkgem.png", top: '285px', left: '776px' },
    { src: "../assets/images/pinkgem.png", top: '351px', left: '898px' },
    { src: "../assets/images/redgem.png", top: '590px', left: '985px' },
    { src: "../assets/images/whitegem.png", top: '380px', left: '1300px' },
    { src: "../assets/images/yellowgem.png", top: '460px', left: '982px' },
    ];

    

const foundImages = [];

function displayImagesToFind() {
    const instructionBox = document.querySelector('.gem-collection');
    const gameBox = document.querySelector('.game-box');
    
    for (const image of imagesToFind) {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;

        const imgClone = imgElement.cloneNode(true);

        imgElement.style.top = image.top;
        imgElement.style.left = image.left;

        imgElement.addEventListener('click', () => {
            if (!foundImages.includes(image)) {
                foundImages.push(image);
                imgElement.style.visibility = "hidden";
                imgClone.style.display = "none";
                checkGameCompletion();
            }
        });

        instructionBox.appendChild(imgClone);
        gameBox.appendChild(imgElement); 
    }
}

function checkGameCompletion() {
    if (foundImages.length === imagesToFind.length) {
        alert('Congratulations! You found all the images.');
    }
}

function initGame() {
    displayImagesToFind();
}

initGame();