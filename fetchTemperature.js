const fetchTemperature = (callback) => {
  fetch('http://localhost:3000/temperature')
  .then(response => {
    return response.json()
  })
  .then(data => {
    callback(data)
  })
};

export { fetchTemperature };