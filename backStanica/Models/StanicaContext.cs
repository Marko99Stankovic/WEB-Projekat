using Microsoft.EntityFrameworkCore;

namespace backStanica.Models
{
    


    public class StanicaContext : DbContext             //klasa stanicaContext nasledjuje klasu dbcontext
    {
        public DbSet<Stanica> Stanice {get;set;} 
        public DbSet<Lokacija> Lokacije {get;set;}
        public DbSet<Korisnik> Korisnici {get;set;}
        public DbSet<Vozilo> Vozila {get;set;}

                                                                //v---> ovo treba dodati:uvek kod svake app koja radi sa localDb bazama  
                    //DbContextOptions klasa koja se prosledjuje konstruktoru da bi se mogla dalje proslediti u base Konstruktor za DbContext klasu
        public StanicaContext(DbContextOptions options) : base(options)  //zbog dependency injectiona iz startup klase
        {


        }
    }
}