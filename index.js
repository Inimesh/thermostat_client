// TODO Refactor callbacks into promises! (Learn how to create custom promise objects!)

import { fetchTemperature } from './fetchTemperature.js';
import { renderTemperature } from "./renderTemperature.js";
import { increaseTemperature } from "./increaseTemperature.js";
import { decreaseTemperature } from "./decreaseTemperature.js";
import { resetTemperature } from "./resetTemperature.js";

fetchTemperature((temperature) => {
  renderTemperature(temperature)
});

document.getElementById("incr-temp").addEventListener('click', () => {
  increaseTemperature((new_temperature) => {
    renderTemperature(new_temperature)
  })
})

document.getElementById("decr-temp").addEventListener('click', () => {
  decreaseTemperature((new_temperature) => {
    renderTemperature(new_temperature)
  })
})

document.getElementById("reset-temp").addEventListener('click', () => {
  resetTemperature((new_temperature) => {
    renderTemperature(new_temperature)
  })
})