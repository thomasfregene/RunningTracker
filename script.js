let entries = [];

const entriesWrapper = document.querySelector('#entries')

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue)

    entriesWrapper.appendChild(listItem)
}

function reducer(total, currentValue){
    return total + currentValue
}

function handleSubmit(event){
    //prevent default prevent browser to reload on submit
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry)
}
//query selector acts like the css selector i.e can target html element and classes 
const form = document
.querySelector("form")
.addEventListener("submit", handleSubmit);