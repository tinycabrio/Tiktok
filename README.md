# AI Chat & Image Generator 🤖🎨

Eine moderne KI-Anwendung, die **Chatbot-Funktionalität** und **Bildgenerierung** kombiniert. Gebaut mit Next.js, React, TypeScript und OpenAI API.

## ✨ Features

- **💬 AI Chat**: Chatten Sie mit GPT-4 in einer intuitiven Benutzeroberfläche
- **🎨 Bildgenerierung**: Erstellen Sie atemberaubende Bilder mit DALL-E 3
- **🌓 Dark Mode**: Automatische Unterstützung für Hell- und Dunkelmodus
- **📱 Responsive Design**: Funktioniert perfekt auf allen Geräten
- **⚡ Next.js 14**: Schnelle Performance mit App Router
- **🎯 TypeScript**: Vollständig typsicher

## 🚀 Schnellstart

### Voraussetzungen

- Node.js 18+ installiert
- OpenAI API Key ([hier erhalten](https://platform.openai.com/api-keys))

### Installation

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd Tiktok
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren**
   ```bash
   cp .env.example .env
   ```

   Öffnen Sie `.env` und fügen Sie Ihren OpenAI API Key ein:
   ```
   OPENAI_API_KEY=sk-your-api-key-here
   ```

4. **Development Server starten**
   ```bash
   npm run dev
   ```

5. **App öffnen**

   Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser

## 📖 Verwendung

### Chat-Funktion

1. Klicken Sie auf den **Chat** Tab
2. Geben Sie Ihre Nachricht ein
3. Drücken Sie Enter oder klicken Sie auf "Send"
4. Die KI antwortet in Echtzeit

### Bildgenerierung

1. Klicken Sie auf den **Generate Image** Tab
2. Wählen Sie das gewünschte Format (Square/Landscape/Portrait)
3. Beschreiben Sie das Bild, das Sie erstellen möchten
4. Klicken Sie auf "Generate"
5. Laden Sie das generierte Bild herunter

## 🛠️ Technologie-Stack

- **Framework**: Next.js 14
- **UI**: React 18 mit TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI API (GPT-4 & DALL-E 3)
- **HTTP Client**: Axios

## 📁 Projektstruktur

```
Tiktok/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts          # Chat API Endpoint
│   │   └── generate-image/
│   │       └── route.ts          # Bildgenerierungs-Endpoint
│   ├── components/
│   │   ├── ChatInterface.tsx     # Chat-Komponente
│   │   └── ImageGenerator.tsx    # Bildgenerierungs-Komponente
│   ├── globals.css               # Globale Styles
│   ├── layout.tsx                # Root Layout
│   └── page.tsx                  # Hauptseite
├── .env                          # Umgebungsvariablen (nicht im Git)
├── .env.example                  # Beispiel-Konfiguration
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🔑 API Key erhalten

1. Gehen Sie zu [OpenAI Platform](https://platform.openai.com/api-keys)
2. Melden Sie sich an oder erstellen Sie ein Konto
3. Klicken Sie auf "Create new secret key"
4. Kopieren Sie den Key und fügen Sie ihn in Ihre `.env` Datei ein

**Hinweis**: Die Nutzung der OpenAI API ist kostenpflichtig. Überprüfen Sie die [Preise](https://openai.com/pricing) vor der Verwendung.

## 🚢 Deployment

### Vercel (Empfohlen)

1. Pushen Sie Ihr Repository zu GitHub
2. Gehen Sie zu [Vercel](https://vercel.com)
3. Importieren Sie Ihr Repository
4. Fügen Sie die Umgebungsvariable `OPENAI_API_KEY` hinzu
5. Deployen Sie!

### Andere Plattformen

Die App kann auf jeder Plattform deployed werden, die Next.js unterstützt:
- Netlify
- Railway
- AWS
- Azure
- Google Cloud

## 🎨 Anpassung

### Farben ändern

Bearbeiten Sie `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Chat-Model ändern

Bearbeiten Sie `app/api/chat/route.ts`:
```typescript
model: 'gpt-4', // oder 'gpt-3.5-turbo' für schnellere/günstigere Antworten
```

## 🐛 Fehlerbehebung

### "API Key nicht gefunden" Fehler
- Stellen Sie sicher, dass die `.env` Datei existiert
- Überprüfen Sie, dass `OPENAI_API_KEY` korrekt gesetzt ist
- Starten Sie den Development Server neu

### Bilder werden nicht angezeigt
- Überprüfen Sie Ihre OpenAI API Limits
- Stellen Sie sicher, dass Ihr Account genug Credits hat
- Überprüfen Sie die Browser-Konsole für Fehler

## 📝 Lizenz

MIT

## 🤝 Beitragen

Contributions sind willkommen! Fühlen Sie sich frei, Issues zu öffnen oder Pull Requests zu erstellen.

## 📧 Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository.

---

Erstellt mit ❤️ und KI