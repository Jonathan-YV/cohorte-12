
public class OperadoresAritmeticos {
	
	public static void main(String[] args) {
		
		//Suma
		int suma = 200 + 5;
		
		//Resta 
		int resta = 200 - 50;
		
		//Multiplicacion
		int multiplicacion = 5 * 5;
		
		//Division
		float division = 10/3f;
		
		//Modulo
		int modulo = 5%2;
		
		

		float numero = 10;
		System.out.println(numero);
		
		//incremento
		numero++;
		++numero;
		
		//decremento
		numero--;
		--numero; //10


		//numero = numero + 2
		numero += 2;
		
		//numero = numero - 10
		numero -= 10;
		
		//numero = numero * 6
		numero *= 6;
		
		//numero = numero / 3
		numero /= 7f; //Peligro
		numero = (float) numero / 6;

//		System.out.println(suma);
//		System.out.println(resta);
//		System.out.println(multiplicacion);
//		System.out.println(division);
//		
//		System.out.println(modulo);
		
		System.out.println(numero);
		
		int edad = 15;
		
		String resultado = (edad <= 18) ? ("Menor de edad") : ("Mayor de edad");
		System.out.println(resultado);
	}
}
