// Scrivi un programma che stampi in console i numeri da 1 a 100,
//     ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".

const listEl = document.getElementById("list");

console.log("Inizio ciclo");

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("box");

    if (i % 15 == 0) {
        listItem.innerHTML = "fizzbuzz";
        listItem.classList.add("fizzbuzz");

    } else if (i % 5 == 0) {
        listItem.innerHTML = "buzz";
        listItem.classList.add("buzz");

    } else if (i % 3 == 0) {
        listItem.innerHTML = "fizz";
        listItem.classList.add("fizz");

    } else {
        listItem.innerHTML = i;
    }

    listEl.append(listItem);

    console.log(i);
}

console.log("Fine ciclo");