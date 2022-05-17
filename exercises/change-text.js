function changeText() {
    const inputTextEle = document.querySelector("#inputText")
    const textElement = document.querySelector("#text")
    textElement.innerHTML = inputTextEle.value
}
