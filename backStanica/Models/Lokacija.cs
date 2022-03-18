using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backStanica.Models
{
    [Table("Lokacija")]
    public class Lokacija
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Kapacitet")]
        public int Kapacitet { get; set; }

        [Column("MaxKapacitet")]        
        public int MaxKapacitet { get; set; }

        [Column("X")]
        public int X { get; set; }

        [Column("Y")]
        public int Y { get; set; } 


//-----------------------------------------------------------

        [JsonIgnore]    //atribut koji resava problem oko serijalizacije//da ne upadne u beskonacni loop |<--govori da nas ova Stanica ne interesiuje za serijalizaciju| zelimo da je imamo kao pokazivac
        //pokazivac na Stanica klasu
        public Stanica Stanica {get;set;}
//---
        // public Korisnik Korisnik {get;set;}
        public virtual List<Korisnik> Korisnici {get;set;}

        public virtual List<Vozilo> Vozila {get;set;}






    }
}