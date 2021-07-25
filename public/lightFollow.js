var light = document.getElementById("Light");
var angle = 0;
var lightCenter = getCenter(light);

function getCenter(element) {
  var { left, top, width, height } = element.getBoundingClientRect();
  return { x: left + width / 2, y: top + height / 2 };
}
function moveLight(clientX, clientY) {
  angle = Math.atan2(lightCenter.y - clientY, lightCenter.x - clientX);
  if (angle > 0.12) angle = 0.12;
  if (angle < -0.45) angle = -0.45;
  light.style.transform = `rotate(${angle}rad)`;
}
if (light !== null) {
  addEventListener("mousemove", ({ clientX, clientY }) => {
    moveLight(clientX, clientY);
  });
}
function reset() {
  angle = 0;
  light.style.transform = `rotate(${angle}rad)`;
  lightCenter = getCenter(light);
}
reset();
addEventListener("resize", reset);
