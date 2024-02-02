export default class View {

    constructor(){
    }

    elementControll = {
        inputSearch: document.querySelector('.form__search'),
        form: document.querySelector('.form'),
        listCards: document.querySelector('.row-cards'),
        card: document.querySelectorAll('.row-cards__img'),
        wrapperCard: document.querySelectorAll('.row-cards__card'),
        buttonRequest: document.querySelectorAll('.key'),
        listButton: document.querySelector('.list-button'),
        burger: document.querySelector('.burger'),
    }

    renderPhotoes = (photos) => {
        this.deleteCard();
        for(let i = 0; i < photos.length; i++){
            const card = `<li class="row-cards__card">
            <img class="row-cards__img" src="${photos[i].urls.regular}" alt=""></li>`;
            this.elementControll.listCards.insertAdjacentHTML("afterbegin", card)
        }

    }
    deleteCard = () => {
        this.elementControll.wrapperCard = document.querySelectorAll('.row-cards__card');
        if (this.elementControll.wrapperCard.length > 0){
            this.elementControll.wrapperCard.forEach(card => {
                card.remove();
            }) 
        }
    }
    mobileMenu = () => {
        this.elementControll.listButton.classList.toggle('open');
    }
}
// console.log(photo.urls.regular);
// console.log(this.elementControll.card.src);