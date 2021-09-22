// document.getElementById("count-el").innerText = 5;
let count = 0;
let counter = document.getElementById("count-el");

const increment = () => {
    count++;
    counter.textContent = count;
};

const decrement = () => {
    let counter = document.getElementById("count-el");
    count--;
    counter.textContent = count;
};

const save = () => {
    let previousEntries = document.getElementById("save");
    previousEntries.textContent += count + " | ";
    count = 0;
    counter.textContent = count;
};
// .innerText() only shows "human-readable" elements 