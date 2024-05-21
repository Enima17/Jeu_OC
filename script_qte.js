let qteActive = false;  // État du QTE
let mediaElement1 = null;  // Référence au premier élément média (GIF)
let mediaElement2 = null;  // Référence au second élément média (GIF)
let spacePressCount = 0;  // Compteur pour le nombre de pressions sur la touche Espace
const requiredPresses = 10;  // Nombre de pressions nécessaires pour réussir le QTE

// Fonction pour démarrer le QTE avec les GIFs positionnés
function startQTE() {
    // Afficher un message indiquant que le QTE va commencer dans 2 secondes
    document.getElementById('story').innerHTML = "Appuie sur la touche Espace plusieurs fois dans 2 secondes... <br /><br /><br /><br />";
    document.getElementById("choix3").style.display = "none";
    // Démarrer le QTE après 2 secondes
    setTimeout(function() {
        qteActive = true;
        // Créer et positionner le premier élément IMG pour le GIF
        mediaElement1 = createMediaElement("Images/QTE_bar.gif", "50%", "65%", "421", "89.5");
        // Créer et positionner le second élément IMG pour le GIF
        mediaElement2 = createMediaElement("Images/space_qte.gif", "50%", "53%", "320", "180");

        document.getElementById('story').innerHTML = "Appuyez sur la touche Espace 10 fois maintenant ! <br /><br /><br /><br /> ";

        // Si l'utilisateur n'appuie pas sur la touche dans les 2 secondes, le QTE se termine
        setTimeout(function() {
            if (qteActive) {
                qte_fail();
                qteActive = false;
                removeMedia(mediaElement1);  // Supprimer le premier GIF
                removeMedia(mediaElement2);  // Supprimer le second GIF
            }
        }, 2000);
    }, 2000);
}

// Fonction pour créer et positionner un GIF
function createMediaElement(src, left, top, w, h) {
    let mediaElement = document.createElement("IMG");
    mediaElement.setAttribute("src", src);
    mediaElement.setAttribute("width", w)
    mediaElement.setAttribute("height", h)
    mediaElement.style.position = "absolute";
    mediaElement.style.left = left;
    mediaElement.style.top = top;
    mediaElement.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(mediaElement);
    return mediaElement;
}

// Fonction pour terminer le QTE
function endQTE() {
    qteActive = false;
    removeMedia(mediaElement1);  // Supprimer le premier GIF
    removeMedia(mediaElement2);  // Supprimer le second GIF
    Fuir();
}

// Fonction pour supprimer un média (GIF)
function removeMedia(mediaElement) {
    if (mediaElement) {
        document.body.removeChild(mediaElement);
    }
}

// Écouteur d'événements pour les touches du clavier
window.addEventListener('keydown', function(event) {
    if (qteActive && event.key === ' ') {
        spacePressCount++;  // Incrémenter le compteur à chaque pression sur la touche Espace
        if (spacePressCount >= requiredPresses) {
            endQTE();
        }
    }
});