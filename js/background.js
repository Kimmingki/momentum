const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.querySelector("body");
bgimage.style.backgroundImage = `url(img/${chosenImage})`;
