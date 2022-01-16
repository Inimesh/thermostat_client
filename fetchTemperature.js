const fetchTemperature = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/temperature')
    .then(response => {
      return response.json()
    })
    .then(data => {
      resolve(data)
    })
  });
};
export { fetchTemperature };