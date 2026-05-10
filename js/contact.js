/* Fonction pour envoyer le formulaire */
function envoyerFormulaire() {
    /* Récupération des valeurs */
    var nom = document.getElementById("Nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;

    /* Vérification si les champs sont vides */
    if (nom == "" || prenom == "" || email == "") {
        alert("Merci de remplir tous les champs avant d'envoyer.");
    } else {
        /* Message de succès */
        alert("Merci " + prenom + " ! Votre message a bien été envoyé.");
    }
}

/* On lie la fonction au clic sur le bouton */
document.querySelector("button").onclick = envoyerFormulaire;
/* Fonction d'envoi */
function envoyerFormulaire() {
    /* Récupération des éléments */
    var nom = document.getElementById("Nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var formulaire = document.querySelector("form");

    /* Vérification */
    if (nom == "" || prenom == "" || email == "") {
        alert("Attention : tous les champs sont obligatoires !");
    } else {
        /* 1. Pop-up de confirmation du navigateur */
        alert("Envoi en cours...");

        /* 2. On cache le formulaire et on affiche un message dans la page */
        formulaire.innerHTML = "<h3>Merci " + prenom + " !</h3><p>Votre message a été envoyé avec succès au département EFREI.</p>";
        
        /* 3. Petit style rapide pour le message de succès */
        formulaire.style.textAlign = "center";
        formulaire.style.color = "#00A651";
    }
}

/* Liaison au bouton */
document.querySelector("button").onclick = envoyerFormulaire;