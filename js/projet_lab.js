function initMenu() { 
    var btn = document.getElementById('menuButton'); 
    var nav = document.getElementById('mainNav'); 
    if (btn && nav) { 
        btn.onclick = function () { 
            nav.classList.toggle('open'); }; 
        } var links = document.querySelectorAll('.main-nav a'); 
        for (var i = 0; i < links.length; i++) { if (location.pathname.indexOf(links[i].getAttribute('href')) !== -1) 
            { links[i].classList.add('active'); } 
        } 
    }
function revealCards() { 
    var cards = document.querySelectorAll('.reveal'); 
    for (var i = 0; i < cards.length; i++) { cards[i].classList.add('visible'); } 
}
document.addEventListener('DOMContentLoaded', function () { initMenu(); setTimeout(revealCards, 150); });

document.addEventListener('DOMContentLoaded', function () {
    var titles = document.querySelectorAll('.accordion-title');
    for (var i = 0; i < titles.length; i++) 
        { titles[i].onclick = function () { 
            var box = this.nextElementSibling; 
            box.classList.toggle('open'); };
        } var quotes = ['“Les projets nous obligent à apprendre comme dans une vraie équipe tech.”', '“Les clubs permettent de progresser vite, surtout en programmation et en cybersécurité.”', '“Le campus donne envie de travailler en groupe et de présenter ses idées.”'];
          var index = 0; 
          var btn = document.getElementById('quoteBtn'); 
          var box = document.getElementById('quoteBox'); 
          if (btn) { btn.onclick = function () { 
            index = (index + 1) % quotes.length; 
            box.textContent = quotes[index]; }; 
    }
});
