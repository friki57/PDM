


public class Main {
    public static void main(String[] args) {
        System.out.println("Prueba");
        Jugador[] ju = new Jugador[15];
        ju[0] = new Jugador("Erick", "Aranibar", "6400562", 21);
        ju[1] = new Jugador("Erick", "Aranibar", "6400562", 21);
        ju[2] = new Jugador("Erick", "Aranibar", "6400562", 21);
        ju[3] = new Jugador("Erick", "Aranibar", "6400562", 21);
        ju[4] = new Jugador("Erick", "Aranibar", "6400562", 21);



        Equipo[] eq = new Equipo[10];

        eq[0] = new Equipo("Wilterman", "Senior", ju);
        eq[1] = new Equipo("Wilterman", "Senior", ju);
        eq[2] = new Equipo("Wilterman", "Senior", ju);

        Campeonato c = new Campeonato("Copa pistón",eq);

        c.imprimir();

        Campeonato c2 = new Campeonato("Copa pistón",eq);

        c2.imprimir();
    }
}
