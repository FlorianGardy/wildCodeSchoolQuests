// potatoes.js

let result = prompt("Hey mon ami, tu aimes ça manger des peutattes?");

if (result > 0) {
    for (let i = 1; i <= 7; i++) {
        let message = "";
        for (let j = 1; j <= i; j++) {
            message += "#";
        }
        console.log(message);
    }
    alert("En voici quelques unes !")
} else if (result < 0) {
    alert("Vous me décevez grandement...");
} else {
    alert("Je vous sens comme tiraillé");
}