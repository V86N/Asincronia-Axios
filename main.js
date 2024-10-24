
//1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder

//Imprimir por consola la lista (array) de usuarios.

axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res.data)
        //Imprimir por consola solo el nombre de los usuarios.
        res.data.forEach(user => {
            console.log(user.name);
        });
    });

//Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.

let users;
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        users = res.data
        console.log(users)
    });

//Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.

function showUsers() {
    const userDiv = document.getElementById("user")
    console.log(userDiv);
    users.forEach((user) => {
        userDiv.innerHTML += `<p>${user.name}</p>`
        console.log(user.name)
    })

}

// Crea un botón que cuando lo cliques ejecute la función que habías creado

document.getElementById("btn").addEventListener("click", showUsers)

//Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML)


