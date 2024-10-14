function bestimmeKategorie(alter) {
    if (alter >= 0 & alter <= 12) {
        console.log("Kind");
    } else if (alter >= 13 & alter <= 17) {
        console.log("Jugendlicher");
    } else if (alter >= 18 & alter <= 64) {
        console.log("Erwachsener");
    } else if (alter >= 65) {
        console.log("Senior");
    } else {
        console.log("Ungueltiges Alter");
    }
}


bestimmeKategorie(5);   
bestimmeKategorie(15);  
bestimmeKategorie(30);  
bestimmeKategorie(70);  
