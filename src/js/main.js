let bodyStyle = document.body.style;

let rgbColor = {
  red: 0,
  green: 0,
  blue: 0,
};

function addColor(color) {
  let colorSchema = `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;

  if (rgbColor[color] < 255) {
    rgbColor[color] += 1;
  }

  bodyStyle.backgroundColor = colorCont.innerHTML = colorSchema;
}
