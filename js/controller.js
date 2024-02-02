import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();
const basicValue = view.elementControll.inputSearch.value;

const startGallery = async (e) => {
    e.preventDefault();
    
    const inputValue = view.elementControll.inputSearch.value.trim();
    
    if (inputValue.length > 0){
        const arrayPhotoes = await model.request(inputValue);
        view.renderPhotoes(arrayPhotoes)
    }
}
view.elementControll.buttonRequest.forEach((btn) => {
    btn.addEventListener('click', async() => {
        view.elementControll.inputSearch.value = btn.dataset.action;
        view.renderPhotoes( await model.request(view.elementControll.inputSearch.value));
    })
})

view.elementControll.burger.addEventListener('click', view.mobileMenu)
view.renderPhotoes(await model.request(basicValue));
view.elementControll.form.addEventListener('submit', startGallery)