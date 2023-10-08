
const imagesToFind = [
    { src: "../assets/bluegem.png", top: '510px', left: '580px' },
    { src: "../assets/browngem.png", top: '570px', left: '522px' },
    { src: "../assets/lightgreengem.png", top: '400px', left: '536px' },
    { src: "../assets/lightpinkgem.png", top: '371px', left: '687px' },
    { src: "../assets/pinkgem.png", top: '437px', left: '810px' },
    { src: "../assets/redgem.png", top: '670px', left: '885px' },
    { src: "../assets/whitegem.png", top: '450px', left: '1202px' },
    { src: "../assets/yellowgem.png", top: '550px', left: '890px' },
    
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
