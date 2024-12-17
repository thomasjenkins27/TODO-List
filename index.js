let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)  //run removeItem function first before continuing

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}


function loadItems() {
    const  oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
}

function saveItems() {
    const stringItems = JSON.stringify(items);  //convert to string first
    localStorage.setItem(storageKey, stringItems)  //then store to local 
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
}
items.pust(value)
renderItems()
input.value = ""
saveItems()

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)
