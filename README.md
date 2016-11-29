#RecoCR

A software for recognize image (OCR) who use TesseractJS
<br><br>




# A Faire

* [ ] Problème de temps de chargement de l'image, avant même que la reconnaissance ne débute

___

* [ ] Limiter le redimensionnement de la fenêtre par rapport à la taille du cercle



# Fait


* [X] Passer tous les fichiers de langue en .gz
    => Sinon il télécharge le fichier dont il a besoin

    **Vérifier d'abord si il n'est pas possible de changer le dossier de scan**

    => Pour l'instant j'ai mis toutes les langues à la racine

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