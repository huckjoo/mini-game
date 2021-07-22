"use strict";

function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json=>json.items)
}

function controlHTML(items){
    return `
    <li class="item">
          <img class="item__img" src=${items.image} />
          <span class="item__description">${items.gender}, ${items.size}</span>
        </li>
    `
}

function showItems(items){
    const container = document.querySelector(".items");
    container.innerHTML = items.map(item=>controlHTML(item)).join('');
}

function filterItems(items){
    const buttons = document.querySelector(".wholeBtns");
    buttons.addEventListener("click",event=>filterItem(event,items));
}
function filterItem(event,items){
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;
    if (key === undefined || value === undefined){
        return
    }
    if (key === 'logo'){
        console.log('key');
        showItems(items);
        return
    }
    const filtered = items.filter(item => item[key]===value);
    showItems(filtered);
}
loadItems()
.then(items=>{
    showItems(items)
    filterItems(items)
})