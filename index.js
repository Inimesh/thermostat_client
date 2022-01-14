const retrieve_data = (url, callback) => {
  fetch(url).then(response => {
    return response.json()
  })
  .then(data => {
    callback(data)
  })
}

retrieve_data('http://localhost:3000/temperature', (data) => {
  const temp = data.temperature;
  temperatureDisplayEl = document.getElementById('temp');
  temperatureDisplayEl.appendChild(document.createTextNode(temp));
});

