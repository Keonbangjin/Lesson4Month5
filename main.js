const inputText = document.getElementById("inputText");
const button = document.getElementById("btn");
const valueList = document.getElementById("valueList");

button.addEventListener("click", () => {
    let inputValue = inputText.value.trim();
    if (inputValue !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = inputValue;
        valueList.appendChild(listItem);
        inputText.value = '';
    }
});