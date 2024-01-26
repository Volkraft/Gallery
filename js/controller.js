import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

const startGallery = async (e) => {
    e.preventDefault();
    
    const inputValue = view.elementControll.inputSearch.value.trim();
    
    if (inputValue.length > 0){
        const arrayPhotoes = await model.request(inputValue);
        view.renderPhotoes(arrayPhotoes)
    }
}

view.elementControll.form.addEventListener('submit', startGallery)