# RecoCR

A software for recognize image (OCR) who use TesseractJS
<br><br>



Le développement est à présent arrêté, la librairie Javascript utilisée étant trop lente pour être utilisée en production.
Autre soucis, mineur, si la langue n'est pas présente à la racine du projet, la librairie JS actuelle la télécharge.
Il faut donc au préalable charger toutes les langues à la racine, ce qui n'est pas très "propre", ou arriver à changer le chemin d'accès aux dictionnaires de langue afin de pouvoir les mettre dans un dossier à part.




## Premiers pas

1- Télécharger le projet

2- Entrez dans le projet via le terminal: `cd ~/RecoCR`

3- Installez les modules nécessaires: `npm install`

4- Lancez l'application: `npm run start`

<br><br>

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