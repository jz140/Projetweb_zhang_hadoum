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
    for (var i = 0; i < cards.length; i++) { cards[i].classList.add('visible'); } 
}
document.addEventListener('DOMContentLoaded', function () { 
    initMenu(); setTimeout(revealCards, 150); });

document.addEventListener('DOMContentLoaded', function () { 
    var filters = document.querySelectorAll('.filter'); 
    var programs = document.querySelectorAll('.program'); 
    for (var i = 0; i < filters.length; i++) { 
        filters[i].onclick = function () { 
            for (var j = 0; j < filters.length; j++) { 
                filters[j].classList.remove('active'); 
            } 
            this.classList.add('active'); 
            var type = this.getAttribute('data-filter'); 
            for (var k = 0; k < programs.length; k++) { 
                programs[k].classList.toggle('hidden', !(type === 'all' || programs[k].getAttribute('data-type') === type)); 
            } 
        }; 
    } 
});
