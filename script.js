function nb_aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PoM_manche(min, max) {
    const nb = nb_aleatoire(min, max); // nombre à deviner
    let cpt = 0; // nombre de coups pour le trouver
    let saisie; // nombre tapé par le joueur
    let msg = 'Le nombre à deviner est compris entre ' + min + ' et ' + max;

    do {
        saisie = prompt(msg);
        // si "Annuler"
        if (saisie === null) return 0;
        cpt++;
        if (saisie > nb) {
            msg = "C'est moins";
        } else if (saisie < nb) {
            msg = "C'est plus";
        }
    } while (saisie != nb);

    return cpt;
}

function PoM_partie(min, max) {
    let cpt = 0; // nombre de manches jouées
    let best_score = 0; // meilleur score
    let score; // score de la partie en cours
    let continuer;

    do {
        score = PoM_manche(min, max); // joue la manche
        if (score) {
            cpt++;
            if (score < best_score || best_score == 0) best_score = score;
            continuer = confirm("Bravo, tu as gagné en " + score + " coups.\\nVeux-tu rejouer ?");
        } else {
            continuer = false;
        }
    } while (continuer);

    alert("Tu as joué " + cpt + " manche(s).\\nTon meilleur score est de " + best_score + " coups.");
    return best_score;
}

function startGame() {
    const min = 1;
    const max = 100;
    document.getElementById('min').textContent = min;
    document.getElementById('max').textContent = max;
    PoM_partie(min, max);
}
