// On sélectionne le formulaire grâce à son id "contactForm"
document.getElementById('contactForm')

// On écoute l'événement "submit" (quand on clique sur Envoyer)
.addEventListener('submit', function(e) {

    // Empêche le rechargement automatique de la page
    // (comportement par défaut d'un formulaire)
    e.preventDefault();
    
    // Récupère la valeur tapée dans le champ prénom
    const prenom = document.getElementById('prenom').value;

    // Vérifie si la case RGPD est cochée (true / false)
    const rgpd = document.getElementById('rgpd').checked;

    // Condition : si la case RGPD est cochée
    if(rgpd) {

        // Affiche un message personnalisé avec le prénom
        alert("Merci " + prenom + ", votre message a été envoyé avec succès !");

        // Réinitialise le formulaire (vide tous les champs)
        this.reset();

    } else {

        // Message si la case n'est pas cochée
        alert("Veuillez accepter les conditions RGPD.");

    }
});
