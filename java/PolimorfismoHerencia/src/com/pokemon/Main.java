package com.pokemon;

public class Main {

	public static void main(String[] args) {
		
		//Instanciando
		//Pokemon chikorita = new Pokemon(152,1,20,"Chikorita",false);
		
		//Utilizando los metodos de instancia
		//chikorita.comer();
		//chikorita.atacar();
		//chikorita.dormir();
		
		//TipoFuego fuego = new TipoFuego();
		
		System.out.println("--------------------------------");
		
		//Instanciando
		TipoPlanta chikorita2 = new TipoPlanta(152,1,20,"Chikorita2",false,1);

		//Utilizando los metodos de instancia
		chikorita2.comer();
		chikorita2.atacar();
		chikorita2.dormir();
		chikorita2.envenenar();
		chikorita2.paralizar();
		
		System.out.println("--------------------------------");
		
		//Instanciar
		Chikorita chikorita3 = new Chikorita(152,1,20,"Chikorita3",false,1,8);
		chikorita3.comer();
		chikorita3.comer("pasto");
		chikorita3.comer(2);
		
		chikorita3.atacar();
		chikorita3.dormir();
		
		chikorita3.envenenar();
		chikorita3.paralizar();
		
		chikorita3.latigo();
		
		System.out.println("--------------------------------");
		
		Charmander charmarder = new Charmander(4,3,50,"Charmander", false);
		
		charmarder.comer();
		charmarder.atacar();
		charmarder.dormir();
		
		charmarder.lanzaLlamas();
		charmarder.volar();
		charmarder.araniar();
		
	}

}
