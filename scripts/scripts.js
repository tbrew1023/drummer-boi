/*
  Constants
*/

// DOM stuff
const pads = document.querySelectorAll(".pads div");
const options = document.querySelectorAll(".menu-container li");
const image = document.getElementById("visual");

// Soundpacks
const soundpacks = {
  Standard: {
    selectedOptionColor: "#ef9a9a",
    sounds: document.querySelectorAll(".sound-pack1"),
    padColors: [
      "#e57373",
      "#FFA726",
      "#FFEB3B",
      "#66BB6A",
      "#1E88E5",
      "#CE93D8"
    ]
  },
  Techno: {
    selectedOptionColor: "#7CB342",
    sounds: document.querySelectorAll(".sound-pack2"),
    padColors: [
      "#d658ab",
      "#963b74",
      "#232227",
      "#326c71",
      "#6dc1bb",
      "#a2dfd6"
    ]
  },
  Pop: {
    selectedOptionColor: "#F48FB1",
    sounds: document.querySelectorAll(".sound-pack3"),
    padColors: [
      "#b6ceec",
      "#eebfd3",
      "#e47da2",
      "#f1a8b4",
      "#f5c3c0",
      "#f2ebd8"
    ]
  },
  Funky: {
    selectedOptionColor: "#FBC02D",
    sounds: document.querySelectorAll(".sound-pack4"),
    padColors: [
      "#9aafc5",
      "#5ec2c7",
      "#ab567f",
      "#882d4a",
      "#c8bf62",
      "#d0dcde"
    ]
  },
  Island: {
    selectedOptionColor: "#4DB6AC",
    sounds: document.querySelectorAll(".sound-pack5"),
    padColors: [
      "#5c6d42",
      "#da7a29",
      "#e5b325",
      "#ca9024",
      "#357b89",
      "#1b4e66"
    ]
  },
  "Lo-Fi": {
    selectedOptionColor: "#1E88E5",
    sounds: document.querySelectorAll(".sound-pack6"),
    padColors: [
      "#ebb8a7",
      "#ee9b80",
      "#d48874",
      "#368196",
      "#205973",
      "#0f3441"
    ]
  },
  Vaporwave: {
    selectedOptionColor: "#7E57C2",
    sounds: document.querySelectorAll(".sound-pack7"),
    padColors: [
      "#c9a7d7",
      "#cab8d9",
      "#cacad9",
      "#c9dadb",
      "#caeada",
      "#caf7dc"
    ]
  }
};

const defaultOptionStyle = {
  fontSize: "18px",
  fontWeight: "normal",
  color: "black",
};

const selectedOptionStyle = {
  fontSize: "28px",
  fontWeigt: "bolder",
};

// Animation boi
let currentImg = 0;

const img = [
  "url('res/pose1.png')",
  "url('res/pose2.png')",
  "url('res/pose3.png')",
  "url('res/pose4.png')",
  "url('res/pose5.png')",
  "url('res/pose6.png')"
];

/*
  U T I L S
 */

function applyStyles(element, styles) {
  Object.keys(styles).forEach(styleProperty => {
    element.style[styleProperty] = styles[styleProperty];
  })
}

function uniqueRandom(oldValue, min=0, max) {

}

/*
  F U N C T I O N A L I T Y
*/

function selectOption(option) {
  const soundpackName = option.innerHTML;
  const soundpack = soundpacks[soundpackName];

  // reset other options
  options.forEach((otherOption) => {
    applyStyles(otherOption, defaultOptionStyle)
  });

  // Beautify current option
  const selectedStyle = {...selectedOptionStyle, color: soundpack.selectedOptionColor};
  applyStyles(option, selectedStyle);

  // Beautify dem keys
  pads.forEach((pad, index) => pad.style.backgroundColor = soundpack.padColors[index])

  // Use new soundpack
  currentSounds = soundpack.sounds;
}

function playSound(index) {
  const sound = currentSounds[index];
  sound.currentTime = 0;
  sound.play();
  let rand = Math.floor(Math.random() * 7);
  while (currentImg === rand) {
    rand = Math.floor(Math.random() * 7);
  }
  currentImg = rand;
  image.style.backgroundImage = img[rand];
}

/*
  Registering event handlers
*/

// On option selected
options.forEach(option => {
  option.addEventListener("click", ({target}) => selectOption(target));
});

// On paddo boi clicked
pads.forEach((pad, index) => {
  pad.addEventListener("click", () => playSound(index));
});

// Keyboard controls the keyboard lol
document.onkeydown = ({keyCode}) => {
  const index = keyCode - 49; // 49 is the "1" keycode
  console.log(index)
  if (index > -1 && index < 6) {
    playSound(index)
  }
};

// Initialization
let currentSounds;
selectOption(options[0]);
