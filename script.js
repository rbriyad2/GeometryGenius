const blogBtn = document.getElementById('blogBtn').addEventListener('click', function(){
  window.open('https://rbriyad2.github.io/my-portfolio', '_blank');
})


let serialNumber = 1;

function setInnerText(elementId, value) {
  const getElementId = document.getElementById(elementId);
  getElementId.innerText = `${serialNumber++}. ${value}`;
}

function random_bg_color(bgelementId) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
document.getElementById(bgelementId).style.backgroundColor = bgColor;
}

function removeClass(removeElementId) {
  const removeClass = document.getElementById(removeElementId);
  const remove = removeClass.classList.remove("hidden");
  return remove;
}

function inputsValueById(inputValueId) {
  const inputFieldId = document.getElementById(inputValueId);
  const inputIdString = inputFieldId.value;
  const inputIdfieldValue = parseFloat(inputIdString);
  return inputIdfieldValue;
}

document.getElementById('triangle').addEventListener('click', function() {
  const triangleBvalue = inputsValueById('triangleinPutBvalue');
  const triangleHvalue = inputsValueById('triangleinPutHvalue');
  const CalculateTringle = triangleBvalue * triangleHvalue * 0.5;
  removeClass('triangles');
  setInnerText('rightTringle', CalculateTringle.toFixed(2));
  random_bg_color('tringlebg')
});

document.getElementById('rectangleCalculateBtn').addEventListener('click', function() {
  const rectangleWValue = inputsValueById('rectangleW');
  const rectangleIValue = inputsValueById('rectangleI');
  const CalculateRectangle = rectangleWValue * rectangleIValue;
  removeClass('Rectangles');
  setInnerText('rectangle', CalculateRectangle.toFixed(2));
  random_bg_color('rectanglebg')
});

document.getElementById('CalculateParallelogram').addEventListener('click', function() {
  const parallelogramBValue = inputsValueById('parallelogramB');
  const parallelogramHValue = inputsValueById('parallelogramH');
  const Calculateparallelogram = parallelogramBValue * parallelogramHValue;
  removeClass('Parallelogram');
  setInnerText('parallelograms', Calculateparallelogram.toFixed(2));
  random_bg_color('parallelogrambg')
});

document.getElementById('calculatePentagon').addEventListener('click', function() {
  const pentagonPvalue = inputsValueById('pentagonP');
  const pentagonBvalue = inputsValueById('pentagonB');
  const CalculatePentagon = pentagonPvalue * pentagonBvalue * 0.5;
  removeClass('pentagon');
  setInnerText('pentagons', CalculatePentagon.toFixed(2));
  random_bg_color('pentagonbg')
});

document.getElementById('Rhombusid').addEventListener('click', function() {
  const d2value = inputsValueById('d2');
  const d1value = inputsValueById('d1');
  const CalculateRhombus = d1value * d2value;
  removeClass('rombush');
  setInnerText('rombushoo', CalculateRhombus.toFixed(2));
  random_bg_color('Rhombusbg')
});

document.getElementById('Calculateellipse').addEventListener('click', function() {
  const ellipseAvalue = inputsValueById('ellipseA');
  const ellipseBvalue = inputsValueById('ellipseB');
  const CalculateEllipse = ellipseAvalue * ellipseBvalue * 3.14;
  removeClass('ellipse');
  setInnerText('ellipses', CalculateEllipse.toFixed(2));
  random_bg_color('ellipsebg')
});
