const siteData = {
    navigation: [
        { label: "Start", href: "#start" },
        { label: "Produkt", href: "#produkt" },
        { label: "Nutzen", href: "#nutzen" },
        { label: "Einsatz", href: "#einsatz" },
        { label: "Experimente", href: "#experimente" },
        { label: "FAQ", href: "#faq" },
        { label: "Kontakt", href: "#kontakt" }
    ],
    benefits: [
        {
            icon: "1",
            title: "Sicherer Einstieg",
            text: "Kinder lernen grundlegende Elektronik in einem altersgerechten, sicheren Rahmen kennen."
        },
        {
            icon: "2",
            title: "Selbstständiges Ausprobieren",
            text: "Leicht verständliche Schritt-für-Schritt-Anleitungen machen eigenständige Erfolge möglich."
        },
        {
            icon: "3",
            title: "MINT/MINT-Motivation",
            text: "Das Projekt fördert frühzeitig Interesse an Technik, Naturwissenschaften und MINT-Themen."
        }
    ],
    useCases: [
        {
            icon: "🏫",
            title: "Einsatz im Unterricht",
            text: "Lehrkräfte können Experimente als praxisnahe Ergänzung für den Schulunterricht verwenden."
        },
        {
            icon: "🏠",
            title: "Lernen zuhause",
            text: "Familien nutzen den Baukasten für gemeinsames Lernen und freies Experimentieren."
        },
        {
            icon: "🎯",
            title: "Flexibel erweiterbar",
            text: "Module können je nach Lernstand kombiniert und schrittweise ergänzt werden."
        }
    ],
    experiments: [
        {
            icon: "⚡",
            title: "Stromkreis-Grundlagen",
            text: "Kinder bauen einen einfachen Stromkreis und verstehen den Weg des Stroms."
        },
        {
            icon: "💡",
            title: "Licht & Schalter",
            text: "Mit LED und Schalter entstehen erste interaktive Mini-Projekte."
        },
        {
            icon: "🔔",
            title: "Signal & Reaktion",
            text: "Ein Signalgeber zeigt, wie Komponenten zusammenwirken können."
        }
    ],
    faqs: [
        {
            question: "Für welche Altersgruppe ist der Baukasten gedacht?",
            answer: "Der Fokus liegt auf Kindern von 8 bis 12 Jahren."
        },
        {
            question: "Ist der Baukasten eher für Schule oder Zuhause?",
            answer: "Beides: Das Konzept ist für Unterricht und für das Lernen zuhause ausgelegt."
        },
        {
            question: "Sind echte Produktdaten bereits final?",
            answer: "Noch nicht vollständig. Preise, exakte Bauteilliste und rechtliche Angaben sind als Platzhalter markiert."
        }
    ]
};

function renderNavigation(items) {
    const navList = document.getElementById("nav-list");

    if (!navList) {
        return;
    }

    navList.replaceChildren(
        ...items.map((item) => {
            const li = document.createElement("li");
            const link = document.createElement("a");

            link.href = item.href;
            link.textContent = item.label;

            li.append(link);
            return li;
        })
    );
}

function createCard(item) {
    const article = document.createElement("article");
    article.className = "card";

    const icon = document.createElement("span");
    icon.className = "card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = item.icon;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    article.append(icon, title, text);
    return article;
}

function renderCards(targetId, items) {
    const target = document.getElementById(targetId);

    if (!target) {
        return;
    }

    target.replaceChildren(...items.map(createCard));
}

function renderFaqs(items) {
    const list = document.getElementById("faq-list");

    if (!list) {
        return;
    }

    list.replaceChildren(
        ...items.map((item) => {
            const details = document.createElement("details");
            details.className = "faq-item";

            const summary = document.createElement("summary");
            summary.textContent = item.question;

            const content = document.createElement("p");
            content.textContent = item.answer;

            details.append(summary, content);
            return details;
        })
    );

    list.addEventListener("toggle", (event) => {
        const current = event.target;

        if (!(current instanceof HTMLDetailsElement) || !current.open) {
            return;
        }

        list.querySelectorAll("details").forEach((entry) => {
            if (entry !== current) {
                entry.open = false;
            }
        });
    }, true);
}

function setupMobileNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");

    if (!(toggle instanceof HTMLButtonElement) || !(nav instanceof HTMLElement)) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
}

function setCurrentYear() {
    const yearNode = document.getElementById("year");

    if (!yearNode) {
        return;
    }

    yearNode.textContent = String(new Date().getFullYear());
}

function init() {
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");

    renderNavigation(siteData.navigation);
    renderCards("benefits-list", siteData.benefits);
    renderCards("use-cases-list", siteData.useCases);
    renderCards("experiments-list", siteData.experiments);
    renderFaqs(siteData.faqs);

    setupMobileNavigation();
    setCurrentYear();
}

document.addEventListener("DOMContentLoaded", init);
