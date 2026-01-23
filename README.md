# Community Forum Website

Ein modernes, responsives Forum-Website-Template mit sauberem Design und interaktiven Features.

## Features

### Hauptfunktionen
- 🎨 Modernes, responsives Design mit Gradient-Styling
- 📱 Vollständig mobile-optimiert
- 🌐 Mehrere Seiten: Startseite, Kategorien, Threads
- 👥 Benutzer-Authentifizierung (Login/Register Modals)
- 💬 Diskussionsforen mit Kategorien
- 🔥 Thread-Ansicht mit Beiträgen
- 📊 Live-Statistiken und Aktivitäts-Feed
- ⚡ Interaktive JavaScript-Features

### Design-Highlights
- Gradient-Header mit modernem Look
- Sidebar mit Widgets (Online-Benutzer, Statistiken, Aktivitäten)
- Kategorisierte Foren-Struktur
- Thread-Badges (Angepinnt, Hot, Geschlossen)
- Benutzer-Rollen (Admin, Moderator, Mitglied)
- Smooth Animations und Hover-Effekte

## Projektstruktur

```
/
├── index.html          # Hauptseite mit Forum-Kategorien
├── forum.html          # Forum-Thread-Liste (Gaming-Kategorie)
├── thread.html         # Einzelner Thread mit Beiträgen
├── styles.css          # Alle Styles mit CSS-Variablen
├── script.js           # JavaScript für Interaktivität
└── README.md           # Diese Datei
```

## Seiten-Übersicht

### 1. index.html - Hauptseite
- Hero-Section mit Willkommensnachricht
- Forum-Kategorien gruppiert nach Themen:
  - **Allgemein**: Ankündigungen, Support, Vorschläge
  - **Community**: Diskussionen, Gaming, Kreativ, Off-Topic
- Sidebar mit:
  - Online-Benutzer Statistiken
  - Forum-Statistiken
  - Neueste Aktivitäten
- Login/Register Modals

### 2. forum.html - Kategorie-Ansicht
- Thread-Liste für Gaming-Kategorie
- Thread-Status-Indikatoren (Neu, Hot, Gesperrt)
- Thread-Badges (Angepinnt, Hot, etc.)
- Statistiken (Antworten, Aufrufe)
- "Neues Thema" Button
- Pagination
- Sidebar mit Kategorie-Info

### 3. thread.html - Thread-Ansicht
- Vollständiger Thread mit mehreren Beiträgen
- Benutzer-Profile mit Avataren und Statistiken
- Benutzer-Rollen (Admin, Moderator, Mitglied)
- Post-Aktionen (Liken, Antworten, Zitieren)
- Schnellantwort-Formular mit Formatierungs-Tools
- Thread-Tools und ähnliche Threads in Sidebar

## Technologien

- **HTML5**: Semantisches Markup
- **CSS3**:
  - CSS Grid & Flexbox für Layouts
  - CSS Custom Properties (Variablen)
  - Gradients und Animationen
  - Responsive Design mit Media Queries
- **JavaScript (Vanilla)**:
  - Modal-Funktionalität
  - Event-Handling
  - DOM-Manipulation
  - Form-Validierung
- **Font Awesome 6.4.0**: Icons

## Verwendung

1. Öffne `index.html` in einem Browser
2. Navigiere durch die verschiedenen Kategorien
3. Klicke auf ein Forum oder Thread für Details
4. Teste Login/Register Modals (nur Frontend-Demo)

## Features im Detail

### Responsive Design
- Desktop: 3-Spalten Layout
- Tablet: 2-Spalten Layout
- Mobile: 1-Spalten Layout mit gestapelten Elementen

### Interaktive Elemente
- Modal-Fenster für Login/Register
- Hover-Effekte auf Forum-Items
- Smooth Scrolling
- Formular-Validierung
- Keyboard-Shortcuts (Alt+L für Login, Alt+R für Register, ESC zum Schließen)

### Design-System
- Konsistente Farbpalette mit CSS-Variablen
- Gradient-Buttons und Header
- Einheitliche Border-Radius und Shadows
- Responsive Typography

## Anpassung

### Farben ändern
Bearbeite die CSS-Variablen in `styles.css`:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    /* ... weitere Farben */
}
```

### Kategorien hinzufügen
Füge neue Kategorie-Blöcke in `index.html` hinzu:
```html
<div class="category-group">
    <div class="category-header">
        <i class="fas fa-folder"></i>
        <h3>Deine Kategorie</h3>
    </div>
    <div class="forum-list">
        <!-- Forum-Items hier -->
    </div>
</div>
```

## Browser-Kompatibilität

- Chrome/Edge (neueste Versionen) ✅
- Firefox (neueste Versionen) ✅
- Safari (neueste Versionen) ✅
- Mobile Browser ✅

## Zukünftige Verbesserungen

- Backend-Integration (Node.js/PHP)
- Datenbank-Anbindung
- Echte Benutzer-Authentifizierung
- Rich-Text-Editor für Beiträge
- Datei-Upload-Funktionalität
- Benachrichtigungssystem
- Suchfunktion
- Private Nachrichten
- Benutzer-Profile
- Dark Mode

## Lizenz

Dieses Projekt steht als Template zur freien Verfügung.

## Autor

Erstellt mit HTML, CSS und JavaScript
