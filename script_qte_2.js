let qte2Active = false;  // État du QTE
let mediaElement3 = null;  // Référence au premier élément média (GIF)
let mediaElement4 = null;  // Référence au second élément média (GIF)
let spacePressCount2 = 0;  // Compteur pour le nombre de pressions sur la touche Espace
const requiredPresses2 = 10;  // Nombre de pressions nécessaires pour réussir le QTE

// Fonction pour démarrer le QTE avec les GIFs positionnés
function startQTE2() {
    document.getElementById('story').innerHTML = "Tu sors un giga lance-flamme vert dans ta poche et décide de l'utiliser. Mais attention il est difficilement maniable. Appuie sur la touche Espace plusieurs fois dans 5 secondes... <br /><br /><br /><br />";
    document.getElementById("failqte").style.display = "none";
    // Démarrer le QTE après 2 secondes
    setTimeout(function() {
        qte2Active = true;
        // Créer et positionner le premier GIF
        mediaElement3 = createMediaElement("Images/QTE_bar.gif", "50%", "65%", "421", "89.5");
        // Créer et 2ositionner le second GIF
        mediaElement4 = createMediaElement("Images/space_qte.gif", "50%", "53%", "320", "180");

        document.getElementById('story').innerHTML = "Appuyez sur la touche Espace 10 fois maintenant ! <br /><br /><br /><br /> ";

        // Si l'utilisateur n'appuie pas sur la touche dans les 2 secondes, le QTE se termine
        setTimeout(function() {
            if (qte2Active) {
                qte2Active = false;
                removeMedia(mediaElement3);  // Supprimer le premier GIF
                removeMedia(mediaElement4);  // Supprimer le second GIF
                Mort2();
            }
        }, 2000);
    }, 5000);
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
function endQTE2() {
    qte2Active = false;
    removeMedia(mediaElement3);  // Supprimer le premier GIF
    removeMedia(mediaElement4);  // Supprimer le second GIF
    lance_flamme();
}

// Fonction pour supprimer un média (GIF)
function removeMedia(mediaElement) {
    if (mediaElement) {
        document.body.removeChild(mediaElement);
    }
}

// Écouteur d'événements pour les touches du clavier
window.addEventListener('keydown', function(event) {
    if (qte2Active && event.key === ' ') {
        spacePressCount2++;  // Incrémenter le compteur à chaque pression sur la touche Espace
        if (spacePressCount2 >= requiredPresses2) {
            endQTE2();
        }
    }
});