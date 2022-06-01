package com.api;

import java.util.Scanner;

public class PruebaApi {

	public static void main(String[] args) {
		
		String nombre = "Jonathan";
		System.out.println(nombre);
		
		String apellido = new String("Vazquez");
		System.out.println(apellido);
		
		System.out.println(nombre.charAt(5));
		
		Integer.parseInt("50");
		
		
		//Scanner
		Scanner sc = new Scanner(System.in);
		sc.nextInt();
		sc.close();
		
		
		//Math
		Math.random();
		

	}

}
