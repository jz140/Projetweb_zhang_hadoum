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
    var form = document.getElementById('contactForm'); 
    var msg = document.getElementById('formMessage'); 
    form.onsubmit = function (event) {
         event.preventDefault(); 
         var nom = document.getElementById('nom').value; 
         var prenom = document.getElementById('prenom').value;
          var email = document.getElementById('email').value; 
          var sujet = document.getElementById('sujet').value;
           var message = document.getElementById('message').value; 
           if (nom === '' || prenom === '' || email === '' || sujet === '' || message === '') {
             msg.textContent = 'Merci de remplir tous les champs avant l’envoi.'; 
             msg.className = 'form-message error'; 
            } 
            else if (email.indexOf('@') === -1) { 
                msg.textContent = 'Merci de saisir une adresse mail valide.'; msg.className = 'form-message error'; 
            } 
            else { 
                msg.textContent = 'Merci ' + prenom + ' ! Votre message a bien été préparé pour le département informatique.'; msg.className = 'form-message success'; form.reset();
            } 
        }; 
});
