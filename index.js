import { fetchTemperature } from './fetchTemperature.js';
import { renderTemperature } from "./renderTemperature.js";
import { increaseTemperature } from "./increaseTemperature.js";
import { decreaseTemperature } from "./decreaseTemperature.js";
import { resetTemperature } from "./resetTemperature.js";

fetchTemperature().then(temperature => {
  renderTemperature(temperature);
});

document.getElementById("incr-temp").addEventListener('click', () => {
  increaseTemperature().then(new_temperature => {
    renderTemperature(new_temperature)
  });
});

document.getElementById("decr-temp").addEventListener('click', () => {
  decreaseTemperature().then(new_temperature => {
    renderTemperature(new_temperature)
  });
});

document.getElementById("reset-temp").addEventListener('click', () => {
  resetTemperature().then(new_temperature => {
    renderTemperature(new_temperature)
  });
});