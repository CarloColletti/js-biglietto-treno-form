
// quanti chilometri deve fare l'utente
const km_input = document.getElementById("km_input");
console.log("La distanza da percorrere è: ", km_input.value);

// quanti anni ha l'utente ?
const age_input = document.getElementById("age_input");
console.log("L'età del passeggero è: ", age_input.value);

// costo biglietto a km 
const tariffa = 0.21;
costo = tariffa * km_input.value;

// tasto per calcolo costo 
const button_submit = document.getElementById("button_submit")

// evento 
button_submit.addEventListener('click',

    function () {

        const age = age_input.value;

        // l'età è compresa tra i 18 e i 64 anni?
        if (age >= 18 && age <= 64) {
            console.log("Il costo del biglietto è:  ", costo.toFixed(2));
            document.getElementById("c_biglietto").innerHTML = (costo.toFixed(2));
        }
        // l'età è inferiore hai 18 anni?
        else if (age >= 65) {
            // prezzo senza sconto 
            console.log("Il costo del biglietto senza sconto è:  ", costo.toFixed(2));

            // eseguo uno sconto del 40% 
            let sconto = (costo / 100) * 40;
            let costo_sc = costo - sconto;
            // costo finale del biglietto
            console.log("Il costo del biglietto è:  ", costo_sc.toFixed(2));
            document.getElementById("c_biglietto").innerHTML = (costo_sc.toFixed(2));
        }
        // l'età è inferiore hai 18 anni?
        else {
            // prezzo senza sconto 
            console.log("Il costo del biglietto senza sconto è:  ", costo.toFixed(2));

            // eseguo uno sconto del 20% 
            let sconto = (costo / 100) * 20;
            let costo_sc = costo - sconto;

            // costo finale del biglietto
            console.log("Il costo del biglietto è:  ", costo_sc.toFixed(2));
            document.getElementById("c_biglietto").innerHTML = (costo_sc.toFixed(2));
        }


    }
)
