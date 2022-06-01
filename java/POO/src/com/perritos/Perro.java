package com.perritos;

public class Perro {
	
	//atributos o propiedades
	String nombre;
	int edad;
	String raza;
	String tamanio;
	
	//constructor
	public Perro(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	//Metodos 
	public void ladrar() {
		System.out.println("El perro " + nombre + " hace Guauf");
	}
	
	public int edadPerruna() {
		return edad * 7;
	}
	
	//Metodos estaticos
	//Nos permite utilizarlo sin instanciar un objeto
	public static void mensaje() {
		System.out.println("Esta es una clase Perro");
	}


}
