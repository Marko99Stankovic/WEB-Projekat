
export class Vozilo{
    constructor( tip, modelVozila, Registarska){
        //this.id=id;
        this.tip=tip;
        this.modelVozila=modelVozila;
        this.Registarska=Registarska;
            this.miniKontVozilo= null;

    }
    crtajVozilo(host){
     
     this.miniKontVozilo = document.createElement("div");
     this.miniKontVozilo.classList="miniVozilo";
     if(this.tip=="green"){
        this.miniKontVozilo.innerHTML= "Tip vozila: Putničko vozilo, Model: "+this.modelVozila+", Registarska tablica: "+this.Registarska;
    }else if(this.tip=="yellow"){
        this.miniKontVozilo.innerHTML= "Tip vozila: Motocikl, Model: "+this.modelVozila+", Registarska tablica: "+this.Registarska;
    }
     host.appendChild(this.miniKontVozilo);
    } 
    
}