function kawa(){
    let numer = document.getElementById('numer').value
    let waga = document.getElementById('waga').value
    let wynik = document.getElementById('wynik')
    let koszt = 0

    if(numer > 3 || numer < 1){
        koszt = 0
        wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
    }
        else {
            if(numer == 1) {
            koszt = 5 * waga
            wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
            }
            if(numer == 2) {
            koszt = 7 * waga
            wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
            }
            if(numer == 3) {
            koszt = 6 * waga
            wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
            }
        }
        
    // if(numer = 1){
    //     koszt = 5 * waga 
    //     wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
    // }
    // if(numer = 2){
    //     koszt = 7 * waga
    //     wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
    // }
    // if(numer = 3){
    //     koszt = 6 * waga
    //     wynik.innerHTML='Koszt zamówienia wynosi '+koszt+' zł'
    // }
}
