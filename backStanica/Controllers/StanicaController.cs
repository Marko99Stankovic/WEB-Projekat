using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backStanica.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backStanica.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StanicaController : ControllerBase
    {   
        public StanicaContext Context { get; set; }

        public StanicaController(StanicaContext context)
        {
            Context = context; //da bi se upisivalo u property na nivou kontrolera: vrednost koja je kroz dependency injection poslata kroz konstruktor  
        }

        //METODE KONTROLERA:koje vracaju/upisuju/brisu

        //metoda koja vraca SVE STANICE

        [Route("PreuzmiStanice")]
        [HttpGet] //tip metode
        public async Task<List<Stanica>> PreuzmiStanice()
        {
            return await Context.Stanice.Include(p=> p.Lokacije).ToListAsync();
        }
//--------------------------------------------------------------
        [Route("UpisiStanicu")]
        [HttpPost]
        public async Task UpisiStanicu([FromBody] Stanica stanica)
        { 
            Context.Stanice.Add(stanica);
            await Context.SaveChangesAsync();
        }
//--------------------------------------------------------------
        [Route("IzmeniStanicu")]
        [HttpPut]               //V-->prosledjuje se izmenjeni objekat kroz Body
        public async Task IzmeniStanicu([FromBody] Stanica stanica)
        {
            Context.Update<Stanica>(stanica);
            await Context.SaveChangesAsync();           
        }
//---------------------------------------------------------------
        [Route("ObrisiStanicu/{id}")]
        [HttpDelete]
        public async Task ObrisiStanicu(int id)
        {
            var stanica = await  Context.Stanice.FindAsync(id);
            Context.Remove(stanica);
            await Context.SaveChangesAsync();
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ZA LOKACIJE:

        [Route("UpisiLokacije/{idStanice}")]
        [HttpPost]
        public async Task UpisiLokacije(int idStanice, [FromBody] Lokacija lok)
        {
            var stanica = await Context.Stanice.FindAsync(idStanice);
            lok.Stanica=stanica;
            Context.Lokacije.Add(lok);
            await Context.SaveChangesAsync();
        }
//-----------------------------------------------------v10

//----------------------------------------------------------------------------------------T E S T
        [Route("IzmeniLokaciju/{idStanice}")]
        [HttpPut]
        public async Task IzmeniLokaciju([FromBody] Lokacija lok)
        {
            Context.Update<Lokacija>(lok);
            await Context.SaveChangesAsync();
        }

        [Route("ObrisiLokaciju/{idStanice}")]
        [HttpDelete]
        public async Task ObrisiLokaciju(int idLokacije)
        {
            var lokacija = await Context.Lokacije.FindAsync(idLokacije);
            Context.Remove(lokacija);
            await Context.SaveChangesAsync();
        }

        [Route("PreuzmiLokaciju/{idStanice}")]
        [HttpGet]
        public async Task<List<Lokacija>> PreuzmiLokaciju()
        {
         //   return await Context.Lokacije.Include(p=>p.Korisnici).ToListAsync();
            return await Context.Lokacije.Include(p=>p.Vozila).ToListAsync();
        }
//////////////////////////////////////////////////////////////////////////////////
// ZA VOZILA:
        [Route("UpisiVozilo/{idLokacije}")]
        [HttpPost]
        public async Task UpisiVozilo(int idLokacije, [FromBody] Vozilo vozilo)
        {
            var lokacija = await Context.Lokacije.FindAsync(idLokacije);
            vozilo.Lokacija=lokacija;
            Context.Vozila.Add(vozilo);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniVozilo/{idLokacije}")]
        [HttpPut]
        public async Task IzmeniVozilo(int idLokacije, [FromBody] Vozilo vozilo)
        {
            Context.Update<Vozilo>(vozilo);
            await Context.SaveChangesAsync();
        }

        [Route("ObrisiVozilo/(idLokacije)")]
        [HttpDelete]
        public async Task ObrisiVozilo(int idLokacije)
        {
            var vozilo = await Context.Vozila.FindAsync(idLokacije);
            Context.Remove(vozilo);
            await Context.SaveChangesAsync();
        }

//////////////////////////////////////////////////////////////////////////////////
// ZA KORISNIKA
    [Route("UpisiKorisnika/{idLokacije}")]
    [HttpPost]
    public async Task UpisiKorisnika(int idLokacije, [FromBody] Korisnik korisnik)
    {
         var lokacija = await Context.Lokacije.FindAsync(idLokacije);
            korisnik.Lokacija=lokacija;
            Context.Korisnici.Add(korisnik);
            await Context.SaveChangesAsync();
    }
    [Route("PreuzmiKorisnika/{idLokacije}")]    
    [HttpGet]
    public async Task<List<Lokacija>> PreuzmiKorisnika() 
    {
        return await Context.Lokacije.Include(p=>p.Korisnici).ToListAsync();
    }
    [Route("IzmeniKorisnika/{idLokacije}")]
    [HttpPut]
    public async Task IzmeniKorisnika(int idLokacije, [FromBody] Korisnik korisnik)
    {
        Context.Update<Korisnik>(korisnik);
        await Context.SaveChangesAsync();
    }
    [Route("ObrisiKorisnika/{idKorisnika}")]
    [HttpDelete]
    public async Task ObrisiKorisnika(int idKorisnika)
    {
        var korisnik = await Context.Korisnici.FindAsync(idKorisnika);
        Context.Remove(korisnik);
        await Context.SaveChangesAsync();
    }







    }
}
