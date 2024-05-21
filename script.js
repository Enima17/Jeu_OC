// Récupère l'élément audio et le cache
var audio = document.getElementById('myAudio');
audio.style.display = 'none';

// Récupère le bouton de lecture et le texte
var playButton = document.getElementById('playButton');

// Gère le clic sur le bouton
playButton.onclick = function() {
    // Joue ou met en pause l'audio
    if (audio.paused) {
        audio.play();
        this.innerHTML = "Pause";
    } else {
        audio.pause();
        this.innerHTML = "Jouer l'audio";
        audio.style.display = 'none';
    }
};

// Gère le début de la lecture de l'audio
audio.onplay = function() {
    playButton.innerHTML = "Pause";
    audio.style.display = 'none';
};

// Gère la mise en pause de l'audio
audio.onpause = function() {
    playButton.innerHTML = "Jouer l'audio";
    audio.style.display = 'none';
};

        
    let telechargement = new Boolean(false);

    function Suivant() {
        document.getElementById("story").innerHTML = "Tu t'es infiltré dans la base de donnée de AGSI, l'Agence Gouvernemental de Sécurité Informatique. Malheureusement on t'as detecté. Les sirènes hurlent au loin et le temps presse.  Il ne te reste que peu de temps avant que la police vienne à ta porte. Tu exportes tous les fichiers sur une clé USB. Le téléchargement est à 90% quand tu entends ta porte être défoncée. Que fais-tu ?"; //Pour modifier le texte
        document.getElementById("choix1").style.display = "none"; //Enlever l'affichage du choix précédent
        document.getElementById("choix2").style.display = "block"; //Afficher le nouveau choix
    }
    
        function Attendre() {
            document.getElementById("story").innerHTML = "Tu as attendu que le téléchargement soit terminé. La police est maintenant à la porte de ton bureau. Tu entends les policiers fouiller l'étage. Un coup d'œil à la fenêtre, et c'est décidé. Tu caches la clé USB et te précipites vers la fenêtre. Mais il faut faire attention à ne pas se blesser.";
            document.getElementById("choix2").style.display = "none";
            document.getElementById("choix3").style.display = "block";
            document.getElementById("bg_img").style.backgroundImage = "url('Images/fenêtre.png')"; //Afficher une nouvelle image de fond
            telechargement = true;
        }   
                
            //QTE réussi
                        //function Moto()
                        
                        //function Courir()

            //QTE râté;
                function qte_fail(){
                    document.getElementById("story").innerHTML = "Tu t'es blessé à la cheville en sautant. Tu ne peux plus courir. Il ne reste que deux options: La moto ou ta botte secrète.";
                    document.getElementById("choix2").style.display = "none";
                    document.getElementById("choix3").style.display = "none";
                    document.getElementById("failqte").style.display = "block";
                    document.getElementById("bg_img").style.backgroundImage = "url('Images/cheville.png')";
                }

                                    function lance_flamme() {
                                        document.getElementById("bg_img").style.backgroundImage = "url('Images/lance_flamme.png')";
                                        document.getElementById("choix16").style.display = "block";
                                        document.getElementById("story").innerHTML = "Bien joué! Tu as réussis à controler le lance flamme et tu neutralise les policiers. Mais ou vas tu aller maintenant?";
                                        document.getElementById("lance_flamme").style.display = "none";     
                                    }

                                            function Station() {
                                                document.getElementById("story").innerHTML = "Tu arrives au commissariat et tu entres en vitesse par une porte arrière. Après avoir mis à terre quelques policiers sur ton chemin, tu arrives devant la salle qui renferme la base de données de la police. Malheureusement, il faut un code d'accès.";
                                                document.getElementById("choix16").style.display = "none";
                                                document.getElementById("choix17").style.display = "block";
                                                document.getElementById("choix19").style.display = "none";
                                                document.getElementById("bg_img").style.backgroundImage = "url('Images/commico.png')";
                                            }

                                                function décoder_porte() {
                                                    document.getElementById("story").innerHTML = "Malgré ton talent de décodage, tu es trop lent, la police t'attrape. Vous avez perdu. <br /><br /><br /><br />";
                                                    document.getElementById("choix17").style.display = "none";
                                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/arrêté.png')";
                                            }
                                                        function jouer() {
                                                            document.getElementById("story").innerHTML = "Tu gagnes au jeu et il te donne le code d'accès à la porte menant à la base de données.";
                                                            document.getElementById("choix17").style.display = "none";
                                                            document.getElementById("choix18").style.display = "block";
                                                            document.getElementById("bg_img").style.backgroundImage = "url('Images/jeu_video.png')";
                                                        }
                                    

                                    function Mort2(){
                                        document.getElementById("bg_img").style.backgroundImage = "url('Images/mort.png')";
                                        document.getElementById("story").innerHTML = "Tu n'arrives pas à controler le lance flamme et il explose, te tuant. <br /><br /><br /><br />";
                                        document.getElementById("lance_flamme").style.display = "none";
                                        
                                    }
                                    
                             //function Moto()


        function Fuir() {
            document.getElementById("story").innerHTML = "Tu réussi à tomber sans te blesser. Mieux vaux prendre sa moto ou continuer à pieds ? La moto est facilement traçable, mais elle est plus rapide.";
            document.getElementById("bg_img").style.backgroundImage = "url('Images/fenêtre.png')";
            document.getElementById("choix2").style.display = "none";
            document.getElementById("choix3").style.display = "none";
            document.getElementById("choix4").style.display = "block";
        }
                
                function Moto() {
                    document.getElementById("story").innerHTML = "Ton regard se pose sur ta fidèle moto, un frisson d'anticipation parcourant ton échine. Tu sais que sa vitesse et sa maniabilité seront tes meilleurs alliés pour échapper à l'étau de la police. Sans hésitation, tu enfourches la bête d'acier, prêt à disparaître dans le dédale de Néo-Paris.";
                    document.getElementById("choix4").style.display = "none";
                    document.getElementById("failqte").style.display = "none";
                    document.getElementById("choix6").style.display = "block";
                    document.getElementById("bg_img").style.backgroundImage = "url('Images/Moto.png')";
                }
                        function Crash() {
                            document.getElementById("story").innerHTML = "Tu perds l'équilibre et glisses de ta moto, mais grâce à un raccourci scénaristique extraordinaire, tu te retrouves miraculeusement échoué juste à côté d'un véhicule abandonné avec les clés sur le contact.";
                            document.getElementById("choix6").style.display = "none";
                            document.getElementById("bg_img").style.backgroundImage = "url('Images/crash_moto.png')";
                            if (telechargement === true) {
                                document.getElementById("choix15").style.display = "block";
                            } else {
                                document.getElementById("choix7").style.display = "block";
                            }
                        }

                                function fuite_voiture(){
                                    document.getElementById("story").innerHTML = "Tu prends la décision audacieuse de t’emparer de la voiture, les sirènes de la police résonnent dans tes oreilles. La situation est électrique, l’adrénaline monte. Que vas-tu faire maintenant ?";
                                    document.getElementById("choix15").style.display = "none";
                                    document.getElementById("choix8").style.display = "block";
                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/course_poursuite.png')";
                                }

                                function fuite_voiture2(){
                                    document.getElementById("story").innerHTML = "Tu prends la décision audacieuse de t’emparer de la voiture, les sirènes de la police résonnent dans tes oreilles. La situation est électrique, l’adrénaline monte. Etant donné que tu n'as pas terminé le téléchargement tu n'as qu'une option.";
                                    document.getElementById("choix7").style.display = "none";
                                    document.getElementById("choix8").style.display = "none";
                                    document.getElementById("choix19").style.display = "block";
                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/course_poursuite.png')";
                                }

                                        function cite_voisine(){
                                            document.getElementById("story").innerHTML = "Prenant une décision audacieuse, tu choisis de t’évader vers une cité voisine. Dans un élan de discrétion, tu te volatilises des radars, te fondant dans l’ombre de l’anonymat. Le nom de Spike devient un écho silencieux dans les couloirs du cyberespace. Tu n’as pas échoué, mais l’écho de ce que tu aurais pu accomplir résonne encore. La victoire était peut-être à portée de main... <br /><br /><br />";
                                            document.getElementById("choix8").style.display = "none";
                                            document.getElementById("bg_img").style.backgroundImage = "url('Images/fuite.png')";
                                        }

                                        function Base(){
                                            document.getElementById("story").innerHTML = "Avec une détermination inébranlable, tu te diriges vers ton refuge secret, un bar discret. C’est le repère des hackers de la ville, un lieu de rassemblement pour les esprits brillants. Derrière le brouhaha des conversations, se trouve une porte dérobée menant à ton repaire. ";
                                            document.getElementById("choix8").style.display = "none";
                                            document.getElementById("choix16").style.display = "none";
                                            document.getElementById("choix9").style.display = "block";
                                            document.getElementById("bg_img").style.backgroundImage = "url('Images/bar.png')";
                                        }

                                                function decode_bar(){
                                                    document.getElementById("story").innerHTML = "Une fois que tu es entré, tu décodes le téléchargement USB. Les lignes de code défilent sur tes écrans, révélant les secrets enfouis dans les circuits. Et là, au cœur du système de sécurité de la police, tu trouves une faille. Une brèche dans l’armure numérique qui va te permettre d’accéder à des informations cruciales. Il est temps que le monde découvre les bas-fonds du gouvernement de Néo-Paris";
                                                    document.getElementById("choix9").style.display = "none";
                                                    document.getElementById("choix10").style.display = "block";
                                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/gagne.png')";
                                                }

                                                        function diffusion(){
                                                            document.getElementById("story").innerHTML = "Ton audace à eu des conséquences épiques. Les secrets du gouvernement révélés au grand jour, les citoyens de Néo-Paris sont maintenant informés et prêts à agir. Mais attention, chaque victoire a son prix. Les autorités ne resteront pas les bras croisés. Prépare-toi pour de nouvelles aventures palpitantes dans les ruelles numériques ! <br /><br /><br />";
                                                            document.getElementById("choix10").style.display = "none";
                                                            document.getElementById("choix18").style.display = "none";
                                                            document.getElementById("bg_img").style.backgroundImage = "url('Images/diffusion.png')";
                                                        }

                function Courir() {
                    document.getElementById("story").innerHTML = "la police ouvre le feu. Mieux vaux se cacher derrière une voiture ou continuer en espérant qu'ils aient la précision d'un stormtrooper ?";
                    document.getElementById("choix4").style.display = "none";
                    document.getElementById("choix5").style.display = "block";
                    document.getElementById("bg_img").style.backgroundImage = "url('Images/course_1.png')";
                    
                }

                        function voiture() {
                            document.getElementById("story").innerHTML = "Les policiers se rapprochent de plus en plus de la voiture ou tu te caches. C'est dans ces moments cruciaux qu'il faut montrer son talent, il faut tenter le tout pour le tout.";
                            document.getElementById("choix5").style.display = "none";
                            document.getElementById("choix11").style.display = "block";
                            document.getElementById("bg_img").style.backgroundImage = "url('Images/embuscade.png')";
                        }

                                function Mort() {
                                    document.getElementById("story").innerHTML = "Au moment ou tu tentes de combattre les policiers face à face, la police lance une grenade sur la voiture qui explose en te en tuant au passage. Comme quoi il ne faut pas toujours écouter le narrateur surtout quand il te dit de tenter le tout pour le tout. <br /><br /><br /><br />";
                                    document.getElementById("choix11").style.display = "none";
                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/mort.png')";
                                }

                        function courir2() {
                            document.getElementById("story").innerHTML = "Tu réussis à les semer. Cette pause sera de courte durée. Il ne vous reste plus beacoup de solution. La seule restante est d'appeler un ami de longue date pour avoir de l'aide.";
                            document.getElementById("choix5").style.display = "none";
                            document.getElementById("choix12").style.display = "block";
                        }

                                function Appel() {
                                    document.getElementById("story").innerHTML = "Tu appelles un ami, il est en route mais tu perçois le bruit des sirènes et les girophares de police qui se rapprochent. L’adrénaline monte.";
                                    document.getElementById("choix12").style.display = "none";
                                    document.getElementById("choix13").style.display = "block";
                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/appel.png')";
                                }

                                        function Sonic() {
                                            document.getElementById("story").innerHTML = "Soudain, un éclair bleu traverse la rue à toute berzingue. C’est Sonic, le hérisson supersonique ! Il te dis qu'il à la situation en main et que tu peux partir";
                                            document.getElementById("choix13").style.display = "none";
                                            document.getElementById("choix14").style.display = "block";
                                            document.getElementById("bg_img").style.backgroundImage = "url('Images/sonic.png')";
                                        }

                                                function fuite_sonic() {
                                                    document.getElementById("story").innerHTML = "Lors de ta course, grâce à un raccourci scénaristique extraordinaire, tu te retrouves miraculeusement juste à côté d'un véhicule abandonné avec les clés sur le contact.";
                                                    document.getElementById("choix14").style.display = "none";
                                                    document.getElementById("choix7").style.display = "block";
                                                    document.getElementById("bg_img").style.backgroundImage = "url('Images/course_2.png')";

                                                }

                                                





