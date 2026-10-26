let somma = 0;
function Spesa(){

    
    let prezzo = 0;

    prezzo = document.getElementById("price").value;
    

    prezzo = parseFloat( prezzo );
    somma = parseFloat( somma );

    if(prezzo > 0){

    somma += prezzo;    
    document.getElementById("tot").innerHTML = somma + " €";

    console.log("TOTALE SPESA: "+ somma +"€")
    }
}

function Reset(){

    somma = 0;
    document.getElementById("tot").innerHTML = somma + " €";

}