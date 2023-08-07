function bgPaint() {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const body = document.querySelector("body");

  body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.4)), url(img/bg/${chosenImage})`;
}

bgPaint();
