using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backStanica.Models
{
    [Table("Korisnik")]
    public class Korisnik
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("ImeKorisnika")]
        [MaxLength(255)]
        public string ImeKorisnika { get; set; }

        [Column("PrezKorisnika")]
        [MaxLength(255)]
        public string PrezKorisnika { get; set; }

        [Column("BrojTelefona")]
        [MaxLength(255)]
         public string BrojTelefona { get; set; }
//-----------------------------------------------------------
        //pokazivac na Lokaciju
        [JsonIgnore]
        public Lokacija Lokacija { get; set; }

    }
}