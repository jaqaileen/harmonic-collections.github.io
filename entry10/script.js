const text1_options = [
    "Mermaids",
    "Coral Reef Fish",
    "Jellyfish",
    "Octopus",
    "School of Fish",
    "Sirens"

  ];
  const text2_options = [
    "Mermaids seamlessly blend the roles of lawmakers and law enforcers, serving as ethereal arbiters who ensure the enduring unity and order of the oceanic expanse, harmonizing its depths with their celestial wisdom. They are the key to sustaining the delicate balance of the sea.",
    "Coral reef fish maintain the health and resilience of coral reef ecosystems by contributing to nutrient cycling and controlling algal growth. They are integral to the livelihoods of coastal communities.",
    "As a bioluminescent creature, the jellyfish illuminate the seas with their gentle glow. They guides sea creatures through the darkness deep in the ocean.",
    "The octopus is a master Metalsmith, meticulously crafting armor and weaponry from shipwrecked treasures for the sirens. Their artisanal also allow them to provide fish and merfolks with exquisite jewelry.",
    "The school of fish are the educators of the sea, imparting the collective wisdom of the depths to every finned denizen. Their aquatic symphony resonates with the profound lessons that ripple through the ocean's timeless expanse.",
    "In the Seraphim Seas, sirens are the ethereal guardian. They use their melodic presence as sentinel against the encroachment of avaricious pirates."
  ];
  const color_options = ["#DEB3CD", "#80BDC1", "FBDED2", "#2F74B3", "7AAAFC", "#678D7B"];
  const image_options = [
    { src: "../assets/images/message.png"},
    { src: "../assets/images/coral-reef-bck.jpg"},
    { src: "../assets/images/bloomlayers.png"},
    { src: "../assets/images/gemstonegrotto.png"},
    { src: "../assets/images/school.jpeg"},
    { src: "../assets/images/piratesgraveyard.jpg"},
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
 