
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
     <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
      <div class="kunstnerText">
      <h2>${kunstner.navn}</h2>
      <p>${kunstner.scene}</p>
      <p>${kunstner.tid}</p>
      </div>
      <i class="fa-regular fa-heart" data-navn="${kunstner.navn}"></i>
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
        knap.classList.remove("alle", "musik", "udflugter", "kunst", "andet");
        knap.classList.add(valgt);

        // Luk menu
        menu.classList.remove("synlig");
        pil.classList.remove("aaben");

        // Filtrer kunstnere
        const filtreret = valgt === "alle"
            ? kunstnere
            : kunstnere.filter(k => k.kategori === valgt);

        // Ryd listen og vis de filtrerede kunstnere
        programEl.innerHTML = '';
        filtreret.forEach(kunstner => {
            const card = document.createElement('div');
            card.classList.add('program');
            card.innerHTML = `
     <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
      <div class="kunstnerText">
      <h2>${kunstner.navn}</h2>
      <p>${kunstner.scene}</p>
      <p>${kunstner.tid}</p>
      </div>
      <i class="fa-regular fa-heart"></i>
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
     <img src="./assets/img/${kunstner.billede}" alt="billede af ${kunstner.navn}">
      <div class="kunstnerText">
      <h2>${kunstner.navn}</h2>
      <p>${kunstner.scene}</p>
      <p>${kunstner.tid}</p>
      </div>
      <i class="fa-regular fa-heart"></i>
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
            <i class="fa-solid fa-heart data-navn="${kunstner.navn}"></i>
        `;
        favoritEl.appendChild(card);
    });
}

// BILLETTER

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