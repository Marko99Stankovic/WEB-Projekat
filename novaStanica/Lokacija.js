import { Korisnik } from "./Korisnik.js";
import { Vozilo } from "./Vozilo.js";
export class Lokacija{
    constructor( id,i, j, Maxkapacitet){
        this.id=id;//-------------------------------------<<<<brisi
        this.x=i;
        this.y=j;
        this.Maxkapacitet=Maxkapacitet;
            this.kapacitet=0;
            this.miniKontejner=null;
                this.kontVozila=null;
                this.konKorisnik=null;
            this.korisnici=[];
            this.vozila=[];       
   }
            
dodajKorisnika(user){
    this.korisnici.push(user);
}
dodajVozilo(vehicle){
    this.vozila.push(vehicle);
}          
//--
    vratiBoju(){
        if(!this.tip)
        return "#30c1ff";
        else
        return this.tip;
    }
    crtajLokaciju(host){
        this.miniKontejner = document.createElement("div");
        this.miniKontejner.className="lok";
        this.miniKontejner.innerHTML="Lokacija: ("+this.x+"," +this.y+")";
        this.miniKontejner.style.backgroundColor=this.vratiBoju();
        host.appendChild(this.miniKontejner);
    }

    azurirajLokaciju( id, imeKorisnika, prezKorisnika, brojTelefona, kolicina, tip, modelVozila, Registarska,  x, y ){
        console.log("pozvano azuriranje")
        if(kolicina+this.kapacitet > this.Maxkapacitet)
            alert("Ovo mesto je zauzeto!");
        else{
           
            console.log(kolicina);
            this.imeKorisnika=imeKorisnika;
            this.prezKorisnika=prezKorisnika;
            this.brojTelefona=brojTelefona;
            this.tip=tip;
            this.modelVozila=modelVozila;
            this.Registarska=Registarska;
            this.kapacitet+=kolicina;   //max 1-vozilo 1-korisnik
//------------------------------------------------------------------------Vrati
           //    let kor = new Korisnik(this.imeKorisnika, this.prezKorisnika, this.brojTelefona);
           //    this.dodajKorisnika(kor);
           //    kor.crtajKorisnika(this.miniKontejner);
        
           //    let voz= new Vozilo(this.tip, this.modelVozila,this.Registarska);
           //    this.dodajVozilo(voz);
           //    voz.crtajVozilo(this.miniKontejner);
//------------------------------------------------------------------------Vrati
              let kor = new Korisnik(this.imeKorisnika, this.prezKorisnika, this.brojTelefona);
              this.dodajKorisnika(kor);
              kor.crtajKorisnika(this.miniKontejner);
        
   //      fetch("https://localhost:5001/Stanica/PreuzmiKorisnika").then(p=>{
//
   //      p.json().then(data=>{
   //          //var korisnici = [];
   //          var tmp=x*this.n+y;
   //          var brel =0;
   //      data.forEach(kor=>{
   //      let kor1=new Korisnik(kor.imeKorisnika, kor.prezKorisnika, kor.brojTelefona);           
   //              korisnici[brel++]=kor.tmp;
   //              this.dodajKorisnika(kor1);
   //              kor1.crtajKorisnika(this.miniKontejner); 
   //          });
   //      });
   //  });
          







                let voz= new Vozilo(this.tip, this.modelVozila,this.Registarska);
                this.dodajVozilo(voz);
                voz.crtajVozilo(this.miniKontejner);
























            //test----------------------------------------------------test
                this.miniKontejner.style.backgroundColor=this.vratiBoju(); 
            


             //test----------------------------------------------------test Model
                let tipV;               
                if(tip=="green"){
                    tipV="Putnicko vozilo"
                }else if(tip=="yellow"){
                    tipV="Motocikl"
                }
            //test----------------------------------------------------test

            const racun=document.createElement("button");
            racun.classList="btn";
            racun.innerHTML="Prikazi cenu dnevne rezervacije"
            this.miniKontejner.appendChild(racun);
            racun.onclick=(ev)=>{
                if(tipV==="Putnicko vozilo")
                    alert("Cena parkinga za vozilo "+this.modelVozila+" je 10$");
                    else if(tipV==="Motocikl")
                        alert("Cena parkinga za vozilo "+this.modelVozila+" je 5$");
                    
            }
            
        }
    }
  
  
    obrisiLokaciju( id,imeKorisnika, prezKorisnika, brojTelefona, kolicina, tip, modelVozila, Registarska,  x, y ){
                                    // ovde default slicica izgleda lokacije
          this.imeKorisnika="";
          this.prezKorisnika="";
          this.brojTelefona=""
          this.tip=this.vratiBoju();//null ili sta je vec defaultno
          this.modelVozila="";
          this.Registarska="";
          this.kapacitet--;
          this.miniKontejner.innerHTML="Lokacija: ("+this.x+"," +this.y+")";
          this.miniKontejner.style.backgroundColor="#30c1ff";


          // UKLJUCI na kraju ovo dole
        //--------------------------------------------------------------------------------------

 //      fetch("https://localhost:5001/Stanica/ObrisiLokaciju/" +this.id + this.x + this.y, {
 //          method:"DELETE"
 //      }).then(el=>{
 //          if(el.ok){
 //              this.imeKorisnika="";
 //              this.prezKorisnika="";
 //              this.brojTelefona=""
 //              this.tip=this.vratiBoju();//null ili sta je vec defaultno
 //              this.modelVozila="";
 //              this.Registarska="";
 //              this.kapacitet--;
 //              this.miniKontejner.innerHTML="SLOBODNO PARKING MESTO";
 //              this.miniKontejner.style.backgroundColor="#30c1ff"   
 //              location.reload();
 //          }
 //      }).catch(err=>{
 //          console.log(err);
 //      });
//
            //--------------------------------------------------------------------------------------
    }          




////
}

