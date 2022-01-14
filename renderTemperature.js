const renderTemperature = (data) => {
  const temp = data.temperature;
  const temperatureDisplayEl = document.getElementById('temp');

  temperatureDisplayEl.innerText = '' // Clear current displayed temp off screen

  temperatureDisplayEl.appendChild(document.createTextNode(temp)); // display new temperature
}

export { renderTemperature };