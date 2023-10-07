
// Define the images to be found
const imagesToFind = [
    { src: "../assets/bluegem.png", top: '531px', left: '616px' },
    { src: "../assets/browngem.png", top: '480px', left: '605px' },
    { src: "../assets/greengem.png", top: '300px', left: '50px' },
    { src: "../assets/lightgreengem.png", top: '310px', left: '626px' },
    { src: "../assets/lightpinkgem.png", top: '285px', left: '776px' },
    { src: "../assets/pinkgem.png", top: '351px', left: '898px' },
    { src: "../assets/redgem.png", top: '590px', left: '985px' },
    { src: "../assets/whitegem.png", top: '380px', left: '1300px' },
    { src: "../assets/yellowgem.png", top: '574px', left: '946px' },
    
];

const foundImages = [];

function displayImagesToFind() {
    const instructionBox = document.querySelector('.instruction-box');
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
                imgElement.remove();
                imgClone.remove();
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
