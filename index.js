import { fetchTemperature } from './fetchTemperature.js';
import { renderTemperature } from "./renderTemperature.js";

fetchTemperature((temperature) => {
  renderTemperature(temperature)
});



