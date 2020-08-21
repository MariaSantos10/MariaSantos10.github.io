const nav = document.querySelector('nav');
const main = document.querySelector('main');
const navUl = document.querySelector('nav ul');
const hamburger = document.querySelector('nav button');
const footerYear = document.querySelector('footer small span');
const button = document.querySelector('button');

hamburger.onclick = openNav;

button.onclick = function() {
    document.body.classList.toggle('dark-theme');
}

document.onclick = function(e) {
    if (e.target.classList.contains('overlay')) {
        closeNav();
    }
}


function openNav() {
    let span = document.createElement('span');
    span.setAttribute('id', 'overlay');
    span.classList.add('overlay');
    nav.prepend(span);
    navUl.style.left = 0;
    document.body.style.overflowY = 'hidden';
    //navOverlay.classList.add('overlay');
}

function closeNav() {
    nav.firstChild.remove();
    navUl.style.left = '-275px';
    document.body.style.overflowY = 'auto';
    //navOverlay.classList.remove('overlay');
}

footerYear.textContent = new Date().getFullYear();