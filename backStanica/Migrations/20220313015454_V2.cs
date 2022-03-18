using Microsoft.EntityFrameworkCore.Migrations;

namespace backStanica.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KorisnikID",
                table: "Vozilo",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vozilo_KorisnikID",
                table: "Vozilo",
                column: "KorisnikID");

            migrationBuilder.AddForeignKey(
                name: "FK_Vozilo_Korisnik_KorisnikID",
                table: "Vozilo",
                column: "KorisnikID",
                principalTable: "Korisnik",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vozilo_Korisnik_KorisnikID",
                table: "Vozilo");

            migrationBuilder.DropIndex(
                name: "IX_Vozilo_KorisnikID",
                table: "Vozilo");

            migrationBuilder.DropColumn(
                name: "KorisnikID",
                table: "Vozilo");
        }
    }
}
