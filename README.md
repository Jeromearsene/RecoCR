#RecoCR

A software for recognize image (OCR) who use TesseractJS
<br><br>


# A Faire

* [ ] Limiter le redimensionnement de la fenêtre par rapport à la taille du cercle

---

* [ ] Choisir entre Tesseract Node ou Navigateur
    **Node**
        + Fonctionne en local
        - Pas de récupération de la progression
        <br>
        
    **Navigateur**
        + Récupération de la progression
        - Ne fonctionne en local




# Fait

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