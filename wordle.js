var health = 5;
var chosenWord = ""; 
var words = [ 
    "CRUSH", "LOVED", "BREAK", "DREAM", "SEVEN", "GLAZE", "SWEAT", "WOUND", "GAMES", "DANCE",
    "HEART", "MOVED", "TOUCH", "NIGHT", "OCEAN", "WOMEN", "CLOSE", "CUNTY", "WORLD", "RADIO",
    "SHAPE", "WHITE", "SPARE", "VINYL", "YOUTH","PEARL", "STAND", "CRAZY", "WRONG", "DRIVE",
    "TULIP", "EMPTY", "STARE", "EIGHT", "TEARS", "BLAME", "LUNCH", "PATHS", "BORED", "HATED",
    "UNDER", "STORM", "FAULT", "MAYBE", "OLDER", "STAIN", "QUICK", "CRIES", "PIECE", "LIMBS"
];

function setupGame() {
    chosenWord = words[Math.floor(Math.random() * 50)]; 
    console.log("Chosen Word: " + chosenWord); 
}

function checkWord() {
    if (health <= 0) return;

    let rowIndex = 5 - health;  

    let answer = prompt("Enter a word: ").toUpperCase();
	if (answer === null){
		return;
	}

    if (answer.length < 5 || answer.length > 5 ) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    let box0 = document.getElementById(`r-${rowIndex}-0`);
    let box1 = document.getElementById(`r-${rowIndex}-1`);
    let box2 = document.getElementById(`r-${rowIndex}-2`);
    let box3 = document.getElementById(`r-${rowIndex}-3`);
    let box4 = document.getElementById(`r-${rowIndex}-4`);

    box0.innerText = answer[0];
    box1.innerText = answer[1];
    box2.innerText = answer[2];
    box3.innerText = answer[3];
    box4.innerText = answer[4];

    const animation_duration = 500;

    // Row 1
    if (answer[0] == chosenWord[0]) {
        box0.style.backgroundColor = "#A95C68";
    } 
    else if (chosenWord.includes(answer[0])) {
        box0.style.backgroundColor = "#FF69B4"; 
    } 
    else {
        box0.style.backgroundColor = "#7393B3";
    }
    box0.classList.add('animated');
    box0.style.animationDelay = `${0 * animation_duration / 2}ms`;

    // Row 2
    if (answer[1] == chosenWord[1]) {
        box1.style.backgroundColor = "#A95C68";
    } 
    else if (chosenWord.includes(answer[1])) {
        box1.style.backgroundColor = "#FF69B4";
    } 
    else {
        box1.style.backgroundColor = "#7393B3	";
    }
    box1.classList.add('animated');
    box1.style.animationDelay = `${1 * animation_duration / 2}ms`;

    // Row 3
    if (answer[2] == chosenWord[2]) {
        box2.style.backgroundColor = "#A95C68";
    } 
    else if (chosenWord.includes(answer[2])) {
        box2.style.backgroundColor = "#FF69B4";
    } 
    else {
        box2.style.backgroundColor = "#7393B3";
    }
    box2.classList.add('animated');
    box2.style.animationDelay = `${2 * animation_duration / 2}ms`;

    // Row 4
    if (answer[3] == chosenWord[3]) {
        box3.style.backgroundColor = "#A95C68";
    } 
    else if (chosenWord.includes(answer[3])) {
        box3.style.backgroundColor = "#FF69B4";
    } 
    else {
        box3.style.backgroundColor = "#7393B3	";
    }
    box3.classList.add('animated');
    box3.style.animationDelay = `${3 * animation_duration / 2}ms`;

    // Row 5
    if (answer[4] == chosenWord[4]) {
        box4.style.backgroundColor = "#A95C68	";
    } 
    else if (chosenWord.includes(answer[4])) {
        box4.style.backgroundColor = "#FF69B4";
    } 
    else {
        box4.style.backgroundColor = "#7393B3";
    }
    box4.classList.add('animated');
    box4.style.animationDelay = `${4 * animation_duration / 2}ms`;
    
    health--; 

    if (answer == chosenWord) {
        alert("Congrats! You guessed it correctly.\n\nReload the page to play again!");
        health = -1;
        return;
    }

    if (health == 0) {
        alert(`Nice try! The word was ${chosenWord}.\n\nReload the page to try again!`);
    }
}