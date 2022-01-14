import { fetchTemperature } from './fetchTemperature.js';
import { renderTemperature } from "./renderTemperature.js";
import { increaseTemperature } from "./increaseTemperature.js";

fetchTemperature((temperature) => {
  renderTemperature(temperature)
});

document.getElementById("incr-temp").addEventListener('click', () => {
  increaseTemperature((new_temperature) => {
    renderTemperature(new_temperature)
  })
})

