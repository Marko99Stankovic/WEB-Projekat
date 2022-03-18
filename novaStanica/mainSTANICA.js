import { Stanica } from "./Stanica.js";
import {Lokacija} from "./Lokacija.js";
import { Korisnik } from "./Korisnik.js";


//"https://localhost:5001/Stanica/PreuzmiStanice"
    fetch("https://localhost:5001/Stanica/PreuzmiStanice").then(p =>{ //pokupio sve vrtove
        p.json().then(data =>{       //treba pristupiti svakom od njih i zato-->deserijalizacija json-a
    //ovo data je LISTA Stanica=> da bismo mogli da upisemo svaki pojedinacno, prolazis se kroz forEach
            data.forEach(stanica => {
                //alert(stanica.nazivStanice);//provera
                const st1 = new Stanica( stanica.id,stanica.nazivStanice, stanica.n, stanica.m, stanica.kapacitet);  
                st1.crtajStanicu(document.body);
                
            //    alert(stanica);
                //-----------------------------------------------------TEST
                //upis Lokacije
                    stanica.lokacije.forEach(lok=> {
                        //alert(lok);//provera
                        var lokacija = st1.lokacije[lok.x * st1.n + lok.y];
                         if(lok.maxKapacitet >= lok.kapacitet + lokacija.kapacitet)
                         {
                             lokacija.azurirajLokaciju( lok.id,lok.imeKorisnika, lok.prezKorisnika, lok.brojTelefona,lok.kolicina, lok.tip, lok.modelVozila, lok.Registarska, lok.x, lok.y );
                         }
                   });
                //-----------------------------------------------------TEST
            });
        });                
    });  


















     //const st1 = new Stanica("Stanica1", 3, 3, 1);  // max 1 vozilo
     //st1.crtajStanicu(document.body);
     //
     //const st2 = new Stanica("Zoo vrtich", 5, 5, 1);  //max 1 vozilo
     //st2.crtajStanicu(document.body);
     // 
     