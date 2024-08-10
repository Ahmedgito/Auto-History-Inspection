let valueDisplays = document.querySelectorAll("#num1, #num2, #num3, #num4");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let suffix = valueDisplay.textContent.replace(/\d+/g, ''); // Extract the suffix from the text content
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + suffix; // Add the suffix to the counted value
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
