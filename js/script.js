let somma = 0;
function Spesa(){

    
    let prezzo = 0;

    prezzo = prompt ("quanto spendi?");

    prezzo = parseFloat( prezzo );

    if(prezzo > 0){
    somma += prezzo;

    console.log("TOTALE SPESA: "+ somma +"€")
    }
}