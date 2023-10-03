
// Define the images to be found
const imagesToFind = [
    { src: "../assets/bluegem.png", top: '60px', left: '600px' },
    { src: "../assets/browngem.png", top: '160px', left: '250px' },
    { src: "../assets/greengem.png", top: '300px', left: '50px' },
    
];

// Initialize an array to track found images
const foundImages = [];

// Function to display images to find
function displayImagesToFind() {
    const instructionBox = document.querySelector('.instruction-box');
    const gameBox = document.querySelector('.game-box');
    
    for (const image of imagesToFind) {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;

        // Clone the image element for the game box
        const imgClone = imgElement.cloneNode(true);

        imgElement.style.top = image.top;
        imgElement.style.left = image.left;

        // Add a click event listener to handle image found
        imgElement.addEventListener('click', () => {
            if (!foundImages.includes(image)) {
                foundImages.push(image);
                imgElement.remove();
                imgClone.remove(); // Remove the clone from the game box
                checkGameCompletion();
            }
        });

        instructionBox.appendChild(imgClone);
        gameBox.appendChild(imgElement); // Add the clone to the game box
    }
}

// Function to check if the game is complete
function checkGameCompletion() {
    if (foundImages.length === imagesToFind.length) {
        alert('Congratulations! You found all the images.');
    }
}

// Initialize the game
function initGame() {
    displayImagesToFind();
}

// Call the game initialization function
initGame();
