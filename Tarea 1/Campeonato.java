
public class Campeonato
{
  private String nombreCampeonato;
  private Equipo[] equipos;

  public Campeonato(String nombreCampeonato, Equipo[] equipos)
  {
    this.nombreCampeonato = nombreCampeonato;
    this.equipos = equipos;
  }

  public String getNombreCampeonato()
  {
    return this.nombreCampeonato;
  }
  public Equipo[] getEquipos()
  {
    return this.equipos;
  }

  public void setNombreCampeonato(String n)
  {
    this.nombreCampeonato = n;
  }
  public void setEquipos(Equipo[] n)
  {
    this.equipos = n;
  }

  public void imprimir()
  {
    System.out.println("Nombre del Campeonato: " +  this.nombreCampeonato);
    System.out.println("Equipos: ");
    for (int i = 0;i<equipos.length ;i++ ) {
      if(equipos[i]!=null)
      equipos[i].imprimir();
    }
  }
}
