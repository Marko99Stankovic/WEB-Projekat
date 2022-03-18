using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backStanica.Models
{       //V-->prosledjen je string koji je naziv tabele u bazi
    //atributi:
    [Table("Stanica")]
    public class Stanica
    {
        //za kolone u bazi potrebni su property/za svaku kolonu
        [Key]               //ova kolona je oznacena kao primarni kljuc
        [Column("ID")]
        public int ID { get; set; }

        [Column("NazivStanice")]
        [MaxLength(255)]
        public string NazivStanice { get; set; }

        [Column("Kapacitet")]
        
        public int Kapacitet { get; set; }
        
        [Column("N")]
        public int N { get; set; }
        
        [Column("M")]
        public int M { get; set; }
//-----------------------------------------------------------        
        // V-->pokazivac( ovde je foreignKey na drugu klasu Lokacija) na klasu lokacij kako bi se znalo da postoji neka veza izmedju njih
        public virtual List<Lokacija> Lokacije { get; set; }


    }
}
