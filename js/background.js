const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");
bgimage.src = `img/${chosenImage}`;
document.body.appendChild(bgimage);
