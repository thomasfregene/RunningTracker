//global variable
let entries = [];

const entriesWrapper = document.querySelector('#entries')

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue)
    entriesWrapper.appendChild(listItem)
}

function reducer(total, currentValue){
    return total + currentValue
}

function calcTotal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function weeklyHigh(){
    const high = Math.max(...entries)
    console.log(high)
}

function handleSubmit(event){
    //prevent default prevent browser to reload on submit
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    calcTotal()
    calcAverage();
    weeklyHigh()
}
//query selector acts like the css selector i.e can target html element and classes 
const form = document
.querySelector("form")
.addEventListener("submit", handleSubmit);