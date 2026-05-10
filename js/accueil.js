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
    for (var i = 0; i < cards.length; i++) { 
        cards[i].classList.add('visible'); 
    } 
}
document.addEventListener('DOMContentLoaded', function () { initMenu(); setTimeout(revealCards, 150); });

document.addEventListener('DOMContentLoaded', function () { 
    var nums = document.querySelectorAll('[data-number]'); 
    for (var i = 0; i < nums.length; i++) { 
        var el = nums[i]; 
        var max = parseInt(el.getAttribute('data-number')); 
        var value = 0; 
        var timer = setInterval(function (e, m) { 
            return function () { 
                value = parseInt(e.textContent) + 1; 
            e.textContent = value; 
            if (value >= m) { clearInterval(timer); } 
            } 
        }
    (el, max), 80); 
    } 
});
