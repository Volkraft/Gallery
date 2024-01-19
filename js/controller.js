import Model from "./js/model.js";
import View from "./js/view.js";

const model = new Model();
const view = new View(model.allNotes);