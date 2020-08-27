let entries = [];

function handleSubmit(event){
    //prevent default prevent browser to reload on submit
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    console.log(entries)
}
//query selector acts like the css selector i.e can target html element and classes 
const form = document
.querySelector("form")
.addEventListener("submit", handleSubmit);