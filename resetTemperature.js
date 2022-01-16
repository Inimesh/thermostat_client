const resetTemperature = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/temperature', {method: "DELETE"})
    .then(response => {
      return response.json()
    })
    .then(data => {
      resolve(data)
    })
  })
}
export { resetTemperature };