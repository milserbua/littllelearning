# Website-Ordner (`website/`)

Diese Website ist als erweiterbare, rein statische Struktur für das Junior-Company-Projekt aufgebaut.

## Struktur

- `website/index.html` – semantische Seitenstruktur mit Platzhaltern
- `website/css/styles.css` – zentrales Stylesheet mit dokumentiertem Farbsystem (CSS-Variablen)
- `website/js/main.js` – datengetriebene Inhalte (Navigation, Karten, FAQ), Mobile-Menü, dynamisches Jahr
- `website/assets/placeholder-product.svg` – lizenzfreie Platzhaltergrafik

## Lokal ansehen

1. Repository lokal öffnen.
2. Datei `website/index.html` direkt im Browser öffnen.
   - Optional mit lokalem Server, z. B. `python -m http.server` im Repository-Root und dann `http://localhost:8000/website/`.

## Inhalte anpassen

### 1) Text und Struktur

- Kerntexte stehen in `index.html`.
- Wiederkehrende/variable Bereiche werden in `js/main.js` über `siteData` gepflegt:
  - `navigation`
  - `benefits`
  - `useCases`
  - `experiments`
  - `faqs`

### 2) Farben und Design

- Alle Hauptfarben stehen oben in `css/styles.css` unter `:root`.
- Bitte Farben dort zentral ändern (nicht verteilt im Stylesheet), damit das Design konsistent bleibt.

### 3) Platzhalter ersetzen

Im Markup sind fehlende Angaben klar als `[PLATZHALTER: ...]` markiert (z. B. Firmenname, Kontakt, Rechtliches, Produktdetails).

## Barrierefreiheit & Verhalten

- Semantische Struktur, Skip-Link, tastatur-sichtbare Fokuszustände
- Responsive Navigation
- FAQ als `<details>`-Elemente (ohne JavaScript nutzbar; mit JavaScript als Akkordeon)
- Unterstützung für `prefers-reduced-motion`

## Offene Angaben

Folgende Informationen werden noch vom Projektteam benötigt:

1. Offizieller Firmen-/Projektname und Logo
2. Finale Produktbilder und exakte Bauteilliste
3. Preis-/Paketmodell
4. Verbindliche Kontaktadresse (E-Mail, ggf. Telefon)
5. Finale Social-Media-Links
6. Vollständige rechtliche Seiten (Impressum, Datenschutz)
7. Optional: konkrete Schulmodule/Lehrplanbezug
