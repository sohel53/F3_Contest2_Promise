
let btn = document.getElementById('btn');
let container = document.getElementById('container');

btn.addEventListener('click', () => {
    promiseAPI1()
    .then(() => promiseAPI2())
    .then(() => promiseAPI3())
    .catch((e) => console.log(e));
});

function promiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                console.table("data", data)
                container.innerHTML = `<h3>First API data</h3>`
                container.innerHTML += "<table>" + JSON.stringify(data) + "</table>";
                resolve(true);
            })
            .catch((e) => reject(e));
        }, 1000);
    })
}
function promiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.table("data", data)
                container.innerHTML = `<h3>Secound API data</h3>`
                container.innerHTML += "<table>" + JSON.stringify(data) + "</table>";
                resolve(true);
            })
            .catch((e) => reject(e));
        }, 2000);
    })
}
function promiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
            .then((res) => res.json())
            .then((data) => {
                console.table("data", data)
                container.innerHTML = `<h3>Third API data</h3>`
                container.innerHTML += "<table>" + JSON.stringify(data) + "</table>";
                resolve(true);
            })
            .catch((e) => reject(e));
        }, 3000);
    })
}