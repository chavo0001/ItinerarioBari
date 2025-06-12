const itinerary = [
  {
    id: 1,
    title: "Giorno 1 – Bari Vecchia & Frisc&Mang 🍤🏰",
    description: `

🌞 Mattina
- Arrivo a casuccia + Spesa 

🍽️ Pranzo
 -Cibo Supermarket

🌇 Pomeriggio
- Giretto per Bari Vecchia
- Gelato/granita 
- Passeggiata sul lungomare

🌙 Sera
- Cena Friggitoria-Pescheria “Frisc&Mang” - fritto di mare fresco

`,
    stops: [
      {
        name: "Casa",
        image: "/images/home.jpg",
      },
      {
        name: "Bari Vecchia",
        image: "/images/bari_vecchia.jpg",
      },
      {
        name: "Frisc&Mang",
        image: "/images/frisc_mang.jpg",
      },
      {
        name: "Castello Svevo",
        image: "../images/castello_svevo.jpg",
      },
      {
        name: "Basilica di San Nicola",
        image: "/images/san_nicola.jpg",
      },
      {
        name: "Lungomare",
        image: "/images/lungomare.jpg",
      },
    ],
    travel: [
      { from: "Casa", to: "Via Principe Amedeo", mode: "a piedi", duration: "6 min", distance: "500 m" },
    ],
    //highlights: [ ],
    links: [
      { label: "TripAdvisor Frisc&Mang", url: "https://www.tripadvisor.it/Restaurant_Review-g10368972-d27457789-Reviews-Friggitoria_Pescheria_Frisc_Mang_Bari-Carbonara_di_Bari_Bari_Province_of_Bari_.html" }
    ]
  },
  {
    id: 2,
    title: "Giorno 2 – Mezza giornata a Trani 🏖️⛪",
    description: `
🥐Colazione
- bari vecchia/via Sparano

🚗 Mattina
- Partenza da Bari a Trani: 41,8 km / 42 min in auto
- Visita di Trani e passeggiata nei vicoli antichi

🍽️ Pranzo
- Sul porto di Trani con vista mare/ street food del posto

🌇 Pomeriggio
- Relax/libero o gelato/granita

🚗 Rientro a Bari: 41,8 km / 42 min in auto
`,
    stops: [
      { name: "Bari", image: "/images/bari.jpg" },
      { name: "Cattedrale di Trani", image: "/images/trani_cattedrale.jpg" },
      { name: "Porto di Trani", image: "/images/trani_porto.jpg" },
      { name: "Bari", image: "/images/bari.jpg" },
    ],
    travel: [
      { from: "Bari", to: "Trani", mode: "auto", duration: "42 min", distance: "41,8 km" },
      { from: "Trani", to: "Bari", mode: "auto", duration: "42 min", distance: "41,8 km" },
    ],
    highlights: [
      
    ],
    links: [
      {label: "Trani Wikipedia", url: "https://it.wikipedia.org/wiki/Trani" }
    ]
  },
  {
    id: 3,
    title: "Giorno 3 – Torre Incina + Alberobello & Locorotondo + Lisi Anna 🏡🍷(porta cibo cavalli)",
    description: `
🦀Mattina
- Bari → Torre Incina : 40 min 🚗 
- Bagno (portare scarpette per la sfigata)

🥪 Pranzo
- Focaccia, al sacco/bar vicini

🏰 Pomeriggio
- Torre Incina → Alberobello 26 km / 30 min (strada impetuosa)
- Passeggiata tra vicoli bianchi, palpate e gelati
-Alberobello → Locorotondo 7 min 

🥩 Cena (enjoy the little roads during the way ---> muretti a secco, cavalli, campi)
- Locorotondo → Lisi Anna 18 min
`,
    stops: [
      { name: "Bari", image: "/images/bari.jpg" },
      { name: "Polignano a Mare", image: "/images/polignano.jpg" },
      { name: "Specchia di Sant’Oronzo", image: "/images/specchia.jpg" },
      { name: "Borgo tipico", image: "/images/borgo_tipico.jpg" },
      { name: "Bari", image: "/images/bari.jpg" },
    ],
    travel: [
      { from: "Bari", to: "Polignano a Mare", mode: "auto", duration: "33 min", distance: "32,8 km" },
      { from: "Polignano a Mare", to: "Specchia di Sant’Oronzo", mode: "auto", duration: "8 min", distance: "3,5 km" },
      { from: "Specchia di Sant’Oronzo", to: "Bari", mode: "auto", duration: "33 min", distance: "32,8 km" },
    ],
    highlights: [
      
    ],
    links: [
      { label: "TripAdvisor Lisi Anna", url: "https://www.tripadvisor.it/Restaurant_Review-g652003-d12543880-Reviews-Macelleria_Lisi_Anna-Monopoli_Province_of_Bari_Puglia.html" }
    ]
  },
  {
    id: 4,
    title: "Giorno 4 – Torre Guaceto & Natura 🤿🏝️🐠",
    description: `

🚗 Mattina
- Bari → Torre Guaceto: 90,2 km / 1h30 min

🌞 Giornata
- Riserva naturale di Torre Guaceto: mare cristallino, snorkeling per vedere bestiole, natura protetta

🍽️ Pranzo
- Al sacco o chioschi autorizzati nella riserva

🍹Pomeriggio
-Aperitivo Guna Beach Club 8 min 

🚗 Sera
- Rientro a Bari: 90,2 km / 1h30 min per relax

`,
    stops: [
      { name: "Bari", image: "/images/bari.jpg" },
      { name: "Torre Guaceto", image: "/images/torre_guaceto.jpg" },
      { name: "Bari", image: "/images/bari.jpg" },
    ],
    travel: [
      { from: "Bari", to: "Torre Guaceto", mode: "auto", duration: "1h30", distance: "90,2 km" },
      { from: "Torre Guaceto", to: "Bari", mode: "auto", duration: "1h30", distance: "90,2 km" },
    ],
    highlights: [
    
    ],
    links: [
      { label: "Torre Guaceto - visit Puglia", url: "https://www.visitpuglia.it/torreguaceto" }
    ]
  },
  {
    id: 5,
    title: "Giorno 5 – Polignano a Mare & Specchia di Sant’Oronzo 🌊🍝",
    description: `
    🥐Colazione
- bari vecchia/via Sparano

🌊 Mattina
- Bari → Polignano a Mare: 32,8 km / 33 min
- Bagno caletta (tuffi) 

🍽️ Pranzo
-focaccia pugliese e burrate/mozzarelle

🍹 Pomeriggio
- Mare e passeggiata paese
- Aperitivo baretti (occhio che si riempe subito)

🌙 Sera
- Cena Specchia di Sant’Oronzo: 3,5 km / 8 min

🚗 Rientro a Bari: 32,8 km / 33 min

`,
    stops: [
      { name: "Bari", image: "/images/bari.jpg" },
      { name: "Alberobello", image: "/images/alberobello.jpg" },
      { name: "Locorotondo", image: "/images/locorotondo.jpg" },
      { name: "Bari", image: "/images/bari.jpg" },
    ],
    travel: [
      { from: "Bari", to: "Alberobello", mode: "auto", duration: "49 min", distance: "49,3 km" },
      { from: "Alberobello", to: "Locorotondo", mode: "auto", duration: "10 min", distance: "7,3 km" },
      { from: "Locorotondo", to: "Bari", mode: "auto", duration: "57 min", distance: "56,6 km" },
    ],
    highlights: [
    
    ],
    links: [
      { label: "Alberobello Wikipedia", url: "https://it.wikipedia.org/wiki/Alberobello" },
      { label: "Locorotondo Wikipedia", url: "https://it.wikipedia.org/wiki/Locorotondo" }
    ]
  },
  {
    id: 6,
    title: "Giorno 6 – Matera Full day 🚶‍♂️",
    description: `

  🌞 Mattina
- Bari -> Matera 1h30

🍽️ Pranzo
- Locale tipico/street food

🌇 Pomeriggio
- caffè in baretto carino/ape

🌙 Sera
- Cena a piacere



`,
    stops: [
      { name: "Bari", image: "/images/bari.jpg" },
      { name: "Castel del Monte", image: "/images/castel_del_monte.jpg" },
      { name: "Andria", image: "/images/andria.jpg" },
      { name: "Bari", image: "/images/bari.jpg" },
    ],
    travel: [
      { from: "Bari", to: "Castel del Monte", mode: "auto", duration: "1h10", distance: "65 km" },
      { from: "Castel del Monte", to: "Andria", mode: "auto", duration: "15 min", distance: "13 km" },
      { from: "Andria", to: "Bari", mode: "auto", duration: "40 min", distance: "40 km" },
    ],
    highlights: [
      
    ],
   
  },
  {
    id: 7,
    title: "Pausa/palestra (🍆😺) O semplice mare  ",
    description: `
🍆 Mattina


😺 Pomeriggio


🍆+😺 Sera

`,
    stops: [
      { name: "Via Sparano", image: "/images/via_sparano.jpg" },
      { name: "Corso Cavour", image: "/images/corso_cavour.jpg" },
      { name: "Centro storico", image: "/images/bari_vecchia.jpg" },
      { name: "Ristorante", image: "/images/ristorante.jpg" },
    ],
    travel: [],
    highlights: [
      
    ],
    links: []
  },
  {
    id: 8,
    title: "Giorno 8 – Last day🥲",
    description: `
🌞 Mattina


🍽️ Pranzo




`,
    stops: [
      { name: "Centro storico", image: "/images/bari_vecchia.jpg" },
      { name: "Mercati", image: "/images/mercato.jpg" },
    ],
    travel: [],
    highlights: [
      
    ],
    links: []
  }
];

export default itinerary;
