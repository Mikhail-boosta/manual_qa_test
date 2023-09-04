import {toggle} from "/manual_qa_test/js/ui/ui-elements.js";


let toggleList = toggle.getElementsByClassName('toggle');
let toggleName = 'animal';

const removeClass = (list, className) => {
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove(className);
    }
};

const getToggleName = (element) => {
    return toggleName = element.textContent.toLowerCase().replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
};

const disableToggle = () => {
    toggle.style.display = 'none';
};

const enableToggle = () => {
    toggle.style.display = 'flex';
};

const setCurrentToggle = () => {
    Array.from(toggleList).forEach((element) => {
        element.addEventListener('click', () => {
            removeClass(toggleList, 'active');
            element.classList.add('active');
            return getToggleName(element);
        });
    });
};

export {
    toggleName,
    setCurrentToggle,
    disableToggle,
    enableToggle
};
