import { Lokacija } from "./Lokacija.js";
export class Stanica{
    constructor( id, nazivStanice, n, m, kapacitetLok){
        this.id=id;
        this.nazivStanice=nazivStanice;
        this.n=n;
        this.m=m;
        this.kapacitet=kapacitetLok;
            this.kontejner=null;
            this.lokacije=[];
    }
    dodajLokaciju(lok){                      
        this.lokacije.push(lok);
    }
    crtajStanicu(host){
        if(!host)
        throw new Exception("roditeljski element ne postoji");
    
        this.kontejner=document.createElement("div");                                                        
        this.kontejner.classList.add("kontejner");  
            host.appendChild(this.kontejner);                                                      
                this.crtajFormu(this.kontejner); 
                this.crtajLokacije(this.kontejner);  
    }
    
    crtajFormu(host){                                      
        const kontForma = document.createElement("div");    
        kontForma.className="kontForma";    
        host.appendChild(kontForma);

        var elLabela = document.createElement("h3"); 
        elLabela.innerHTML="Rezervišite parking mesto";
        elLabela.style.alignSelf="center";
        kontForma.appendChild(elLabela);
            //------------------------------------------------------------------------------------------------------------------------88  
        const kontKorisnik=document.createElement("div");
        kontKorisnik.className="kontKorisnik";
        kontForma.appendChild(kontKorisnik);
       
        let nizLabela=["Ime", "Prezime", "Broj telefona"];
        let klaseKorisnika=["imeKorisnika", "prezKorisnika", "brojTelefona" ];
            let txbx =null;
            let labF =null;     
            nizLabela.forEach((el, i)=>{
                txbx=document.createElement("input");
                labF=document.createElement("label");
                labF.innerHTML=el;
                txbx.className=klaseKorisnika[i];      //klase 
                kontKorisnik.appendChild(labF);
                kontKorisnik.appendChild(txbx);  
            });
        elLabela= document.createElement("label");
        elLabela.innerHTML="Tip vozila"
        kontForma.appendChild(elLabela);
            let tipoviVozila= ["Putničko vozilo", "Motocikl",];
            let tipoviBoja= ["green", "yellow"];
            let opcija=null;
            let labela=null;
                let divRb= null; //|O| elNiza|
            tipoviVozila.forEach((element, index)=>{
                 divRb = document.createElement("div");
                opcija = document.createElement("input");
                opcija.type="radio";
                opcija.name = this.nazivStanice;
                opcija.value= tipoviBoja[index];
                labela = document.createElement("label");
                labela.innerHTML=element;
                divRb.appendChild(opcija);
                divRb.appendChild(labela);
                kontForma.appendChild(divRb);   //  |O| elNiza| 
            });
        let modeliNiz=["Model", "Registarska oznaka vozila"];
        let klaseVozila=["modelVozila", "klasaRegOznake"];
            txbx=null;
            labF=null;
            modeliNiz.forEach((el,i)=>{
                txbx=document.createElement("input");
                labF=document.createElement("label");
                labF.innerHTML=el;
                txbx.className=klaseVozila[i];
                kontForma.appendChild(labF);
                kontForma.appendChild(txbx);
            });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    //KOLICINA
            elLabela = document.createElement("label");
            elLabela.innerHTML="Odaberite koordinate parking mesta:";
            kontForma.appendChild(elLabela)
            //input polje za unos
            let tb= document.createElement("input");
            tb.className="kolicina";
            tb.type="number";
            tb.value=1;
            tb.style.display='none';        //krije textBox
            kontForma.appendChild(tb); 

                opcija=null;
                labela=null;
                divRb= null;  

    // za X
    divRb = document.createElement("div"); 
    let selX = document.createElement("select"); //select element za X
    labela = document.createElement("label");
    labela.innerHTML="X:";
        divRb.appendChild(labela);
        divRb.appendChild(selX);
           for(let i =0;i<this.m; i++){
               opcija = document.createElement("option");
               opcija.innerHTML=i;
               selX.appendChild(opcija);
           }
           kontForma.appendChild(divRb);
    // za Y
    let selY = document.createElement("select");
    labela = document.createElement("label");
    labela.innerHTML="Y:";
    divRb.appendChild(labela);
    divRb.appendChild(selY); 
            for(let i =0;i<this.n; i++){
                opcija = document.createElement("option");
                opcija.innerHTML=i;
                selY.appendChild(opcija);
            }
            kontForma.appendChild(divRb);



///BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB     
    const dugme = document.createElement("button");
    dugme.innerHTML="Zauzmi lokaciju";
    kontForma.appendChild(dugme);
    dugme.onclick=(ev)=>{
      
    //VRATI OVO------------------------------------------------------------------------------------------------------------------------88     
        const imeKorisnika = this.kontejner.querySelector(".imeKorisnika").value; //pokupi ono sto ima className="imeKorisnika"
        const prezKorisnika =this.kontejner.querySelector(".prezKorisnika").value;
        const brojTelefona = this.kontejner.querySelector(".brojTelefona").value;
        const tip = this.kontejner.querySelector(`input[name='${this.nazivStanice}']:checked`); //KLASA Lokacija
        const modelVozila=this.kontejner.querySelector(".modelVozila").value;
        const Registarska=this.kontejner.querySelector(".klasaRegOznake").value;
        const kolicina = parseInt( this.kontejner.querySelector(".kolicina").value);
    //VRATI OVO------------------------------------------------------------------------------------------------------------------------88       
        if( tip==null || imeKorisnika=="" || prezKorisnika=="" || brojTelefona=="" || modelVozila=="" || Registarska=="" || kolicina==0){
                alert("Popunite sva polja!");
               return 0;
            }//else
            if(imeKorisnika=="")
            alert(imeKorisnika);

                        let x=parseInt(selX.value);
                        let y=parseInt(selY.value);
//-------------Test--------------------------------------------------------88  <--ovo sve vrati ako pravi problem
                let provera=this.lokacije.find(lok=>lok.imeKorisnika==imeKorisnika && lok.prezKorisnika==prezKorisnika && lok.brojTelefona==brojTelefona)


                if(provera ||this.brojTelefona==brojTelefona)
                    alert("Korisnik "+imeKorisnika+" "+prezKorisnika+" je vec rezervisao parking mesto. Moguce je rezervisati jedno parking mesto po korisniku! ")
                else
            //sustina:
                this.lokacije[x*this.n+y]
                    .azurirajLokaciju( this.id,imeKorisnika, prezKorisnika, brojTelefona, kolicina, tip.value, modelVozila, Registarska,  x, y );
                    console.log(Stanica);
                    
                this.ClearFields();

//------------TEst-----------------------------------------------------------88
     //      fetch("https://localhost:5001/Stanica/UpisiLokacije" +this.id, { //
     //          method: "POST",
     //          headers:{
     //              "Content-Type": "application/json"
     //          },
     //          body: JSON.stringify({
     //              imeKorisnika: imeKorisnika,
     //              prezKorisnika: prezKorisnika,
     //              brojTelefona: brojTelefona,
     //              tip: tip.value,
     //              modelVozila: modelVozila,
     //              Registarska:Registarska,
     //              kolicina:kolicina,
     //              x: x,
     //              y: y,
     //          })
     //      }).then(p=> {
     //          if(p.ok){
     //              this.lokacije[x*this.n+y].azurirajLokaciju( id, imeKorisnika, prezKorisnika, brojTelefona, kolicina, tip.value, modelVozila, Registarska,  x, y );
     //          }else if(p.status==400){
     //              const greskaLok={x: 0, y: 0};
     //              p.json().then(p => {
     //                  greskaLok.x = p.x;
     //                  greskaLok.y= p.yx;
//
     //                  alert("Korisnik "+imeKorisnika+" "+prezKorisnika+" je vec rezervisao parking mesto. Moguce je rezervisati jedno parking mesto po korisniku!");
     //                  
     //              })
     //          }
     //          else{
     //              alert("Greska pri upisu!");    
     //          }
     //      }).catch(p=>{
     //          alert("Greska pri upisu!");
     //      })
 }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////-----OSLOBADJANJE------
    let dugmeBrisi = document.createElement("button");
    dugmeBrisi.innerHTML="Oslobodi/izmeni lokaciju";
    kontForma.appendChild(dugmeBrisi);
        dugmeBrisi.onclick=(ev)=>{
     //---------------------------------------------------------------------------------------------------------------------------- T E S T
        const imeKorisnika = this.kontejner.querySelector(".imeKorisnika").value;

        const prezKorisnika =this.kontejner.querySelector(".prezKorisnika").value;
        const brojTelefona = this.kontejner.querySelector(".brojTelefona").value;
        const tip = this.kontejner.querySelector(`input[name='${this.nazivStanice}']:checked`); 
        const modelVozila=this.kontejner.querySelector(".modelVozila").value;
        const Registarska=this.kontejner.querySelector(".klasaRegOznake").value;
        const kolicina = parseInt( this.kontejner.querySelector(".kolicina").value);
            let x=parseInt(selX.value);
            let y=parseInt(selY.value);
   

        this.lokacije[x*this.n+y]
            .obrisiLokaciju(imeKorisnika, prezKorisnika, brojTelefona, kolicina, tip.value, modelVozila, Registarska,  x, y );            
        }







        //---------------------------------------------------------------------------------------------------------------------------- T E S T
}

ClearFields() {

    document.querySelector(".imeKorisnika").value = "";
    document.querySelector(".prezKorisnika").value = "";
    document.querySelector(".brojTelefona").value="";
    document.querySelector(".modelVozila").value = "";
    document.querySelector(".klasaRegOznake").value = "";
    document.querySelector(".kolicina").value = "";
}

crtajLokacije(host){                                               
    const kontLokacije = document.createElement("div");
    kontLokacije.className="kontLokacije";
    host.appendChild(kontLokacije);       
     let red;
     let lok;
     for(let i=0; i<this.m; i++){
            red=document.createElement("div");
            red.className="red";
            kontLokacije.appendChild(red);
            for(let j=0; j<this.n;j++){               //v-->ovo je Maxkapacitet iz klase Lokacija
                lok = new Lokacija(this.id, i, j, this.kapacitet); 
            this.dodajLokaciju(lok);
                lok.crtajLokaciju(red);                         
                console.log(lok);

            }
        }
    }

//END
}