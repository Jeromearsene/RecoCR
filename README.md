# RecoCR

A software for recognize image (OCR) who use TesseractJS
<br><br>



Le développement est à présent arrêté, la librairie Javascript utilisé étant trop lente pour être utilisé en production.
Autre soucis, mineur, si la langue n'est pas présente à la racine du projet, la librairie la télécharge.
Il faut donc au préalable charger toutes les langues à la racine, ce qui n'est pas très propre, ou arriver à chnager le chemin d'accès aux dictionnaires afin de pouvoir les mettre dans un dossier à part.


# A Faire

* [ ] Limiter le redimensionnement de la fenêtre par rapport à la taille du cercle



# Fait


* [X] Passer tous les fichiers de langue en .gz
    => Sinon il télécharge le fichier dont il a besoin

    **Vérifier d'abord si il n'est pas possible de changer le dossier de scan**
        -> il va certainement falloir forker

    => Possibilité de charger toutes les langues à la racine du projet

___


* [X] Choisir entre Tesseract Node ou Navigateur
    **Node**
        + Fonctionne en local
        - Pas de récupération de la progression
        <br>
        
    **Navigateur**
        + Récupération de la progression
        - Ne fonctionne en local
        
    => Choix du navigateur avec les langages en local
    
---

* [X] Regarder Tesseract en version C++
    + version embarquée
    + meilleures performances
    
    => Ne vaut pas le coup
        ° Une version spécifique pour chaque plateforme
            -> compilateur
        ° Intégration à Node.js

---

* [X] Gérer le chargement des données
    => ~~Utiliser le onload event~~
    => ~~Utilier les évènements d'Electron~~
    <br>
    
    + [X] Multi-langue
        > Les données sont dans un JSON
        > { FR: {...}, EN: {...} }
    + [X] Compteur

---