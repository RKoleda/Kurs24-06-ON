function interpretiereWetter(wetterlage) {
    switch (wetterlage) {
        case "Sonnig":
            console.log("Gehe spazieren");
            break;
        case "Regnerisch":
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        case "Schnee":
            console.log("Baue einen Schneemann");
            break;
        case "Windig":
            console.log("Fliege einen Drachen");
            break;
        default:
            console.log("Unbekannte Wetterlage");
    }
}


interpretiereWetter("Sonnig");      
interpretiereWetter("Regnerisch");  
interpretiereWetter("Schnee");      
interpretiereWetter("Windig");      
