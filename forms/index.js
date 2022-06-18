function register() {
    alert("Sending Json");
    const form = document.forms[0];
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const formDataAsObject = {
        email: email,
        password: password
    };
    const json = JSON.stringify(formDataAsObject);
    alert(json)
    xhr.send(json);
}