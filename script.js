
var language = {
    es: {
        h1Text: "Convertidor de números",
        h2Text: "Por favor, introduzca un número en uno de los formatos indicados y presione calcular",
        decText: "Formato decimal",
        HexText: "Formato hexadecimal",
        BinText: "Formato binario",
        CalcText: "Calcular",
        ClearText: "Resetear",
        EmptyErr: "Error: Los campos están vacíos",
        EqualErr: "Error: Los campos son iguales",
        OnlyOneErr: "Error: Introduzca un solo número"

    },
    en: {
        h1Text: "Number converter",
        h2Text: "Please enter a number in the appropiate format and press calculate",
        decText: "Decimal format",
        HexText: "Hexadecimal format",
        BinText: "Binary format",
        CalcText: "Calculate",
        ClearText: "Reset",
        EmptyErr: "Error: Fields are empty",
        EqualErr: "Error: Fields are already equal",
        OnlyOneErr: "Error: Please enter a single number"
    },
    eu: {
        h1Text: "Zenbaki kalkulatzaile",
        h2Text: "Mesedez, sartu zenbaki bat eta sakatu kalkulatu ",
        decText: "Formatu hamartarra ",
        HexText: "Fomartu hamaseitarra",
        BinText: "Formatu bitarra",
        CalcText: "Kalkulatu",
        ClearText: "Berregin",
        EmptyErr: "Akatsa: Hutsik daude",
        EqualErr: "Akatsa: Berdinak dira",
        OnlyOneErr: "Akatsa: Sartu zenbaki bakar bat"
    },

};

window.onload = () => {
    let lan = location.hash.substring(1,);
    var dec = document.getElementById("Dec");
    var hex = document.getElementById("Hex");
    var bin = document.getElementById("Bin");
    var btn1 = document.getElementById("butt1");
    btn1.addEventListener("click", convert);

    function convert() {
        let Notif = document.getElementById("Notificationh3");
        if (checkIfEmpty()) {
            Notif.innerText = language[lan].EmptyErr;
        }
        else if (checkIfEqual()) {
            Notif.innerText = language[lan].EqualErr;
        }
        else if (dec.value && !hex.value && !bin.value) {
            convertDec();
            Notif.innerText = "";
        }
        else if (hex.value && !dec.value && !bin.value) {
            convertHex();
            Notif.innerText = "";
        }
        else if (bin.value && !dec.value && !hex.value) {
            convertBin();
            Notif.innerText = "";
        }
        else if((dec.value && hex.value) || 
        (dec.value && bin.value) || 
        (hex.value && bin.value)){
            Notif.innerText = language[lan].OnlyOneErr;
        }
    }

    var btn2 = document.getElementById("butt2");
    btn2.addEventListener("click", clear);

    function clear() {
        dec.value = "";
        hex.value = "";
        bin.value = "";
    }

    function convertDec() {
        bin.value = Number(dec.value).toString(2);
        hex.value = Number(dec.value).toString(16);
    }

    function convertHex() {
        dec.value = parseInt(hex.value, 16);
        bin.value = Number(dec.value).toString(2);
    }

    function convertBin() {

        dec.value = parseInt(bin.value, 2);
        hex.value = Number(dec.value).toString(16);
    }

    function checkIfEqual() {
        if (dec.value == parseInt(hex.value, 16) && parseInt(hex.value, 16) == parseInt(bin.value, 2)) {
            return true;
        }
        else {
            return false;
        }
    }
    function checkIfEmpty() {
       
        if (!dec.value && !hex.value && !bin.value) {
            return true;
        }
        else {
            return false;
        }

    };

    changeLangOnLoad();
};


function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}


function changeLangOnLoad() {
   
    if (window.location.hash) {
        
        let h1 = document.getElementsByClassName("h1")[0];
        let h2 = document.getElementsByClassName("h2")[0];

        let dec = document.getElementById("Dec");
        let hex = document.getElementById("Hex");
        let bin = document.getElementById("Bin");

        let bCalc = document.getElementById("butt1");
        let bClear = document.getElementById("butt2");

        

        if (window.location.hash == "#es") {

            h1.innerText = language.es.h1Text;
            h2.innerText = language.es.h2Text;

            dec.placeholder = language.es.decText;
            hex.placeholder = language.es.HexText;
            bin.placeholder = language.es.BinText;

            bCalc.innerText = language.es.CalcText;
            bClear.innerText = language.es.ClearText;


        }
        else if (window.location.hash == "#eng") {

            h1.innerText = language.eng.h1Text;
            h2.innerText = language.eng.h2Text;

            dec.placeholder = language.eng.decText;
            hex.placeholder = language.eng.HexText;
            bin.placeholder = language.eng.BinText;

            bCalc.innerText = language.eng.CalcText;
            bClear.innerText = language.eng.ClearText;
        }
        else if (window.location.hash == "#eu") {

            h1.innerText = language.eu.h1Text;
            h2.innerText = language.eu.h2Text;

            dec.placeholder = language.eu.decText;
            hex.placeholder = language.eu.HexText;
            bin.placeholder = language.eu.BinText;

            bCalc.innerText = language.eu.CalcText;
            bClear.innerText = language.eu.ClearText;

        }
    }

}