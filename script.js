const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
registerLink.addEventListener('click',() =>
{
    wrapper.classList.add('active');
    wrapper.style.marginTop = "60px";
});

loginLink.addEventListener('click',() =>
{
    wrapper.classList.remove('active');

});

btnPopup.addEventListener('click',() =>
{
    wrapper.classList.add('active-popup');
    btnPopup.style.backgroundColor = "#162938";
    btnPopup.style.color = "#fff";
});
iconClose.addEventListener('click',() =>
{
    wrapper.classList.remove('active-popup');
    btnPopup.style.backgroundColor = "transparent";
    btnPopup.style.color = "#162938";
});