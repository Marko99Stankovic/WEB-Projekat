import { Stanica } from "./Stanica.js";

export class Korisnik{
    constructor( imeKorisnika, prezKorisnika, brojTelefona){
      //  this.id=id;
        this.imeKorisnika=imeKorisnika;
        this.prezKorisnika=prezKorisnika;
        this.brojTelefona=brojTelefona;
                
            this.korisnikDiv=null;
    }
    crtajKorisnika(host){
       
        this.korisnikDiv= document.createElement("div");
        this.korisnikDiv.classList="korisnikDiv";
        this.korisnikDiv.innerHTML="Korisnik: " +this.imeKorisnika+ ", "+this.prezKorisnika+", broj telefona:"+this.brojTelefona;
        this.korisnikDiv.style.color="brown";
        host.appendChild(this.korisnikDiv);
    }
}