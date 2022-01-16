const decreaseTemperature = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/down', {method: "POST"})
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      resolve(data);
    })
  })
}
export { decreaseTemperature }