console.log("index ok")

// =============================================
// async function getData() {
// try {
//     // Chercher les données depuis un fichier json local
//     const response = await fetch('./datas/MOCK_DATA.json')
//     // Tester si la réponse est ok
//     if (response.ok) {
//         // On récupère les données
//         const data = await response.json()
//         // Parcourir le tableau des données
//         data.map(post => {
//             // Créer une ligne du tableau
//             let tr = document.createElement('tr')
//             // Créer 4 cellules (td)
//             let id = document.createElement('td')
//             let nom = document.createElement('td')
//             let prenom = document.createElement('td')
//             let email = document.createElement('td')         
//             let role = document.createElement ('td')
//             // Assigner les valeurs convenanbles dans chaque cellule
//             id.textContent = post.id
//             nom.textContent = post.prenom
//             prenom.textContent = post.nom
//             email.textContent = post.email
//             role.textContent = post.role
//             // Ajouter les 4 éléments <td> à leur parent <tr>
//             tr.appendChild(id)
//             tr.appendChild(nom)
//             tr.appendChild(prenom)
//             tr.appendChild(email)
//             tr.appendChild (role)
//             // Cibler l'élement <tbody> via son ID et lui ajouter l'élement <tr>
//             document.getElementById('tb').appendChild(tr)
//         })

//     }
// } catch (e) {
//     console.log(e);
// }
// }
// getData()
// ==========================================================================
// function données() {
//   const users = localStorage.getItem('users');

//     console.log(données)
//  }
//  const name = JSON.parse(window.localStorage.getItem("best-console"))?.name; 

// const données = localStorage.getItem("users")
// if (données) {

// } else {

// }
async function getData() {
    try {
        const response = await fetch("./datas/MOCK_DATA.json");

        if (response.ok) {
            const data = await response.json();

            // Stocke les données dans le stockage local avec la clé "users"
            localStorage.setItem("users", JSON.stringify(data));

            // Affiche les données
            données(data);
        }
    } catch (e) {
        console.log(e);
    }
}

function données(data) {
    const tableBody = document.getElementById("tb");

    data.forEach((post) => {
        let tr = document.createElement("tr");

        let id = document.createElement("td");
        let nom = document.createElement("td");
        let prenom = document.createElement("td");
        let email = document.createElement("td");
        let role = document.createElement("td");

        id.textContent = post.id;
        nom.textContent = post.nom;
        prenom.textContent = post.prenom;
        email.textContent = post.email;
        role.textContent = post.role;

        tr.appendChild(id);
        tr.appendChild(nom);
        tr.appendChild(prenom);
        tr.appendChild(email);
        tr.appendChild(role);

        tableBody.appendChild(tr);
    });
}

// Récupérer les données
const recupDonnées = localStorage.getItem("users");
if (recupDonnées) {
    // Si  données sont trouvées
    données(JSON.parse(recupDonnées));
} else {
    // Srécupérer les données via fetch et les stocker
    getData();
}


//   ==================pour faire une recherche input mis dans html=========================
// let users = []
// if (localStorage.getItem("users")) {
//     users = JSON.parse(localStorage.getItem("users"))
// } else {
//     users = await getDatas(usersDatasurl)
//     localStorage.setItem("users", JSON.stringify(users))
// }

// if (users) {
//     tb(users)
//     const searchInput = document.querySelector("#searchInput")
//     searchInput.addEventListener("keyup", (event) => {
//         console.log(event.target.value);
//         const searchValue = event.target.value
//         const filteredTab = users.filter((Element) => Element.nom.toLowercase().includes(searchValue) ||users.prenom.toLowercase().includes(searchValue))
        
//         feedTbody(filteredUsers)

//     })

//     const tab = [12, 23, 34, 45]
//     const searchValue = 23
//     const filteredTab = tab.filter((Element) => Element == searchValue)
//     console.log(filter);