const decreaseTemperature = (callback) => {
  fetch('http://localhost:3000/down', {method: "POST"})
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    callback(data);
  })
}

export { decreaseTemperature }