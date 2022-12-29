const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", () => {
    if(count<15) {count++; if(counter.style.color == "red") counter.style.color = "black";}
    else {counter.style.color = "red"; alert("15 is max for this counter");}
    counter.innerHTML = count;
});

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", () => {
    if(count >0) {count--; if(counter.style.color == "red") counter.style.color = "black";}
    else {counter.style.color = "red"; alert("this counter only counts positive integers");}
    counter.innerHTML = count;
});

const counter = document.getElementById("counter");
var count = 0

