const resetTemperature = (callback) => {
  fetch('http://localhost:3000/temperature', {method: "DELETE"})
  .then(response => {
    return response.json()
  })
  .then(data => {
    callback(data)
  })
}

export { resetTemperature };