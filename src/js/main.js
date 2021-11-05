let bodyStyle = document.body.style;

let rgbColor = {
  red: 0,
  green: 0,
  blue: 0,
};

function addColor(color) {
  
  if (rgbColor[color] < 255) {
    rgbColor[color]++;
  }
  
  let colorSchema = `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;

  bodyStyle.backgroundColor = colorCont.innerHTML = colorSchema;
}
