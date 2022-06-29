const grid = document.querySelector('.grid');




const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


const createCard = () => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');


    card.appendChild(front);
    card.appendChild(back);

    return card;

}