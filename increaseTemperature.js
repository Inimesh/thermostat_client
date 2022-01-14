const increaseTemperature = (callback) => {
  fetch('http://localhost:3000/up', {method: "POST"})
  .then(response => {
    return response.json()
  })
  .then(data => {
    callback(data)
  })
}

export { increaseTemperature };