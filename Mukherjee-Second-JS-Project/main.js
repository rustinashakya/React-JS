const hexBtn = document.querySelector('.hex-button');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
const hexColorCopyButton = document.querySelector('.hex-copy-color');

//Create Random HEX Color
hexBtn.addEventListener('click', () => {
  let characterSet = '0123456789ABCDEF';
  let hexColorOutput = "#";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `${hexColorOutput}`
  hexBtn.style.color = `${hexColorOutput}`
    
  console.log(hexColorOutput);

})

// RGB Generator
const rgbBtn = document.querySelector('#rgb-button');
const rgbColorValue = document.querySelector('.rgb-color-value');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbColorCopyButton = document.querySelector('.rgb-copy-color');


rgbBtn.addEventListener('click', () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

  console.log(extractRedValue, extractGreenValue, extractBlueValue);
})



function copyHexColorToClipBoard(){
  // console.log(hexColorValue.textContent);
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert('Hex Color Copied to Clipboard')
}
hexColorCopyButton.addEventListener('click', copyHexColorToClipBoard);



function copyRGBColorToClipBoard(){
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert('RGB Color Copied to Clipboard')
}
rgbColorCopyButton.addEventListener('click', copyRGBColorToClipBoard);













