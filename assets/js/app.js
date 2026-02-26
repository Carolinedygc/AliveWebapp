// Dropdown menu
function toggleMenu() {
    let getMenu = document.querySelector('.nav-list');
    getMenu.classList.toggle('show');
}

let getBurgerMenu = document.querySelector("#burgerMenuIcon");
getBurgerMenu.addEventListener('click', toggleMenu);




// musik program 

let musikProgramTorsdag = [
    {
        kunstner: "ORA",
        lokation: "Kirken",
        tidspunkt: "15:30",
        dag: "torsdag"
    },
    {
        kunster: "Uden ord",
        lokation: "Skovscenen",
        tidspunkt: "16:00",
        dag: "torsdag"
    },
    {
        kunstner: "Fællessang",
        lokation: "scenen",
        tidspunkt: "17:00",
        dag: "torsdag"
    },
    {
        kunstner: "Elias Rønnenfeldt",
        lokation: "scenen",
        tidspunkt: "17:05",
        dag: "torsdag"
    },
    {
        kunstner: "Enes",
        lokation: "scenen",
        tidspunkt: "18:45",
        dag: "torsdag"
    },
    {
        kunstner: "Brimheim",
        lokation: "scenen",
        tidspunkt: "20:15",
        dag: "torsdag"
    },
    {
        kunstner: "Faza",
        lokation: "scenen",
        tidspunkt: "21:45",
        dag: "torsdag"
    },
    {
        kunstner: "Emma Sehested Høeg",
        lokation: "scenen",
        tidspunkt: "23:00",
        dag: "torsdag"
    }
]

let musikProgramLørdag = [
    {
        kunstner: "Karoline Funder",
        lokation: "Kirken",
        tidspunkt: "15:30",
        dag: "fredag"
    },
    {
        kunster: "Bette",
        lokation: "Skovscenen",
        tidspunkt: "17:45",
        dag: "fredag"
    },
    {
        kunstner: "Østen",
        lokation: "scenen",
        tidspunkt: "18:45",
        dag: "fredag"
    },
    {
        kunstner: "Baest",
        lokation: "scenen",
        tidspunkt: "20:05",
        dag: "fredag"
    },
    {
        kunstner: "Dayyani",
        lokation: "scenen",
        tidspunkt: "21:45",
        dag: "fredag"
    },
    {
        kunstner: "School of X",
        lokation: "scenen",
        tidspunkt: "23:15",
        dag: "fredag"
    },
    {
        kunstner: "Paydar",
        lokation: "scenen",
        tidspunkt: "01:00",
        dag: "fredag"
    }
]

let musikProgramLoerdag = [
    {
        kunstner: "ORA",
        lokation: "Kirken",
        tidspunkt: "15:30",
        dag: "Lørdag"
    },
    {
        kunster: "Uden ord",
        lokation: "Skovscenen",
        tidspunkt: "16:00",
        dag: "Lørdag"
    },
    {
        kunstner: "Fællessang",
        lokation: "scenen",
        tidspunkt: "17:00",
        dag: "Lørdag"
    },
    {
        kunstner: "Elias Rønnenfeldt",
        lokation: "scenen",
        tidspunkt: "17:05",
        dag: "Lørdag"
    },
    {
        kunstner: "Enes",
        lokation: "scenen",
        tidspunkt: "18:45",
        dag: "Lørdag"
    },
    {
        kunstner: "Brimheim",
        lokation: "scenen",
        tidspunkt: "20:15",
        dag: "Lørdag"
    },
    {
        kunstner: "Faza",
        lokation: "scenen",
        tidspunkt: "21:45",
        dag: "Lørdag"
    },
    {
        kunstner: "Emma Sehested Høeg",
        lokation: "scenen",
        tidspunkt: "23:00",
        dag: "Lørdag"
    }
]