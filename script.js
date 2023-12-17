function changeBackgroundColor() {
  const colors = ['#ff0000', '#0000ff', '#00ff00', '#ffffff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
