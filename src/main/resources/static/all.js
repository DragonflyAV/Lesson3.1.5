const url = "http://localhost:7070/rest"



// let roleArray = (options) => {
//     let array = []
//     for (let i = 0; i < options.length; i++) {
//         if (options[i].selected) {
//             let role = {id: options[i].value}
//             array.push(role)
//         }
//     }
//     return array
// }



// SHOW ALL
let result = ''
const show = (articulos) => {
    console.log(articulos);
    if (articulos.length > 0) {
    articulos.forEach(articulo => {
        result += "<tr>";
        result += "<td>" + articulo.id + "</td>";
        result += "<td>" + articulo.username + "</td>";
        result += "<td>" + articulo.age + "</td>";
        result += "<td>" + articulo.email + "</td>";
        result += "<td>";
        for (i in articulo.roles) {
            for (j in articulo.roles[i].name) {
                result += articulo.roles[i].name[j];
            }
            result += " ";
        };
        result += "</td>";
        result += "<td><a class='btn btn-info btnEdit text-white'>Edit</a></td>";
        result += "<td><a class='btn btn-danger btnDelete text-white'>Delete</a></td></tr>";
    })
        document.getElementById("data").innerHTML = result
}}

fetch(url)
    .then(response => response.json())
    .then(data => show(data))
    .catch(error => console.log(error))




// const on = (element, event, selector, handler) => {
//     element.addEventListener(event, e => {
//         if (e.target.closest(selector)) {
//             handler(e)
//         }
//     })
// }

// // DELETE USER
// on(document, 'click', '.btnDelete', e => {
//     alertify.confirm("This is a confirm dialog",
//         function () {
//         fetch(url+id, {
//             method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(() => location.reload())
//         },
//         function () {
//         alertify.error('CANCEL')
//         })
// })
//
// // EDIT USER
// let idForm = 0
// on(document, 'click', '.btnEdit', e => {
//     const line = e.target.parentNode.parentNode
//     idForm = line.children[0].innerHTML
//     const usernameForm = line.children[1].innerHTML
//     const ageForm = line.children[2].innerHTML
//     const emailForm = line.children[3].innerHTML
//     const rolesForm = line.children[4].innerHTML
//     username.value = usernameForm
//     age.value = ageForm
//     email.value = emailForm
//     roles.value = rolesForm
//     option = 'EDIT'
//     modalArticleedit.show()
// })
//
// formArticle.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if (option == 'ADD NEW USER') {
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({
//                 username: username.value,
//                 age: age.value,
//                 email: email.value,
//                 password: password.value,
//                 roles: roles.value
//             })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 const newArticle = []
//                 newArticle.push(data)
//                 show(newArticle)
//             })
//     }
//     if (option == 'EDIT') {
//         fetch(url+idForm, {
//             method: 'PATCH'
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({
//                 username: username.value,
//                 age: age.value,
//                 email: email.value,
//                 password: password.value,
//                 roles: roles.value
//             })
//         })
//             .then(response => response.json())
//             .then(response => location.reload())
//     }
//     modalArticle.hide()
// })
