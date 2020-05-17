
public class Jugador
{
  private String nombreCompleto;
  private String apellidos;
  private String ci;
  private int edad;

  public Jugador(String nombreCompleto, String apellidos, String ci, int edad)
  {
    this.nombreCompleto = nombreCompleto;
    this.apellidos = apellidos;
    this.ci = ci;
    this.edad = edad;
  }

  public String getNombreCompleto()
  {
    return this.nombreCompleto;
  }
  public String getApellidos()
  {
    return this.apellidos;
  }
  public String getci()
  {
    return this.ci;
  }
  public int getedad()
  {
    return this.edad;
  }

  public void setNombreCompleto(String n)
  {
    this.nombreCompleto = n;
  }
  public void setApellidos(String n)
  {
    this.apellidos = n;
  }
  public void setci(String n)
  {
    this.ci = n;
  }
  public void setedad(int n)
  {
    this.edad = n;
  }

  public void imprimir()
  {
    System.out.println("\t\tNombre: " +  this.nombreCompleto);
    System.out.println("\t\tApellidos: " +  this.apellidos);
    System.out.println("\t\tCi: " +  this.ci);
    System.out.println("\t\tEdad: " +  String.valueOf(this.nombreCompleto));
    System.out.println();
  }

}
