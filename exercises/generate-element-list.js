let latest = 0

function addNumber() {
    const list = document.querySelector("#numbers")
    let numberEle = document.createElement('li');
    numberEle.innerHTML = ++latest
    list.appendChild(numberEle)
}