function initMenu() {
    var btn = document.getElementById('menuButton'); 
    var nav = document.getElementById('mainNav'); 
    if (btn && nav) { btn.onclick = function () { 
        nav.classList.toggle('open'); }; 
    } 
    var links = document.querySelectorAll('.main-nav a'); 
    for (var i = 0; i < links.length; i++) { 
        if (location.pathname.indexOf(links[i].getAttribute('href')) !== -1) { 
            links[i].classList.add('active'); 
        } 
    } 
}
function revealCards() { 
    var cards = document.querySelectorAll('.reveal'); 
    for (var i = 0; i < cards.length; i++) { cards[i].classList.add('visible');} 
}
document.addEventListener('DOMContentLoaded', function () { initMenu(); setTimeout(revealCards, 150); });

document.addEventListener('DOMContentLoaded', function () { 
    var teachers = document.querySelectorAll('.teacher'); 
    for (var i = 0; i < teachers.length; i++) { 
        teachers[i].onmouseover = function () { this.style.transform = 'translateY(-6px)'; }; 
        teachers[i].onmouseout = function () { this.style.transform = 'translateY(0)'; }; 
    } 
});
