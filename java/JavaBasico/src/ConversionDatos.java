
public class ConversionDatos {

	public static void main(String[] args) {
		byte numeroByte = 127;
		short numeroShort = numeroByte;
		int numeroInt = numeroShort;
		long numeroLong = numeroInt;
		
		// casteo o parseo
		int otroInt = (int) numeroLong;
		short otroShort = (short) otroInt;
		byte otroByte = (byte) otroShort;		

	}

}
