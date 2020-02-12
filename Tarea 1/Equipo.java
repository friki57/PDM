
public class Equipo
{
  private String nombreEquipo;
  private String categoria;
  private Jugador[] jugadores;

  public Equipo(String nombreEquipo, String categoria, Jugador[] jugadores)
  {
    this.nombreEquipo = nombreEquipo;
    this.categoria = categoria;
    this.jugadores = jugadores;
  }

  public String getNombreEquipo()
  {
    return this.nombreEquipo;
  }
  public String getCategoria()
  {
    return this.categoria;
  }
  public Jugador[] getJugadores()
  {
    return this.jugadores;
  }

  public void setNombreEquipo(String n)
  {
    this.nombreEquipo = n;
  }
  public void setCategoria(String n)
  {
    this.categoria = n;
  }
  public void setJugadores(Jugador[] n)
  {
    this.jugadores = n;
  }

  public void imprimir()
  {
    System.out.println("\tNombre del equipo: " +  this.nombreEquipo);
    System.out.println("\tCategoria: " +  this.categoria);
    System.out.println("\tJugadores: ");
    for (int i = 0;i<jugadores.length ;i++ ) {
      if(jugadores[i]!=null)
      jugadores[i].imprimir();
    }
    System.out.println();
  }

}
