"use strict";

function loadItems(){
    return fetch("data/data.json")
    .then(response => response.json())
    .then(json => json.items)
}

function displayItems(items){
    const container = document.querySelector(".items")
    container.innerHTML = items.map(item => controlHTML(item)).join('') 
}

function controlHTML(items){
    return `
    <li class="show">
        <img src=${items.image}>
        <span>${items.gender}, ${items.size}</span>
    </li>
  `
}

function onButtonClick(event, items){
    const key = event.target.dataset.key
    const value = event.target.dataset.value

    if (key === undefined){
        return
    }
    displayItems(items.filter(item=>item[key]===value))
}

function setEventListeners(items){
    const logo = document.querySelector('.logo')
    const buttons = document.querySelector('.buttons')
    logo.addEventListener("click",() => displayItems(items));
    buttons.addEventListener("click", event => onButtonClick(event,items))
}

loadItems()
.then(items=>{
    displayItems(items)
    setEventListeners(items)
})




