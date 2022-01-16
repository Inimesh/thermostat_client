const increaseTemperature = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/up', {method: "POST"})
    .then(response => {
      return response.json()
    })
    .then(data => {
      resolve(data)
    })
  })
}
export { increaseTemperature };