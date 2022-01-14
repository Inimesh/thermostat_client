
const renderTemperature = (temperature) => {
  const temp = data.temperature;
  temperatureDisplayEl = document.getElementById('temp');
  temperatureDisplayEl.appendChild(document.createTextNode(temp));
}
