function Discover() {
    const weight = document.getElementById("weight");
    const weightValue = weight.value;
    console.log(weightValue);
    const result = document.getElementById("result");
    const resultDescription = document.getElementById("result-description");


   if (weightValue >= 100 && weightValue <= 125) {
    result.innerHTML = "You fall into the Flyweight division!";
    resultDescription.innerHTML = "You're between 100lbs and 125lbs. Welcome to the Flyweight division! Picture yourself facing off against the lightning-fast Demetrious 'Mighty Mouse' Johnson and the tactical prowess of Henry 'The Messenger' Cejudo.";
} else if (weightValue > 125 && weightValue <= 135) {
    result.innerHTML = "You fall into the Bantamweight division!";
    resultDescription.innerHTML = "You're between 125lbs and 135lbs. Congratulations, bantamweight warrior! Step into the Octagon with the striking skills of T.J. Dillashaw and the resilience of Dominick 'The Dominator' Cruz.";
} else if (weightValue > 135 && weightValue <= 145) {
    result.innerHTML = "You fall into the Featherweight division!";
    resultDescription.innerHTML = "You're between 135lbs and 145lbs. You're a featherweight force! Imagine going toe-to-toe with the explosive power of Conor 'The Notorious' McGregor and the precision striking of Max 'Blessed' Holloway.";
} else if (weightValue > 145 && weightValue <= 155) {
    result.innerHTML = "You fall into the Lightweight division!";
    resultDescription.innerHTML = "You're between 145lbs and 155lbs. Welcome to the Lightweight division! Picture yourself in a showdown against the grappling mastery of Khabib 'The Eagle' Nurmagomedov and the striking brilliance of Conor McGregor.";
} else if (weightValue > 155 && weightValue <= 170) {
    result.innerHTML = "You fall into the Welterweight division!";
    resultDescription.innerHTML = "You're between 155lbs and 170lbs. Welterweight warrior, prepare for battle! Face off against the technical prowess of Georges 'Rush' St-Pierre and the knockout power of Robbie 'Ruthless' Lawler.";
} else if (weightValue > 170 && weightValue <= 185) {
    result.innerHTML = "You fall into the Middleweight division!";
    resultDescription.innerHTML = "You're between 170lbs and 185lbs. Middleweight might! Picture yourself in the Octagon against the legendary Anderson 'The Spider' Silva and the well-rounded skills of Israel 'The Last Stylebender' Adesanya.";
} else if (weightValue > 185 && weightValue <= 205) {
    result.innerHTML = "You fall into the Light Heavyweight division!";
    resultDescription.innerHTML = "You're between 185lbs and 205lbs. You're a light heavyweight powerhouse! Imagine standing across from the dominance of Jon 'Bones' Jones and the knockout prowess of Chuck 'The Iceman' Liddell.";
} else if (weightValue > 205) {
    result.innerHTML = "You fall into the Heavyweight division!";
    resultDescription.innerHTML = "You're above 205lbs. Congratulations, heavyweight titan! Picture yourself in a clash of giants against the knockout power of Francis 'The Predator' Ngannou and the resilience of Stipe 'Miocic'.";
} else {
    result.innerHTML = "Invalid weight or weight not provided.";
    resultDescription.innerHTML = ""; // Clear description for invalid input
}
    }

