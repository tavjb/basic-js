
let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/user/1', true);
request.onload = function() {
    if (this.status == 200) {
        showResponse();
    } else {
        alert("Failed to fetch data from server!");
    }
}
request.send();

function showResponse() {
    const p = document.createElement("p");
    p.innerHTML = request.responseText
    const body = document.querySelector("body");
    body.appendChild(p);
}