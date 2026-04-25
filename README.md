# Find Selection — Extension Chrome / Edge

Recherchez instantanément sur Google, Bing, DuckDuckGo ou Leboncoin n'importe quel texte sélectionné sur une page web.

## Fonctionnement

1. Sélectionnez du texte sur n'importe quelle page web.
2. Cliquez sur l'icône de l'extension dans la barre du navigateur (en haut à droite).
3. Un menu s'affiche avec plusieurs moteurs de recherche (Google, Bing, DuckDuckGo, Leboncoin).
4. Cliquez sur le moteur de votre choix pour lancer la recherche dans un nouvel onglet.

## Installation (mode développeur)

### Chrome

1. Ouvrez Chrome et allez à `chrome://extensions/`
2. Activez le **Mode développeur** (interrupteur en haut à droite)
3. Cliquez sur **"Charger l'extension non empaquetée"**
4. Sélectionnez ce dossier (`Find Selection Chrome Extension`)
5. L'extension est installée !

### Edge

1. Ouvrez Edge et allez à `edge://extensions/`
2. Activez le **Mode développeur** (interrupteur en bas à gauche)
3. Cliquez sur **"Charger l'élément décompressé"**
4. Sélectionnez ce dossier (`Find Selection Chrome Extension`)
5. L'extension est installée !

## Structure du projet

```
Find Selection Chrome Extension/
├── manifest.json        # Configuration de l'extension (Manifest V3)
├── src/
│   ├── background.js    # Service worker (inactif, tout est dans le popup)
│   ├── popup.html       # Interface du menu de recherche
│   └── popup.js         # Logique du menu popup
├── icon16.png           # Icône 16×16
├── icon48.png           # Icône 48×48
└── icon128.png          # Icône 128×128
```

## Compatibilité

- Chrome 88+
- Edge 88+
- Tout navigateur Chromium compatible Manifest V3
