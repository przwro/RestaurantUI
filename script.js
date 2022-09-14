const username = document.querySelector('#username');
const age = document.querySelector('#age');
const address = document.querySelector('#address');

const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    [username, age, address].forEach(el => el.value = '');
})


sendBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    popup.classList.add('show-popup');
})

