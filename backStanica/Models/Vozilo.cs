using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backStanica.Models
{

    [Table("Vozilo")]
    public class Vozilo
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        
        [Column("Tip")]
        [MaxLength(255)]
        public string Tip { get; set; }

        [Column("ModelVozila")]
        [MaxLength(255)]
        public string ModelVozila { get; set; }

        [Column("Registarska")]
        [MaxLength(255)]
        public string Registarska { get; set; }
//-----------------------------------------------------------
       [JsonIgnore]
       public Lokacija Lokacija { get; set; }
       

    //    public Korisnik Korisnik { get; set; }

    }
}