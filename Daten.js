const produktDaten = [
    {
        name: "Produktname 1",
        kategorie: "Kategorie",
        beschreibung: "Kurzer Platzhaltertext fuer Beschreibung, Nutzen oder Lernziel.",
        bild: "",
        bildAlt: "Platzhalterbild fuer Produktname 1",
        farbe: "yellow",
        hervorgehoben: true,
        linkText: "Anfrage senden",
        linkUrl: "Kontakt.html"
    },
    {
        name: "Produktname 2",
        kategorie: "Kategorie",
        beschreibung: "Kurzer Platzhaltertext fuer Beschreibung, Nutzen oder Lernziel.",
        bild: "",
        bildAlt: "Platzhalterbild fuer Produktname 2",
        farbe: "orange",
        hervorgehoben: false,
        linkText: "Anfrage senden",
        linkUrl: "Kontakt.html"
    },
    {
        name: "Produktname 3",
        kategorie: "Kategorie",
        beschreibung: "Kurzer Platzhaltertext fuer Beschreibung, Nutzen oder Lernziel.",
        bild: "",
        bildAlt: "Platzhalterbild fuer Produktname 3",
        farbe: "green",
        hervorgehoben: false,
        linkText: "Anfrage senden",
        linkUrl: "Kontakt.html"
    }
];

function erstelleProduktkarte(produkt) {
    const artikel = document.createElement("article");
    artikel.className = produkt.hervorgehoben ? "product-card featured-product" : "product-card";

    const bildBereich = document.createElement(produkt.bild ? "img" : "div");
    bildBereich.className = `product-media ${produkt.farbe || "orange"}`;

    if (produkt.bild) {
        bildBereich.src = produkt.bild;
        bildBereich.alt = produkt.bildAlt || produkt.name;
        bildBereich.loading = "lazy";
    } else {
        bildBereich.textContent = "Bild";
        bildBereich.setAttribute("aria-label", produkt.bildAlt || `Platzhalterbild fuer ${produkt.name}`);
    }

    const inhalt = document.createElement("div");
    inhalt.className = "product-content";

    const kategorie = document.createElement("p");
    kategorie.className = "product-label";
    kategorie.textContent = produkt.kategorie;

    const titel = document.createElement("h3");
    titel.textContent = produkt.name;

    const beschreibung = document.createElement("p");
    beschreibung.textContent = produkt.beschreibung;

    const link = document.createElement("a");
    link.className = "text-link";
    link.href = produkt.linkUrl || "Kontakt.html";
    link.textContent = produkt.linkText || "Anfrage senden";

    inhalt.append(kategorie, titel, beschreibung, link);
    artikel.append(bildBereich, inhalt);

    return artikel;
}

document.addEventListener("DOMContentLoaded", () => {
    const produktGrid = document.querySelector("[data-product-grid]");

    if (!produktGrid) {
        return;
    }

    produktGrid.replaceChildren(...produktDaten.map(erstelleProduktkarte));
});
