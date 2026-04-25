# Find Selection — Extension Chrome / Edge

Recherchez instantanément sur Google n'importe quel texte sélectionné sur une page web.

## Fonctionnement

1. Sélectionnez du texte sur n'importe quelle page web.
2. Faites un **clic droit** sur la sélection.
3. Cliquez sur **"Rechercher sur Google : '...'"** dans le menu contextuel.
4. Un nouvel onglet s'ouvre avec les résultats Google.

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
│   └── background.js    # Service worker : menu contextuel + ouverture onglet
├── icon16.png           # Icône 16×16
├── icon48.png           # Icône 48×48
└── icon128.png          # Icône 128×128
```

## Compatibilité

- Chrome 88+
- Edge 88+
- Tout navigateur Chromium compatible Manifest V3
