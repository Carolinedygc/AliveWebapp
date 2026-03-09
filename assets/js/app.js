// FAQ Accordion
const accordionHeaders = document.querySelectorAll(".accordionHeader");

if (accordionHeaders) {
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            // Skift active klasse på headeren
            header.classList.toggle("active");

            // Find indholdet til accordions
            let content = header.nextElementSibling;

            // Tjek om panelet er åbent
            if (content.style.maxHeight) {
                // Hvis åbent, så luk
                content.style.maxHeight = null;
            } else {
                // Hvis lukket, fold ud ud fra tekstens højde
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

// Dropdown menu
function toggleMenu() {
    let getMenu = document.querySelector('#navDropdown');
    let getIcon = document.querySelector('#burgerMenuIcon');

    getMenu.classList.toggle('show');

    if (getMenu.classList.contains('show')) {
        getIcon.classList.remove('fa-bars');
        getIcon.classList.add('fa-xmark');
    } else {
        getIcon.classList.remove('fa-xmark');
        getIcon.classList.add('fa-bars');
    }
}

function closeMenu() {
    let getMenu = document.querySelector('#navDropdown');
    let getIcon = document.querySelector('#burgerMenuIcon');

    if (getMenu) {
        getMenu.classList.remove('show');
    }
    if (getIcon) {
        getIcon.classList.remove('fa-xmark');
        getIcon.classList.add('fa-bars');
    }
}

let getBurgerMenu = document.querySelector(".burgerMenuLabel");
if (getBurgerMenu) {
    getBurgerMenu.addEventListener('click', function (event) {
        event.stopPropagation(); // Stopper klikket i at nå frem til vores document.addEventListener 
        toggleMenu();
    });
}

// Luk menuen hvis man klikker uden for den
document.addEventListener('click', function (event) {
    let getMenu = document.querySelector('#navDropdown');
    let getBurgerMenu = document.querySelector(".burgerMenuLabel");

    // Hvis klikket ikke er inde i menuen eller på burger-ikonet, lukker vi den
    if (getMenu && !getMenu.contains(event.target) && getBurgerMenu && !getBurgerMenu.contains(event.target)) {
        closeMenu();
    }
});

// Forside - nyheder
const nyhederForside = [
    {
        billede: "./assets/img/silent_disco_forside.webp",
        dato: "15. juli 2025",
        titel: "Silent Disco på Alive Festival 2025",
        indhold: "Glæd dig til en helt særlig Silent Disco-oplevelse, når vi inviterer til natlige dansegulve under stjernerne - nu med live DJs hver aften og dobbelt så mange headsets som sidste år! Når du har sikret dig billet, henter du dit headset i Silent Disco-boden, og så er du klar.",
        farve: "var(--alivegrøn)",
    },
    {
        billede: "./assets/img/billetter-nyheder.webp",
        dato: "5. juni 2025",
        titel: "Få partoutbilletter tilbage til Alive Festival 2025!",
        indhold: "Der er nu kun få partoutbilletter tilbage til Alive Festival 2025! Vil du sikre dig adgang til alle tre dage med musik, kunst og udflugter i Thy, så er det nu, du skal slå til. Har du kun tid til én dag? Så kan du også købe endagsbillet til torsdag, fredag eller lørdag.",
        farve: "var(--pink)",
    },
    {
        billede: "./assets/img/nye-musiknavne-nyhed.webp",
        dato: "14. marts 2025",
        titel: "Fem nye musiknavne til festivalplakaten",
        indhold: "Fem gode fredagsnyheder! Vi glæder os til at byde velkommen til School of X, Def MaMa Def, Faza, Uden Ord og 100%WET på årets festival. Læs mere om dem - og resten af programmet med kunst, musik og udflugter - under 'Program'.",
        farve: "var(--gul)",
    }
]

const nyhedForside = document.querySelector(".cards-nyheder-forside");
if (nyhedForside) {
    nyhedForside.innerHTML = "";

    // laver en ny div og giver den en class
    nyhederForside.forEach(nyhed => {
        let card = document.createElement('div');
        card.classList.add('nyhed-forside');
        card.style.backgroundColor = nyhed.farve;

        card.innerHTML =
            `<img src="${nyhed.billede}" alt="${nyhed.titel} image">
            <p>${nyhed.dato}</p>
            <h2>${nyhed.titel}</h2>
            <p>${nyhed.indhold}</p>
            `

        nyhedForside.appendChild(card);
    });
}

// knap til flere nyheder
const nyhedForsideKnap = document.querySelector(".btn-nyheder-forside-wrap");

if (nyhedForsideKnap) {
    const nyhederKnapForside = document.createElement("a");
    nyhederKnapForside.classList.add("btn-nyheder-forside");
    nyhederKnapForside.href = "./nyheder.html";
    nyhederKnapForside.textContent = "Se flere nyheder";
    nyhedForsideKnap.appendChild(nyhederKnapForside);
}

// FRIVILLIG
const frivillige = [
    {
        titel: "Almindelig frivillig",
        tekst: "Som almindelig frivillig kan du enten arbejde 24 timer før, 10 timer under eller 16 timer efter festivalen. Som tak får du en partoutbillet, forplejning under vagten samt adgang til hygge og kaffe i frivilligloungen alle dage.",
        billede: "./assets/img/almindelig_frivillig.webp",
        farve: "var(--pink)"
    },
    {
        titel: "Super frivillig",
        tekst: "Vi elsker at skabe festival sammen med holdspillere, ildsjæle og vaskeægte nørder på alle områder - hele året rundt. Vi søger løbende nye 365'ere, og nedenfor kan du se, hvilke steder vi har åbent for ansøgninger lige nu. ",
        billede: "./assets/img/super_frivillig.webp",
        farve: "var(--gul)"
    },
    {
        titel: "365 frivillig",
        tekst: "Vi elsker at skabe festival sammen med holdspillere, ildsjæle og vaskeægte nørder på alle områder - hele året rundt. Vi søger løbende nye 365'ere, og nedenfor kan du se, hvilke steder vi har åbent for ansøgninger lige nu.",
        billede: "./assets/img/365_frivillig.webp",
        farve: "var(--alivegrøn)"
    }
];

const frivilligEl = document.querySelector(".cards-frivillig-wrap");
if (frivilligEl) {
    frivilligEl.innerHTML = "";

    // laver en ny div og giver den en class
    frivillige.forEach(frivillig => {
        let card = document.createElement('div');
        card.classList.add('frivillig-rolle');
        card.style.backgroundColor = frivillig.farve;

        card.innerHTML =
            `<img src="${frivillig.billede}" alt="${frivillig.titel} image">
            <h2>${frivillig.titel}</h2>
            <p>${frivillig.tekst}</p>
            `

        frivilligEl.appendChild(card);
    });
}

//Knap til frivillig håndbog
const frivilligHaandbogKnap = document.querySelector(".btn-frivillig");

if (frivilligHaandbogKnap) {
    const frivilligKnap = document.createElement("a");
    frivilligKnap.classList.add("btn-frivillig-haandbog");
    frivilligKnap.href = "./assets/Frivillighaandbog-2025.pdf";
    frivilligKnap.target = "_blank";
    frivilligKnap.innerHTML = `Se frivillighåndbog <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    frivilligHaandbogKnap.appendChild(frivilligKnap);
}

// Mad og Drikke 
const madogDrikke = [
    {
        navn: "Gadens gastronomer",
        billede: "./assets/img/gadens-gastronomer-madOgDrikke.webp",
        favorit: false

    },
    {
        navn: "The Taco Truck",
        billede: "./assets/img/taco-truck-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Thypisk Pizza",
        billede: "./assets/img/thypisk-pizza-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Mikuna",
        billede: "./assets/img/mikuna-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "StreetBites Thai",
        billede: "./assets/img/street-bites-thai-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Den grønne fe",
        billede: "./assets/img/den-groenne-fe-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Salke",
        billede: "./assets/img/salke-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Bryggen",
        billede: "./assets/img/bryggen-madOgDrikke.webp",
        favorit: false
    }
]

const gemtMad = localStorage.getItem('madogDrikke');
if (gemtMad) {
    const gemteMad = JSON.parse(gemtMad);
    madogDrikke.forEach(m => {
        const match = gemteMad.find(g => g.navn === m.navn);
        if (match) m.favorit = match.favorit;
    });
}

//Fanger .spisesteder-wrap i HTML'en
const spisestederEl = document.querySelector('.spisesteder-wrap');

if (spisestederEl) {
    spisestederEl.innerHTML = "";

    madogDrikke.forEach(madbod => {
        const card = document.createElement('div');
        card.classList.add('spisested');

        card.innerHTML = `
        <img src="${madbod.billede}" alt="billede af ${madbod.navn}">
        <h2>${madbod.navn}</h2>
        <i class="${madbod.favorit ? 'fa-solid' : 'fa-regular'} fa-heart" data-navn="${madbod.navn}"></i>
        `;

        // Føj til favoritter
        card.querySelector('i').addEventListener('click', (e) => {
            e.target.classList.toggle('fa-regular');
            e.target.classList.toggle('fa-solid');

            const spisestedObj = madogDrikke.find(m => m.navn === e.target.dataset.navn);
            spisestedObj.favorit = !spisestedObj.favorit;

        });

        spisestederEl.appendChild(card);

    })
}

// Gør det samme med barer
const barer = [
    {
        navn: "Bryghusbar",
        billede: "./assets/img/bryghusbar-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Skovbar",
        billede: "./assets/img/skovbar-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Havebar",
        billede: "./assets/img/havebar-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Cocktailbar",
        billede: "./assets/img/cocktailbar-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Vin- og Whisky- <br> loungen",
        billede: "./assets/img/vin-og-whiskylounge-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Vadebar",
        billede: "./assets/img/vadebar-madOgDrikke.webp",
        favorit: false
    },
    {
        navn: "Bærbar",
        billede: "./assets/img/baerbar-madOgDrikke.webp",
        favorit: false
    }
]


const gemtBarer = localStorage.getItem('barer');
if (gemtBarer) {
    const gemteBarer = JSON.parse(gemtBarer);
    barer.forEach(b => {
        const match = gemteBarer.find(g => g.navn === b.navn);
        if (match) b.favorit = match.favorit;
    });
}
const barerEl = document.querySelector('.barer-wrap');

if (barerEl) {
    barerEl.innerHTML = "";

    barer.forEach(bar => {
        const card = document.createElement('div');
        card.classList.add('baren');

        card.innerHTML = `
        <img src="${bar.billede}" alt="${bar.navn}">
        <h2>${bar.navn}</h2>
       <i class="${madbod.favorit ? 'fa-solid' : 'fa-regular'} fa-heart" data-navn="${bar.navn}"></i>
        `

        card.querySelector('i').addEventListener('click', (e) => {
            e.target.classList.toggle('fa-regular');
            e.target.classList.toggle('fa-solid');

            const barObj = barer.find(b => b.navn === e.target.dataset.navn);
            barObj.favorit = !barObj.favorit;

        });

        barerEl.appendChild(card);
    })
}


// musik program 

const kunstnere = [
    // torsdag
    {
        navn: "ORA",
        scene: "Kirken",
        tid: "15:30",
        dag: "torsdag",
        kategori: "musik",
        billede: "ORA.webp",
        favorit: false

    },
    {
        navn: "Uden ord",
        scene: "Skovscenen",
        tid: "16:00",
        dag: "torsdag",
        kategori: "musik",
        billede: "UDENORD.webp",
        favorit: false
    },
    {
        navn: "Fællessang",
        scene: "Havescenen",
        tid: "17:00",
        dag: "torsdag",
        kategori: "musik",
        billede: "FAELLESSANG.webp",
        favorit: false
    },
    {
        navn: "Elias Rønnenfeldt",
        scene: "Skovscenen",
        tid: "17:05",
        dag: "torsdag",
        kategori: "musik",
        billede: "ELIAS.webp",
        favorit: false
    },
    {
        navn: "Enes",
        scene: "Havescenen",
        tid: "18:45",
        dag: "torsdag",
        kategori: "musik",
        billede: "ENES.webp",
        favorit: false
    },
    {
        navn: "Brimheim",
        scene: "Skovscenen",
        tid: "21:15",
        dag: "torsdag",
        kategori: "musik",
        billede: "BRIMHEIM.webp",
        favorit: false
    },
    {
        navn: "Faza",
        scene: "Havescenen",
        tid: "21:45",
        dag: "torsdag",
        kategori: "musik",
        billede: "FAZA.webp",
        favorit: false
    },
    {
        navn: "Emma Sehested Høeg",
        scene: "Skovscenen",
        tid: "23:00",
        dag: "torsdag",
        kategori: "musik",
        billede: "EMMASEHESTEDHØEG.webp",
        favorit: false
    },

    //   fredag
    {
        navn: "Karoline Funder",
        scene: "Kirken",
        tid: "15:30",
        dag: "fredag",
        kategori: "musik",
        billede: "KAROLINE.webp",
        favorit: false
    },
    {
        navn: "Bette",
        scene: "Skovscenen",
        tid: "17:15",
        dag: "fredag",
        kategori: "musik",
        billede: "BETTE.webp",
        favorit: false
    },
    {
        navn: "Østen",
        scene: "Havescenen",
        tid: "18:45",
        dag: "fredag",
        kategori: "musik",
        billede: "OESTEN.webp",
        favorit: false
    },
    {
        navn: "Baest",
        scene: "Skovscenen",
        tid: "20:15",
        dag: "fredag",
        kategori: "musik",
        billede: "BAEST.webp",
        favorit: false
    },
    {
        navn: "Dayyani",
        scene: "Havescenen",
        tid: "21:45",
        dag: "fredag",
        kategori: "musik",
        billede: "DAYYANI.webp",
        favorit: false
    },
    {
        navn: "School of X",
        scene: "Skovscenen",
        tid: "23:15",
        dag: "fredag",
        kategori: "musik",
        billede: "SCHOOLOFX.webp",
        favorit: false
    },
    {
        navn: "Paydar",
        scene: "Havescenen",
        tid: "01:00",
        dag: "fredag",
        kategori: "musik",
        billede: "PAYDAR.webp",
        favorit: false
    },

    // Lørdag
    {
        navn: "Lea Kampmann",
        scene: "kirken",
        tid: "15:30",
        dag: "lørdag",
        kategori: "musik",
        billede: "LEA.webp",
        favorit: false
    },
    {
        navn: "Tamara Mneney",
        scene: "Skovscenen",
        tid: "16:00",
        dag: "lørdag",
        kategori: "musik",
        billede: "TAMRARAMNENEY.webp",
        favorit: false
    },
    {
        navn: "Mekdes",
        scene: "Havescenen",
        tid: "17:30",
        dag: "lørdag",
        kategori: "musik",
        billede: "MEKDES.webp",
        favorit: false
    },
    {
        navn: "Von Quar",
        scene: "Skovscenen",
        tid: "19:15",
        dag: "lørdag",
        kategori: "musik",
        billede: "VONQUAR.webp",
        favorit: false
    },
    {
        navn: "Def Mama Def",
        scene: "Havescenen",
        tid: "20:45",
        dag: "lørdag",
        kategori: "musik",
        billede: "DEFMAMADEF.webp",
        favorit: false
    },
    {
        navn: "100% WET",
        scene: "Skovscenen",
        tid: "22:15",
        dag: "lørdag",
        kategori: "musik",
        billede: "100WET.webp",
        favorit: false
    },
    {
        navn: "Kind mod kind",
        scene: "Havescenen",
        tid: "23:30",
        dag: "lørdag",
        kategori: "musik",
        billede: "KINDMODKIND.webp",
        favorit: false
    },
    {
        navn: "Tacobitch",
        scene: "Skovscenen",
        tid: "00:01",
        dag: "lørdag",
        kategori: "musik",
        billede: "TACOBITCH.webp",
        favorit: false
    },

    //   Kunst
    {
        navn: "Bjørg Dyg Nielsen",
        scene: "",
        tid: "Hele dagen",
        dag: "fredag",
        kategori: "kunst",
        billede: "BJOERG.webp",
        favorit: false
    },
    {
        navn: "Traad for traad",
        scene: "",
        tid: "21:Hele dagen",
        dag: "fredag",
        kategori: "kunst",
        billede: "TRAADFORTRAAD.webp",
        favorit: false
    },
    {
        navn: "Werk",
        scene: "",
        tid: "16:00",
        dag: "fredag",
        kategori: "kusnt",
        billede: "WERK.webp",
        favorit: false
    },
    {
        navn: "Solvej Mia",
        scene: "",
        tid: "Hele dagen",
        dag: "fredag",
        kategori: "kunst",
        billede: "SOLVEJMIA.webp",
        favorit: false
    },

    // udflugter
    {
        navn: "Thisted Bryghus",
        scene: "Hovedscenen",
        tid: "21:00",
        dag: "fredag",
        kategori: "udflugter",
        billede: "THISTEDBRYGHUS.webp",
        favorit: false
    },
    {
        navn: "Morgendyb i Limfjorden",
        scene: "Hovedscenen",
        tid: "21:00",
        dag: "fredag",
        kategori: "udflugter",
        billede: "morgendyp_favorit.webp",
        favorit: false
    },
    {
        navn: "Thy whiskey på Gyrup gård",
        scene: "Hovedscenen",
        tid: "21:00",
        dag: "fredag",
        kategori: "udflugter",
        billede: "THYWHISKY.webp",
        favorit: false
    },
    {
        navn: "'Kærestebreve fra thy' i Agger bio",
        scene: "Hovedscenen",
        tid: "21:00",
        dag: "fredag",
        kategori: "udflugter",
        billede: "AGGERBIO.webp",
        favorit: false
    },
    {
        navn: "Surfskole",
        scene: "Hovedscenen",
        tid: "21:00",
        dag: "fredag",
        kategori: "udflugter",
        billede: "surfskole.webp",
        favorit: false
    },
    {
        navn: "Det nordatlantiske fyr i Hanstholm",
        scene: "Hovedscenen",
        tid: "21:00",
        dag: "fredag",
        kategori: "udflugter",
        billede: ".webp",
        favorit: false
    },
    //   Andet
    {
        navn: "sex & samfund",
        scene: "Campingpladsen",
        tid: "13:30",
        dag: "fredag",
        kategori: "andet",
        billede: "SEXOGSAMFUND.webp",
        favorit: false
    },
    {
        navn: "Silent disco",
        scene: "silent disco",
        tid: "00:00",
        dag: "fredag",
        kategori: "andet",
        billede: "SILENTDISCO.webp",
        favorit: false
    },
]

// Hent gemt favorit-status fra localStorage
const gemt = localStorage.getItem('kunstnere');
if (gemt) {
    const gemteKunstnere = JSON.parse(gemt);
    kunstnere.forEach(k => {
        const match = gemteKunstnere.find(g => g.navn === k.navn);
        if (match) k.favorit = match.favorit;
    });
}

// fang .programmer i HTML
const programEl = document.querySelector('.programmer');
// Tøm containeren

if (programEl) {
    programEl.innerHTML = '';
    // Løb igennem hvert kunstner-objekt i arrayet
    kunstnere.forEach(kunstner => {
        // Lav en ny div
        const card = document.createElement('div');
        // Giv div'en klassen "program"
        card.classList.add('program');

        // Put navn, scene, tid og hjerte-ikon ind i div'en
        card.innerHTML = `
        <a href="./kunstner.html">
     <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
      <div class="kunstnerText">
      <h2>${kunstner.navn}</h2>
      <p>${kunstner.scene}</p>
      <p>${kunstner.tid}</p>
      </div>
      <i class="${kunstner.favorit ? 'fa-solid' : 'fa-regular'} fa-heart" data-navn="${kunstner.navn}"></i></a>
    `;

        // favorit knap
        card.querySelector('i').addEventListener('click', (e) => {
            e.target.classList.toggle('fa-regular');
            e.target.classList.toggle('fa-solid');

            const kunstnerObj = kunstnere.find(k => k.navn === e.target.dataset.navn);
            kunstnerObj.favorit = !kunstnerObj.favorit;

            localStorage.setItem('kunstnere', JSON.stringify(kunstnere));
        });


        // Tilføj div'en til containeren
        programEl.appendChild(card);
    });
}

// Dropdown

const kategoriLabels = {
    alle: "Alle",
    musik: "Musik",
    udflugter: "Udflugter",
    kunst: "Kunst",
    andet: "Andet",
    madogdrik: "Spisesteder og barer"
};

let valgt = "alle";

const knap = document.getElementById("dropdownKnap");
const menu = document.getElementById("menu");
const pil = document.getElementById("pil");
const valgtLabel = document.getElementById("valgt");

// Åbn/luk menu
if (knap) {
    knap.addEventListener("click", () => {
        menu.classList.toggle("synlig");
        pil.classList.toggle("aaben");
    });
}

// Luk menu hvis man klikker udenfor
document.addEventListener("click", (e) => {
    if (!knap.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("synlig");
        pil.classList.remove("aaben");
    }
});

document.querySelectorAll(".menuItem").forEach((item) => {
    item.addEventListener("click", () => {
        valgt = item.dataset.value;

        // Opdater tekst og farve på knappen, ved at skifte klassen
        valgtLabel.textContent = kategoriLabels[valgt];
        knap.classList.remove("alle", "musik", "udflugter", "kunst", "andet", "madogdrik");
        knap.classList.add(valgt);

        // Luk menu
        menu.classList.remove("synlig");
        pil.classList.remove("aaben");

        // Filtrer kunstnere
        const filtreret = valgt === "alle"
            ? kunstnere
            : kunstnere.filter(k => k.kategori === valgt);

        // Ryd listen og vis de filtrerede kunstnere, spisesteder og barer
        programEl.innerHTML = '';
        filtreret.forEach(kunstner => {
            const card = document.createElement('div');
            card.classList.add('program');
            card.innerHTML = `
        <a href="./kunstner.html">
     <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
      <div class="kunstnerText">
      <h2>${kunstner.navn}</h2>
      <p>${kunstner.scene}</p>
      <p>${kunstner.tid}</p>
      </div>
      <i class="${kunstner.favorit ? 'fa-solid' : 'fa-regular'} fa-heart" data-navn="${kunstner.navn}"></i></a>
            `;
            programEl.appendChild(card);
        });
    });
});

// filtre dage

let valgtDag = "alle";

document.querySelectorAll(".dag").forEach((dagKnap) => {
    dagKnap.addEventListener("click", () => {
        if (valgtDag === dagKnap.dataset.value) {
            valgtDag = "alle";
            document.querySelectorAll(".dag").forEach(d => d.classList.remove("aktiv"));
        } else {
            valgtDag = dagKnap.dataset.value;
            document.querySelectorAll(".dag").forEach(d => d.classList.remove("aktiv"));
            dagKnap.classList.add("aktiv");
        }

        // Filtrer på både dag og kategori
        const filtreret = kunstnere.filter(k => {
            const dagMatch = valgtDag === "alle" || k.dag === valgtDag;
            const kategoriMatch = valgt === "alle" || k.kategori === valgt;
            return dagMatch && kategoriMatch;
        });

        // Ryd og vis
        programEl.innerHTML = '';
        filtreret.forEach(kunstner => {
            const card = document.createElement('div');
            card.classList.add('program');
            card.innerHTML = `
        <a href="./kunstner.html">
     <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
      <div class="kunstnerText">
      <h2>${kunstner.navn}</h2>
      <p>${kunstner.scene}</p>
      <p>${kunstner.tid}</p>
      </div>
      <i class="${kunstner.favorit ? 'fa-solid' : 'fa-regular'} fa-heart" data-navn="${kunstner.navn}"></i></a>
            `;
            programEl.appendChild(card);
        });
    });
});

// FAVORITTER
const favoritEl = document.querySelector('.favoritter');
console.log(favoritEl)

if (favoritEl) {
    const gemt = localStorage.getItem('kunstnere')
    const kunstnere = JSON.parse(gemt)

    const favoritter = kunstnere.filter(k => k.favorit === true);

    favoritter.forEach(kunstner => {
        const card = document.createElement('div');
        card.classList.add('program');
        card.innerHTML = `
            <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
            <div class="kunstnerText">
                <h2>${kunstner.navn}</h2>
                <p>${kunstner.scene}</p>
                <p>${kunstner.tid}</p>
            </div>
            <i class="${kunstner.favorit ? 'fa-solid' : 'fa-regular'} fa-heart" data-navn="${kunstner.navn}"></i>
        `;
        favoritEl.appendChild(card);
    });
}

// Favoritter - spisesteder
const favoritMadEl = document.querySelector('.favoritter');

if (favoritMadEl) {
    const gemtMad = localStorage.getItem('madogDrikke');
    const madogDrikke = JSON.parse(gemtMad);

    if (madogDrikke) {
        const favoritMad = madogDrikke.filter(m => m.favorit === true);

        favoritMad.forEach(mad => {
            const card = document.createElement('div');
            card.classList.add('spisested');
            card.innerHTML = `
                <img src="${mad.billede}" alt="${mad.navn}">
                <h2>${mad.navn}</h2>
                <i class="fa-solid fa-heart" data-navn="${mad.navn}"></i>
            `;
            favoritMadEl.appendChild(card);
        });
    }

    // Favoritter - barer
    const gemtBarer = localStorage.getItem('barer');
    const barer = JSON.parse(gemtBarer);

    if (barer) {
        const favoritBarer = barer.filter(b => b.favorit === true);

        favoritBarer.forEach(bar => {
            const card = document.createElement('div');
            card.classList.add('baren');
            card.innerHTML = `
                <img src="${bar.billede}" alt="${bar.navn}">
                <h2>${bar.navn}</h2>
                <i class="fa-solid fa-heart" data-navn="${bar.navn}"></i>
            `;
            favoritMadEl.appendChild(card);
        });
    }
}



// BILLETTER

const festivalBtn = document.querySelector('.festivalBtn');
if (festivalBtn) {
    festivalBtn.addEventListener('click', () => {
        document.querySelector('#festival').scrollIntoView({ behavior: 'smooth' });
    });


    document.querySelector('.festivalBtn').addEventListener('click', () => {
        document.querySelector('#festival').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.campingBtn').addEventListener('click', () => {
        document.querySelector('#camping').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.udstyrBtn').addEventListener('click', () => {
        document.querySelector('#udstyr').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.transportBtn').addEventListener('click', () => {
        document.querySelector('#transport').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.udflugterBtn').addEventListener('click', () => {
        document.querySelector('#udflugter').scrollIntoView({ behavior: 'smooth' });
    });
}


// NYHEDER

const nyheder = [
    {
        img: "BILLETSVINDEL.webp",
        dato: "23. Juli 2025",
        overskrift: "Pas på falske billetter – køb altid gennem officielle kanaler",
        tekst: "Vi har desværre modtaget henvendelser om personer, der er blevet snydt i forbindelse med billetkøb til Alive Festival 2025. Det er vi rigtig ærgerlige over, og vi vil derfor gøre opmærksom på, at der i øjeblikket florerer svindel med videresalg af billetter. Vi kan desværre ikke hjælpe, hvis du har købt billet via andre kanaler ",
    }, {
        img: "OPBYGNING.webp",
        dato: "23. Juli 2025",
        overskrift: "Opbygningen er i fuld gang!",
        tekst: "Vores frivillige knokler med lynets hast for at forvandle Christianshave til Alive Festival 2025. Der bliver bygget, hygget og flyttet i bedste Alive-ånd – i morgen går det løs, og vi glæder os helt vildt! Det er sidste chance for at købe partoutbillet og få den fulde festivaloplevelse.",
    }, {
        img: "silent_disco_forside.webp",
        dato: "15. Juli 2025",
        overskrift: "Silent Disco på Alive Festival 2025",
        tekst: "Glæd dig til en helt særlig Silent Disco-oplevelse, når vi inviterer til natlige dansegulve under stjernerne – nu med live DJs hver aften og dobbelt så mange headsets som sidste år! Når du har sikret dig billet, henter du dit headset i Silent Disco-boden, og så er du klar til at danse hele natten lang.",
    }, {
        img: "billetter-nyheder.webp",
        dato: "5. Juni 2025",
        overskrift: "Få partoutbilletter tilbage til Alive Festival 2025!",
        tekst: "Vi har store og glædelige nyheder: Der er nu kun få partoutbilletter tilbage til Alive Festival 2025! Vil du sikre dig adgang til alle tre dage med musik, kunst og udflugter i Thy, så er det nu, du skal slå til. Har du kun tid til én dag? Så kan du også købe endagsbillet til ",
    }, {
        img: "KIRKEKONCERTER.webp",
        dato: "30. maj 2025",
        overskrift: "Alive Festival løfter sløret for årets kirkekoncerter",
        tekst: "Alive Festival offentliggør tre navne til kirkekoncerterne på årets festival. Kirkekoncerterne er et unikt format, hvor gæsterne får mulighed for særlige musikalske oplevelser i rammer, der indbyder til ro og eftertænksomhed. Formatet blev introduceret i 2022 og har siden udviklet sig til en central del af Alive-programmet. ",
    }, {
        img: "nye-musiknavne-nyhed.webp",
        dato: "14. marts 2025",
        overskrift: "Fem nye musiknavne til festivalplakaten!",
        tekst: "Fem gode fredagsnyheder! Vi glæder os til at byde velkommen til School of X, Def MaMa Def, Faza, Uden Ord og 100%WET på årets festival. Læs mere om dem – og resten af programmet med kunst, musik og udflugter – under ‘Program’.",
    }, {
        img: "FRIVILLIGTILMEDLING.webp",
        dato: "3. marts 2025",
        overskrift: "Frivilligtilmeldingen er åben",
        tekst: "Der er mange måder at opleve Alive Festival på. En af dem er at være en del af det fantastiske frivillighold omkring festivalen. Hop ind og læs mere om, hvordan du bliver frivillig til årets festival på siden ‘Bliv frivillig’.",
    }
]

// fang .alleNyheder i HTML
const nyhedsEl = document.querySelector('.alleNyheder');

if (nyhedsEl) {
    nyhedsEl.innerHTML = '';
    // Løb igennem hvert nyheds-objekt i arrayet
    nyheder.forEach(nyhed => {
        const card = document.createElement('div');
        card.classList.add('nyhed');
        card.innerHTML = `
            <img src="./assets/img/${nyhed.img}">
            <p class="dato">${nyhed.dato}</p>
            <h2>${nyhed.overskrift}</h2>
                <p class="tekst">${nyhed.tekst}</p>
    `;
        nyhedsEl.appendChild(card);
    })
}