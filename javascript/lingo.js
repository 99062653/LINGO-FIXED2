import { words } from "../javascript/lingo-nl.js"
var lettersinput, lettersrandom, lettersrandomCOPY = [];
var attempts = 5, attempt = 0;
var randomwoord;

var container = document.getElementById("SpeelVeld"); 
var knop = document.getElementById("knop");
knop.onclick = function() { 
    checkWoord(document.getElementById("Input").value);
}

function loadGame(){
    randomwoord = words[Math.floor(Math.random() * words.length)];
    for(var l = 1; l <= 5; l++){
        for(var i = 1; i <= 5; i++){
            var blok = document.createElement("div");
            blok.id = "W" + l + "L" + i;
            container.appendChild(blok);   
        }
    }
    console.log(randomwoord);
    document.getElementById("W1L1").innerHTML = "<h1></h1>" + randomwoord[0];
}

function woordPlaatsen(woord){  
    if(woord.length != 5) {
        alert("Bij Lingo MOET je 5 letters invoeren. GAME OVER");
        location.reload();
    } else {
        lettersinput = [], lettersrandom = [], lettersrandomCOPY = [];
        
        for(var i = 0; i < woord.length; i++) {
            lettersinput[i] = woord[i];
        }   
        for(var i = 0; i < randomwoord.length; i++) {
            lettersrandom[i] = randomwoord[i];
        }

        for(var i = 0; i < lettersinput.length; i++){
            document.getElementById("W" + attempt + "L" +(i+1)).innerHTML="<h1></h1>"+ lettersinput[i];

            if(lettersinput[i] == lettersrandom[i]){
                document.getElementById("W" + attempt + "L" +(i+1)).style.backgroundColor="green";

                lettersrandom[i] = null;
            } else if(lettersrandom.includes(lettersinput[i])){
                document.getElementById("W" + attempt + "L" +(i+1)).style.backgroundColor="yellow";
                document.getElementById("W" + attempt + "L" +(i+1)).style.borderRadius="50%";
                document.getElementById("W" + attempt + "L" +(i+1)).style.color = "black";

                var index = lettersrandom.indexOf(lettersinput[i]);
                lettersrandom[index] = null;
            }
            console.log(lettersrandom)
        }
    }
}

function checkWoord(woord) {
    attempt++

    if(woord == randomwoord){
        alert("Je hebt gewonnen!");
        location.reload();
    } else if(attempt >= attempts) {
        alert("Helaas, je hebt verloren.");
        location.reload();
    }

    woordPlaatsen(woord);
    document.getElementById("W"+ attempt + "L1").innerHTML = "<h1></h1>" + randomwoord[0];
}

loadGame();