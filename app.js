const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const register = document.querySelector('.btn-register');
const login = document.querySelector('.btn-login');


btnOne.addEventListener('click', () => {
    btnTwo.style.border='none';
    document.querySelector('.register').style.display='flex';
    document.querySelector('.login').style.display='none'
    btnOne.style.borderBottom='3px solid rgb(18, 18, 151)';

    register.addEventListener('click', () => {
        alert('Complete the information')
    })
})
btnTwo.addEventListener('click', () => {
    btnOne.style.border='none';
    btnTwo.style.borderBottom='3px solid rgb(18, 18, 151)';
    document.querySelector('.register').style.display='none';
    document.querySelector('.login').style.display='flex'

    login.addEventListener('click', () => {
        confirm('Complete the information')
    })
})