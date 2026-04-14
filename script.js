document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const prenom = document.getElementById('prenom').value;
    const rgpd = document.getElementById('rgpd').checked;

    if(rgpd) {
        alert("Merci " + prenom + ", votre message a été envoyé avec succès !");
        this.reset();
    } else {
        alert("Veuillez accepter les conditions RGPD.");
    }
});